import { portfolioProjects, projectHref } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import "./ProjectSwitcher.css";

export default function ProjectSwitcher({ currentId }: { currentId?: string }) {
  return <nav className="project-switcher" aria-label="참여 프로젝트 선택">
    {portfolioProjects.map((project, index) => {
      const current = project.id === currentId;
      return <a key={project.id} className={`project-switcher-card${current ? " is-current" : ""}`} href={projectHref(project.id)} aria-current={current ? "page" : undefined}>
        <span className="project-switcher-top"><span>0{index + 1} / PROJECT</span><span className={project.icon ? "project-switcher-icon" : undefined} aria-hidden="true">{project.icon ? <img src={assetUrl(project.icon)} alt="" /> : project.initials}</span></span>
        <span className="project-switcher-title">{project.title}</span>
        <span className="project-switcher-state"><span>{current ? "현재 프로젝트" : "프로젝트 보기"}</span><span aria-hidden="true">{current ? "●" : "↗"}</span></span>
      </a>;
    })}
  </nav>;
}
