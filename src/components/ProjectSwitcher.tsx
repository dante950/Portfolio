import { useLayoutEffect, useRef } from "react";
import { portfolioProjects, projectHref } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import "./ProjectSwitcher.css";

export default function ProjectSwitcher({ currentId }: { currentId?: string }) {
  const switcherRef = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const switcher = switcherRef.current;
    const page = switcher?.closest<HTMLElement>(".personal-detail");
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!switcher || !page || !header) return;
    const measure = () => {
      page.style.setProperty("--project-header-height", `${header.getBoundingClientRect().height}px`);
      page.style.setProperty("--project-switcher-height", `${switcher.getBoundingClientRect().height}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    observer.observe(switcher);
    return () => observer.disconnect();
  }, []);

  return <nav className="project-switcher" ref={switcherRef} aria-label="참여 프로젝트 선택">
    {portfolioProjects.map((project, index) => {
      const current = project.id === currentId;
      return <a key={project.id} className={`project-switcher-card${current ? " is-current" : ""}`} href={projectHref(project.id)} aria-current={current ? "page" : undefined}>
        <span className="project-switcher-copy">
          <span className="project-switcher-number">0{index + 1} / PROJECT</span>
          <span className="project-switcher-title">{project.title}</span>
        </span>
        <span className="project-switcher-icon" aria-hidden="true">{project.icon ? <img src={assetUrl(project.icon)} alt="" /> : project.initials}</span>
      </a>;
    })}
  </nav>;
}
