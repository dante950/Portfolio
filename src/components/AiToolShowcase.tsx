import { featuredTool } from "../data/planning";
import { assetUrl } from "../utils/assetUrl";
import ZoomableImage from "./ZoomableImage";
import "./PlanningSection.css";
import "./AiToolShowcase.css";

export default function AiToolShowcase() {
  return <div className="planning-section project-tool-showcase tool-reading">
      <article className="planning-feature" aria-labelledby="planning-feature-title">
        <div className="planning-feature-heading">
          <div><p className="planning-kicker">USED BY THE TEAM</p><h2 id="planning-feature-title" data-toc="시뮬레이터 팀 활용">실제 팀 작업에서 활용한 시뮬레이터</h2></div>
        </div>
          <div className="tool-case-grid">{featuredTool.outcomes.map((item, index) => <article className="tool-case" key={item.title}>
            <p className="planning-kicker">{item.label}</p><h3 id={`tool-case-${index + 1}`} data-toc={item.toc}>{item.title}</h3><p>{item.description}</p>
            <div className="tool-case-result"><span>활용 결과</span><p>{item.result}</p></div>
            <figure>{item.image ? <ZoomableImage src={assetUrl(item.image)} alt={item.imageAlt} /> : <div className="tool-evidence-placeholder"><span>SCREENSHOT / 준비 중</span><strong>{item.evidence}</strong></div>}<figcaption>{item.caption}</figcaption></figure>
          </article>)}</div>
          <div className="tool-team-handoff">
            <h3 id="tool-handoff-title" data-toc="데이터 전달·변경 기록">개발 데이터 전달과 변경 기록</h3>
            <p>{featuredTool.handoff}</p>
          </div>
      </article>
  </div>;
}

