import { works } from "../data/works";
import "./ProjectSwitcher.css";

export default function WorkSwitcher({ currentId }: { currentId: string }) {
  return <nav className="project-switcher" aria-label="주요 작업 선택">
    {works.map((work, index) => {
      const current = work.id === currentId;
      return <a key={work.id} className={`project-switcher-card${current ? " is-current" : ""}`} href={`#/works/${encodeURIComponent(work.id)}`} aria-current={current ? "page" : undefined}>
        <span className="project-switcher-top"><span>0{index + 1} / WORK</span><span aria-hidden="true">0{index + 1}</span></span>
        <span className="project-switcher-title">{work.title}</span>
        <span className="project-switcher-state"><span>{current ? "현재 작업" : "작업 보기"}</span><span aria-hidden="true">{current ? "●" : "↗"}</span></span>
      </a>;
    })}
  </nav>;
}
