import { portfolioProjects, projectHref } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  return <section className="career experience-section" id="career" aria-labelledby="experience-heading">
    <div className="shell">
      <div className="section-head">
        <div><small>01 / PROJECTS</small><h2 id="experience-heading">Experience</h2></div>
      </div>
      <div className="experience-grid">
        {portfolioProjects.map((project, index) => <a className={`experience-card${project.id === "monster-hair-salon" ? " experience-card-featured" : ""}`} key={project.id} href={projectHref(project.id)}>
          <span className="experience-number">0{index + 1} / 04</span>
          <span className={`experience-monogram${project.icon ? " experience-monogram-image" : ""}`} aria-hidden="true">{project.icon ? <img src={assetUrl(project.icon)} alt="" /> : project.initials}</span>
          <h3>{project.title}</h3>
          <ul className="career-tags" aria-label="참여 내용">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <p>{project.id === "monster-hair-salon" ? <>게임의 시작부터 엔딩까지<br /><strong>직접 플레이할 수 있는 시뮬레이터</strong>로 만들고, 팀과 함께 검증한 과정입니다.</> : project.summary}</p>
          <span className="experience-open">{project.id === "monster-hair-salon" ? "시뮬레이터와 기획 과정 보기" : "프로젝트 살펴보기"}<span aria-hidden="true">↗</span></span>
        </a>)}
      </div>
    </div>
  </section>;
}
