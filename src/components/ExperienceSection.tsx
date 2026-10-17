import { portfolioProjects, projectHref } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  return <section className="career experience-section" id="career" aria-labelledby="experience-heading">
    <div className="shell">
      <div className="section-head"><div><small>01 / PROJECTS</small><h2 id="experience-heading">Experience</h2></div><small>카드를 눌러 참여 프로젝트를 살펴보세요</small></div>
      <div className="experience-grid">
        {portfolioProjects.map((project, index) => <a className="experience-card" key={project.id} href={projectHref(project.id)}>
          <span className="experience-number">0{index + 1} / 04</span>
          <span className={`experience-monogram${project.icon ? " experience-monogram-image" : ""}`} aria-hidden="true">{project.icon ? <img src={assetUrl(project.icon)} alt="" /> : project.initials}</span>
          <h3>{project.title}</h3>
          <ul className="career-tags" aria-label="참여 내용">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <p>{project.summary}</p>
          <span className="experience-open">프로젝트 살펴보기<span aria-hidden="true">↗</span></span>
        </a>)}
      </div>
    </div>
  </section>;
}
