import { assetUrl } from "../utils/assetUrl";
import { useEffect, useRef, useState, type ReactNode } from "react";
import ReactMarkdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import ZoomableImage from "./ZoomableImage";
import type { Root, Element } from "hast";
import "../pages/WorkDetailPage.css";
// IDs are assigned from parsed headings, so code blocks and duplicate titles are safe.
function headingIds() {
  return (tree: Root) => {
    let index = 0;
    let subIndex = 0;
    function walk(node: Root | Element) {
      for (const child of node.children) {
        if (child.type !== "element") continue;
        if (child.tagName === "h2")
          child.properties.id = `work-section-${++index}`;
        if (child.tagName === "h3")
          child.properties.id = `work-subsection-${++subIndex}`;
        walk(child);
      }
    }
    walk(tree);
  };
}
// Only consume a positive pixel width immediately after a parsed image.
// Code samples and other Markdown text are left untouched.
function imageWidths() {
  return (tree: Root) => {
    function walk(node: Root | Element) {
      node.children.forEach((child, index) => {
        if (child.type !== "element") return;
        const next = node.children[index + 1];
        if (child.tagName === "img" && next?.type === "text") {
          const match = /^\{width=([1-9]\d*)\}/.exec(next.value);
          if (match && Number.isSafeInteger(Number(match[1]))) {
            child.properties.width = Number(match[1]);
            next.value = next.value.slice(match[0].length);
          }
        }
        walk(child);
      });
    }
    walk(tree);
  };
}

// Use the first text line rather than the heading's padded section boundary.
function firstLineCenter(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const style = getComputedStyle(element);
  return rect.top + (parseFloat(style.borderTopWidth) || 0)
    + (parseFloat(style.paddingTop) || 0) + (parseFloat(style.lineHeight) || rect.height) / 2;
}

