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
          <div><p className="planning-kicker">DESIGN & COLLABORATION</p><h2 id="planning-feature-title" data-toc="기획 검증과 팀 협업">기획 검증과 팀 협업</h2></div>
        </div>
        <p className="planning-tool-description">기존 플레이의 보완점을 찾고, 콘텐츠를 재구성한 개선안을 시뮬레이터로 먼저 구체화했습니다. 이를 통해 팀을 설득하고 목표 경험을 함께 검증했으며, 현재는 컨펌한 방향을 엔진에 구현하고 있습니다.</p>
        <div className="tool-case-grid monster-improvement-cases">
          <section className="tool-case" aria-labelledby="monster-starting-point">
            <p className="planning-kicker">01 / STARTING POINT</p>
            <h3 id="monster-starting-point" data-toc="합류 당시의 플레이">이미 구현된 미용과 전투에서 출발했습니다.</h3>
            <p>2026년 9월 합류 당시, 팀에는 미용과 전투의 기본 플레이가 있었습니다. 저는 각 콘텐츠의 규칙과 조작을 살피며 보완할 부분을 찾고, 개별 플레이가 하루의 영업과 최종 목표로 이어지는 전체 구조를 다시 잡았습니다.</p>
            <div className="monster-before-videos">
              <div><p className="monster-media-label">BEFORE · 합류 전 미용</p><ProjectVideo title="합류 전 몬스터 헤어 살롱 미용 — 기존 팀 구현" youtubeUrl={monsterProjectVideos.beforeGrooming} /></div>
              <div><p className="monster-media-label">BEFORE · 합류 전 전투</p><ProjectVideo title="합류 전 몬스터 헤어 살롱 전투 — 회피·패링·빈틈 연타" youtubeUrl={monsterProjectVideos.beforeBattle} /></div>
            </div>
            <p>당시 전투에는 회피·패링과 빈틈에서의 연타가 구현되어 있었고, 기본 공격·무력화·드래그 빈틈 공격은 없었습니다. 몬스터별 콘셉트를 담은 기믹과 이를 파훼하는 공략 개념도 없었기에, 공격 기회를 직접 만드는 흐름과 몬스터마다 다른 공략 방법을 함께 제안했습니다.</p>
          </section>
          <section className="tool-case" aria-labelledby="monster-restructure">
            <p className="planning-kicker">02 / RESTRUCTURE</p>
            <h3 id="monster-restructure" data-toc="루프와 시스템 재구성">전체 루프와 개별 조작을 함께 재설계했습니다.</h3>
            <ul className="monster-design-points">
              <li><strong>전체 루프 · 각 활동의 결과를 다음 목표로 연결</strong><p>손님 응대 → 미용 → 불만족 시 야차 → 하루 마감으로 흐름을 구성했습니다. 후기·팔로워·별 획득을 5일차 마왕 방문과 3스타 목표에 연결해, 각 활동이 하루의 진행과 최종 목표 안에서 의미를 갖도록 설계했습니다.</p></li>
              <li><strong>미용 · 손님의 부탁을 플레이 규칙으로 구체화</strong><p>형태·색과 무늬·장식의 단계, 손님별 요구와 판정 영역, 만족도 규칙을 정리했습니다. 부탁 달성 체크와 전체 반응을 구분하고, 자유롭게 꾸미는 행동과 평가가 함께 작동하도록 구성했습니다.</p></li>
              <li><strong>전투 · 공격 기회를 직접 만드는 행동 추가</strong><p>회피 중에도 기본 공격으로 무력화를 깎고, 무력화가 무너지면 빈틈을 여는 흐름을 설계했습니다. 빈틈에서는 가위를 좌우로 드래그하는 공격으로 조작을 바꾸어, 평상시의 대응과 공격 기회에서의 행동에 차이를 주었습니다.</p></li>
              <li><strong>몬스터별 기믹·파훼 · 콘셉트를 공략 행동으로 연결</strong><p>몬스터의 특징이 공격을 피하는 방식과 기회를 얻는 행동에 드러나도록 기믹·파훼 개념을 제안해 도입했습니다. 예를 들어 취준좀비는 돌진을 비석으로 유도해 추가 빈틈을 얻고, 샌즈는 빈틈에서 가위 공격을 성공시켜 하트 판을 줄이는 공략을 시뮬레이터로 구체화했습니다. 현재 이러한 기믹과 파훼 경험을 엔진 빌드에 구현하고 있습니다.</p></li>
            </ul>
          </section>
          <section className="tool-case" aria-labelledby="monster-team-process">
            <p className="planning-kicker">03 / TEAM PROCESS</p>
            <h3 id="monster-team-process" data-toc="설득·검증에서 엔진 구현으로">시뮬레이터로 방향을 설득하고, 팀의 구현 기준으로 연결했습니다.</h3>
            <p>개선안을 시뮬레이터로 먼저 플레이할 수 있게 만들어 팀 미팅에서 제안했습니다. 같은 화면을 보며 규칙과 흐름을 검토하고, 컨펌한 방향을 프로그래밍·그래픽 파트가 구현할 수 있도록 구체화했습니다. 시뮬레이터는 방향을 설득하는 자료이자, 경험을 검증하고 협업하는 도구로 작용했습니다.</p>
            <div className="tool-case-result"><span>현재 개발 단계</span><p>팀은 시뮬레이터의 플레이를 엔진 빌드에서 동일하게 또는 그 이상으로 표현하는 작업을 진행하고 있습니다. 상단의 빌드 영상은 아래 시뮬레이터 영상보다 이전 시점의 개발 기록이며, 새로 제안한 기믹·파훼를 포함한 목표 경험은 현재 구현 중입니다.</p></div>
          </section>
        </div>
        <div className="monster-tool-intro"><p className="planning-kicker">AI-ASSISTED TOOL</p><h3 id="monster-validation-tool" data-toc="검증·협업 도구">개선안을 함께 플레이하고 검토할 도구를 만들었습니다.</h3></div>
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
          <p>직접 제작한 시뮬레이터에서 목표한 루프와 조작을 보여 주는 영상입니다. 엔진에서 구현할 방향을 제안하고 설득·검증·협업하는 데 활용했으며, 팀은 이 경험을 기준으로 실제 게임을 개발하고 있습니다.</p>
          <ProjectVideo title="몬스터 헤어 살롱 시뮬레이터 — 구현 방향 제안·설득·검증·협업" youtubeUrl={monsterProjectVideos.simulator} videoSrc={featuredTool.videoSrc} posterSrc={featuredTool.posterSrc} />
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

