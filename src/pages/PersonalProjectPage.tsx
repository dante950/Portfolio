import { assetUrl } from "../utils/assetUrl";
import SiteHeader from "../components/SiteHeader";
import DetailMarkdown from "../components/DetailMarkdown";
import {
  portfolioProjects,
  projectHref,
} from "../data/projects";
import "./PersonalProjectPage.css";
import MonsterProjectStory from "../components/MonsterProjectStory";
import MonsterSimulatorHero from "../components/MonsterSimulatorHero";
import LunaProjectStory from "../components/LunaProjectStory";
import GroceryProjectStory from "../components/GroceryProjectStory";
import FablesProjectStory from "../components/FablesProjectStory";
import ProjectSwitcher from "../components/ProjectSwitcher";
import ZoomableImage from "../components/ZoomableImage";
const bodies = import.meta.glob<string>("../content/personal/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
export default function PersonalProjectPage({ route }: { route: string }) {
  const project =
    route === "#/projects" || route === "#/personal"
      ? portfolioProjects[0]
      : portfolioProjects.find((item) => projectHref(item.id) === route.replace("#/personal/", "#/projects/"));
  const index = project ? portfolioProjects.indexOf(project) : -1;
  return (
    <>
      <SiteHeader active="projects" />
      <main className="work-detail personal-detail">
        <div className="shell">
          <ProjectSwitcher currentId={project?.id} />
          {project ? (
            <>
              <header className="work-detail-intro">
                <a className="work-detail-back" href="#career">← PROJECTS / 참여 프로젝트</a>
                <h1>{project.title}</h1>
                {project.id === "monster-hair-salon" && <MonsterSimulatorHero />}
                {!!project.screenshots?.length && (
                  <div className="project-build-gallery" role="group" aria-label="프로젝트 대표 이미지">
                    {project.screenshots.map((shot, i) => (
                      <div className="project-build-shot" key={i}>
                        {shot.src ? <ZoomableImage src={assetUrl(shot.src)} alt={shot.alt} /> : (
                          <div className="project-build-placeholder">
                            <strong>플레이 화면 {i + 1}</strong>
                            <span>캡처 이미지 준비 중</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {project.summary && (
                  <p className="work-detail-summary">{project.summary}</p>
                )}
                {!!project.tags.length && (
                  <ul className="career-tags" aria-label="프로젝트 태그">
                    {project.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                )}
              </header>
              {project.heroImage && (
                <img
                  className="work-detail-hero personal-project-hero"
                  src={assetUrl(project.heroImage)}
                  alt={project.heroImageAlt || project.title}
                />
              )}
              {!!project.info.length && (
                <section
                  className="personal-project-info"
                  aria-labelledby="personal-info-heading"
                >
                  <h2 id="personal-info-heading">PROJECT INFO</h2>
                  <dl className="work-detail-meta">
                    {project.info.map((item, i) => (
                      <div key={i}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}
              <DetailMarkdown
                leading={project.id === "monster-hair-salon" ? <MonsterProjectStory /> : project.id === "project-luna" ? <LunaProjectStory /> : project.id === "se-grocery" ? <GroceryProjectStory /> : project.id === "roulette-of-pebbles" ? <FablesProjectStory /> : undefined}
                body={
                  project.body
                    ? bodies[`../content/personal/${project.body}`]
                    : undefined
                }
              />
              <nav className="work-detail-pagination" aria-label="프로젝트 이동">
                <div>{index > 0 && <a href={projectHref(portfolioProjects[index - 1].id)}><small>← 이전 프로젝트</small>{portfolioProjects[index - 1].title}</a>}</div>
                <a href="#career">PROJECTS</a>
                <div>{index < portfolioProjects.length - 1 && <a href={projectHref(portfolioProjects[index + 1].id)}><small>다음 프로젝트 →</small>{portfolioProjects[index + 1].title}</a>}</div>
              </nav>
            </>
          ) : (
            <>
              <h1>프로젝트를 찾을 수 없습니다.</h1>
              <a href="#home">HOME ↗</a>
            </>
          )}
        </div>
      </main>
    </>
  );
}