export default function DetailMarkdown({ body, leading, compactToc = false }: { body?: string; leading?: ReactNode; compactToc?: boolean }) {
  const article = useRef<HTMLDivElement>(null);
  const desktopToc = useRef<HTMLElement>(null);
  const mobileToc = useRef<HTMLDetailsElement>(null);
  const [toc, setToc] = useState<
    { id: string; label: string; level: number; number?: number; sectionId: string }[]
  >([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    const headings = [
      ...(article.current?.querySelectorAll<HTMLHeadingElement>("[data-toc], .work-markdown h2, .work-markdown h3") ??
        []),
    ];
    let sectionNumber = 0;
    let sectionId = "";
    setToc(
      headings.map((el) => {
        if (el.tagName === "H2") sectionId = el.id;
        return {
          id: el.id,
          label: el.dataset.toc || el.textContent || "",
          level: Number(el.tagName.slice(1)),
          number: el.tagName === "H2" ? ++sectionNumber : undefined,
          sectionId,
        };
      }),
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      const cutoff =
        (document.querySelector(".site-header")?.getBoundingClientRect()
          .bottom ?? 88) + 36;
      const readingLine = compactToc
        ? Math.min(cutoff + 160, window.innerHeight * 0.4)
        : cutoff;
      let current = headings[0]?.id ?? "";
      const sidebar = desktopToc.current;
      const desktopVisible = !!sidebar?.getClientRects().length;
      const rows = new Map(Array.from(sidebar?.querySelectorAll<HTMLButtonElement>("button[data-heading-id]") ?? [])
        .map(button => [button.dataset.headingId, button.querySelector<HTMLElement>(".work-toc-title")!]));
      for (const h of headings) {
        const anchorOffset = parseFloat(getComputedStyle(h).scrollMarginTop) || 0;
        const row = rows.get(h.id);
        // Each desktop section crosses its own TOC row, in both scroll directions.
        // Hidden/offscreen rows fall back to the visible reading area.
        if (desktopVisible && row && !compactToc) {
          const line = Math.min(window.innerHeight - 24, Math.max(cutoff, firstLineCenter(row)));
          if (firstLineCenter(h) <= line + 2) current = h.id;
        } else if (h.getBoundingClientRect().top <= Math.max(readingLine, anchorOffset) + 2) {
          current = h.id;
        }
      }
      // The final short section cannot always reach the top reading line.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        const lastVisible = headings.filter(h => h.getBoundingClientRect().top < window.innerHeight).at(-1);
        if (lastVisible) current = lastVisible.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const content = article.current;
    const observer = new ResizeObserver(schedule);
    const sidebar = desktopToc.current;
    if (sidebar) {
      observer.observe(sidebar);
      sidebar.addEventListener("scroll", schedule, { passive: true });
    }
    if (content) {
      observer.observe(content);
      content.addEventListener("load", schedule, true);
    }
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      sidebar?.removeEventListener("scroll", schedule);
      content?.removeEventListener("load", schedule, true);
    };
  }, [body, leading, compactToc]);
  function jump(id: string) {
    if (mobileToc.current) mobileToc.current.open = false;
    const target = document.getElementById(id);
    const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    const sidebar = desktopToc.current;
    const button = Array.from(sidebar?.querySelectorAll<HTMLButtonElement>("button[data-heading-id]") ?? [])
      .find(item => item.dataset.headingId === id);
    const row = button?.querySelector<HTMLElement>(".work-toc-title");
    if (target && compactToc) {
      // Keep section links at a consistent reading position.
      const cutoff = (document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 88) + 36;
      const anchorOffset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - Math.max(cutoff, anchorOffset), behavior });
    } else if (target && sidebar?.getClientRects().length && row) {
      const cutoff = (document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 88) + 36;
      const stickyTop = parseFloat(getComputedStyle(sidebar).top) || 0;
      const rowOffset = firstLineCenter(row) - sidebar.getBoundingClientRect().top;
      const line = Math.min(window.innerHeight - 24, Math.max(cutoff, stickyTop + rowOffset));
      window.scrollTo({ top: window.scrollY + firstLineCenter(target) - line, behavior });
    } else {
      target?.scrollIntoView({ behavior, block: "start" });
    }
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
    setActive(id);
  }
  const activeSectionId = toc.find(item => item.id === active)?.sectionId || toc[0]?.sectionId;
  const contents = (
    <ul>
      {toc.map((item) => (
        <li
          key={item.id}
          className={[
            item.level > 2 ? "work-toc-subitem" : "",
            item.level > 3 ? "work-toc-detail" : "",
            compactToc && item.level === 2 && item.id === activeSectionId ? "work-toc-parent-active" : "",
          ].filter(Boolean).join(" ") || undefined}
        >
          <button
            type="button"
            data-heading-id={item.id}
            onClick={() => jump(item.id)}
            aria-current={active === item.id ? "location" : undefined}
          >
            {item.number !== undefined && (
              <span className="work-toc-number">{String(item.number).padStart(2, "0")}</span>
            )}
            <span className="work-toc-title">{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`work-detail-layout${toc.length ? "" : " without-toc"}${leading ? " with-leading" : ""}${compactToc ? " with-compact-toc" : ""}`}>
      {!!toc.length && (
        <>
          <aside className="work-toc-desktop" ref={desktopToc} aria-label="본문 목차">
            <p>CONTENTS</p>
            {contents}
          </aside>
          <details className="work-toc-mobile" ref={mobileToc}>
            <summary>CONTENTS</summary>
            {contents}
          </details>
        </>
      )}
      <div className="work-detail-content" ref={article}>
        {leading}
      <div className="work-markdown">
        {body ? (
          <ReactMarkdown urlTransform={(url, key, node) => {
            // The standalone exporter embeds raster assets directly in Markdown.
            // Allow them only as image sources; keep normal link sanitization.
            if (node.tagName === "img" && key === "src"
              && /^data:image\/(?:png|jpeg|gif|webp);base64,/i.test(url)) return url;
            return assetUrl(defaultUrlTransform(url));
          }}
            skipHtml
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[headingIds, imageWidths]}
            components={{
              p: ({ children, node }) => {
                const first = node?.children[0];
                const isNote = first?.type === "text" && first.value.trimStart().startsWith("※");
                return <p className={isNote ? "work-markdown-note" : undefined}>{children}</p>;
              },
              table: ({ children }) => (
                <div
                  className="work-table-scroll"
                  role="region"
                  aria-label="본문 표"
                  tabIndex={0}
                >
                  <table>{children}</table>
                </div>
              ),
              img: ({ src, alt, title, width }) => (
                <span
                  className="markdown-image"
                  style={
                    width
                      ? {
                          width: Number(width),
                          maxWidth: "100%",
                          marginInline: "auto",
                        }
                      : undefined
                  }
                >
                  {src && title ? (
                    <ZoomableImage src={src} alt={alt ?? ""} />
                  ) : (
                    <img src={src} alt={alt ?? ""} loading="lazy" />
                  )}
                  {title && <span className="work-image-caption">{title}</span>}
                </span>
              ),
            }}
          >
            {body}
          </ReactMarkdown>
        ) : (
          <p>상세 내용을 준비하고 있습니다.</p>
        )}
      </div>
      </div>
    </div>
  );
}
