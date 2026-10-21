import { works } from "../data/works";
import "./WorkSwitcher.css";

export default function WorkSwitcher({ currentId }: { currentId: string }) {
  return <nav className="work-switcher" aria-label="주요 작업 선택">
    {works.map((work, index) => {
      const current = work.id === currentId;
      return <a key={work.id} className={`work-switcher-card${current ? " is-current" : ""}`} href={`#/works/${encodeURIComponent(work.id)}`} aria-current={current ? "page" : undefined}>
        <span className="work-switcher-top">0{index + 1} / WORK</span>
        <span className="work-switcher-title">{work.title}</span>
        <span className="work-switcher-state"><span>{current ? "현재 작업" : "작업 보기"}</span><span aria-hidden="true">{current ? "●" : "↗"}</span></span>
      </a>;
    })}
  </nav>;
}
