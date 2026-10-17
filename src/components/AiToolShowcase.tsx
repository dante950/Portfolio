import { featuredTool, simulatorUrl } from "../data/planning";
import { assetUrl } from "../utils/assetUrl";
import ZoomableImage from "./ZoomableImage";
import ProjectVideo from "./ProjectVideo";
import { monsterProjectVideos } from "../data/projects";
import "./PlanningSection.css";
import "./AiToolShowcase.css";

export default function AiToolShowcase() {
  return <div className="planning-section project-tool-showcase tool-reading">
      <article className="planning-feature" aria-labelledby="planning-feature-title">
        <div className="planning-feature-heading">
          <div><p className="planning-kicker">AI-ASSISTED TOOL</p><h2 id="planning-feature-title" data-toc="AI를 활용한 기획 검증·협업">AI를 활용한 기획 검증·협업</h2></div>
        </div>
        <a className="project-demo-cta" href={simulatorUrl} target="_blank" rel="noopener noreferrer">
          <span><strong>시뮬레이터 직접 플레이</strong><small>미용·전투·대사 편집부터 본편 플레이까지</small></span>
          <span className="project-demo-arrow" aria-hidden="true">↗</span><span className="project-demo-sr"> (새 창)</span>
        </a>
        <div className="planning-feature-main">
          <div className="planning-tool-copy"><p className="planning-tool-description">{featuredTool.description}</p>
            <div className="tool-context"><h3 id="tool-context-title" data-toc="제작 배경">왜 만들었나요?</h3><p>{featuredTool.context}</p></div>
            <div className="tool-context"><h3>어떻게 풀었나요?</h3><p>{featuredTool.approach}</p></div>
          </div>
          <section aria-labelledby="tool-preview-title">
          <h3 id="tool-preview-title" data-toc="시뮬레이터 플레이 영상">시뮬레이터 플레이 영상</h3>
          <ProjectVideo title="시뮬레이터 플레이 영상" youtubeUrl={monsterProjectVideos.simulator} videoSrc={featuredTool.videoSrc} posterSrc={featuredTool.posterSrc} />
          </section>
        </div>
        <section className="tool-features" aria-labelledby="tool-features-title">
          <p className="planning-kicker">CAPABILITIES</p><h3 id="tool-features-title" data-toc="주요 기능">플레이 · 편집 · 개발 전달을 한곳에서</h3>
          <div className="tool-feature-grid">{featuredTool.capabilities.map((item) => <div key={item.label}><span>{item.label}</span><h4>{item.title}</h4><p>{item.description}</p></div>)}</div>
        </section>
        <section className="tool-cases" aria-labelledby="tool-cases-title">
          <p className="planning-kicker">USED BY THE TEAM</p><h3 id="tool-cases-title" data-toc="팀 활용 사례">실제 팀 작업에서 이렇게 활용했습니다.</h3>
          <div className="tool-case-grid">{featuredTool.outcomes.map((item, index) => <article className="tool-case" key={item.title}>
            <p className="planning-kicker">{item.label}</p><h4 id={`tool-case-${index + 1}`} data-toc={item.toc}>{item.title}</h4><p>{item.description}</p>
            <div className="tool-case-result"><span>활용 결과</span><p>{item.result}</p></div>
            <figure>{item.image ? <ZoomableImage src={assetUrl(item.image)} alt={item.imageAlt} /> : <div className="tool-evidence-placeholder"><span>SCREENSHOT / 준비 중</span><strong>{item.evidence}</strong></div>}<figcaption>{item.caption}</figcaption></figure>
          </article>)}</div>
        </section>
      </article>
  </div>;
}

