import { lunaProjectVideos } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import ProjectVideo from "./ProjectVideo";
import ZoomableImage from "./ZoomableImage";
import "./PlanningSection.css";
import "./AiToolShowcase.css";
import "./LunaProjectStory.css";

type EvidenceShot = { image: string; label: string; description: string };

const craftingShots: EvidenceShot[] = [
  { image: "/planning/luna-craft-prepare.png", label: "01 · 제조 준비", description: "잔·도구·재료를 직접 고르는 준비 과정" },
  { image: "/planning/luna-craft-recipe.png", label: "02 · 레시피 확인", description: "준비한 재료와 제조 순서를 확인하는 레시피 노트" },
  { image: "/planning/luna-craft-pour.png", label: "03 · 따르기", description: "병의 기울기와 실제 투입량을 조절하는 제조 조작" },
  { image: "/planning/luna-craft-mix.png", label: "04 · 혼합", description: "제조 방법에 맞춰 수행하는 셰이크 조작" },
];
const serviceShots: EvidenceShot[] = [
  { image: "/planning/luna-service-coaster.png", label: "01 · 코스터 제공", description: "손님 앞에 코스터를 놓으며 응대를 시작" },
  { image: "/planning/luna-service-order.png", label: "02 · 주문 확인", description: "손님의 주문을 듣고 만들 칵테일을 결정" },
  { image: "/planning/luna-service-menu.png", label: "03 · 제조 진입", description: "공통 메뉴에서 칵테일을 선택하고 제조로 연결" },
  { image: "/planning/luna-service-serve.png", label: "04 · 서빙", description: "완성된 칵테일을 손님 앞 코스터에 제공" },
  { image: "/planning/luna-service-response.png", label: "05 · 손님 반응", description: "제공한 음료에 대한 손님의 반응을 확인" },
  { image: "/planning/luna-service-settle.png", label: "06 · 정산과 퇴장", description: "응대 결과를 정산하고 다음 손님으로 연결" },
];
const uiShots: EvidenceShot[] = [
  { image: "/planning/luna-ui-panel.png", label: "01 · 서비스 패널", description: "제조와 손님 정보, 매출 확인으로 진입" },
  { image: "/planning/luna-ui-guest.png", label: "02 · 단골 손님 정보", description: "만난 손님의 정보와 취향을 확인" },
  { image: "/planning/luna-ui-sales.png", label: "03 · 실시간 매출", description: "영업 중 발생한 수입과 지출을 확인" },
  { image: "/planning/luna-ui-menu.png", label: "04 · 칵테일 메뉴", description: "목록과 필터, 상세 정보를 함께 배치" },
  { image: "/planning/luna-ui-shelf.png", label: "05 · 제조 준비", description: "선반 탐색과 선택한 물건의 표시를 연결" },
  { image: "/planning/luna-ui-result.png", label: "06 · 제조 결과", description: "완성 결과를 확인하고 다음 행동을 선택" },
];

const contentShots: EvidenceShot[] = [
  { image: "/planning/luna-content-recipes.png", label: "01 · 칵테일별 레시피와 난이도", description: "레시피 기획서 5쪽 발췌 · 재료·용량·제조 동작과 난이도 티어를 정리" },
  { image: "/planning/luna-content-resources.png", label: "02 · 재료와 리소스 재사용", description: "레시피 기획서 2쪽 발췌 · 여러 칵테일에서 공유하는 재료와 사용 횟수를 검토" },
];
const levelShots: EvidenceShot[] = [
  { image: "/planning/luna-level-unlocks.png", label: "01 · 일차별 재료 입고와 해금", description: "레벨 디자인 기획서 3쪽 발췌 · 새 재료와 함께 열리는 칵테일을 일차별로 배치" },
  { image: "/planning/luna-level-flow.png", label: "02 · 정산에서 다음 영업일까지", description: "레벨 디자인 기획서 6쪽 발췌 · 영업 종료·정산·재료 해금·다음날의 화면 흐름을 연결" },
];
const learningShots: EvidenceShot[] = [
  { image: "/planning/luna-tutorial-timeline.png", label: "01 · 학습 흐름과 시간 배분", description: "바 오아시스 분석 자료 2쪽 발췌 · 34단계를 8개 구간으로 묶어 안내와 반복 실습의 배치를 분석" },
  { image: "/planning/luna-tutorial-excel-stages.png", label: "02 · 단계별 학습 목표 분석", description: "분석 엑셀 ‘튜토리얼 레벨디자인’ A6:J12 · 시간·학습 목표·플레이어 행동·진행 조건을 함께 기록" },
  { image: "/planning/luna-tutorial-excel-script-2.png", label: "03 · 대사와 시스템 안내 기록", description: "분석 엑셀 ‘1일차’ E195:M212 · 안내 문구와 선택 결과, 시스템 변화의 연결을 확인" },
  { image: "/planning/luna-tutorial-insights.png", label: "04 · LUNA에 적용할 개선 관점", description: "바 오아시스 분석 자료 5쪽 발췌 · 첫 조작 시점, 실제 수행 조건, 반복 실습과 실수 회복을 검토" },
];
const graphicsShots: EvidenceShot[] = [
  { image: "/planning/luna-graphics-materials.jpg", label: "01 · 재료 레퍼런스와 도트 초안", description: "진·위스키 사례 · 직접 조사한 레퍼런스와 Gemini로 만든 도트풍 제작 초안을 함께 정리" },
  { image: "/planning/luna-graphics-cocktails-selected.jpg", label: "02 · 칵테일 완성 이미지 초안", description: "노션에 정리한 Gemini 제작 초안 4장 발췌 · 그래픽 담당자의 리터치를 위한 전달 자료" },
];
const stirShots: EvidenceShot[] = [
  { image: "/planning/luna-stir-final-1.gif", label: "01 · 팀 리터치 결과", description: "원화 담당자가 프레임별로 리터치한 스터 동작 · 노션의 인게임 반영 버전" },
  { image: "/planning/luna-stir-final-2.gif", label: "02 · 도구와 함께 확인하는 동작", description: "스터 동작과 도구를 함께 보여주는 애니메이션 · 노션의 인게임 반영 버전" },
];

function EvidenceBoard({ title, shots, overview, overviewCaption, extraOverview }: { title: string; shots: EvidenceShot[]; overview?: string; overviewCaption?: string; extraOverview?: EvidenceShot }) {
  return <div className="luna-evidence">
    <p className="luna-evidence-label">{title} · 기획 당시 화면 발췌</p>
    <div className="luna-evidence-grid" role="group" aria-label={title}>
      {shots.map(shot => <figure key={shot.image}>
        <ZoomableImage src={assetUrl(shot.image)} alt={shot.description} />
        <figcaption><strong>{shot.label}</strong><span>{shot.description}</span></figcaption>
      </figure>)}
    </div>
    {overview && <details className="luna-evidence-overview">
      <summary>전체 통합 이미지 펼쳐 보기</summary>
      {overviewCaption && <p className="luna-evidence-note">{overviewCaption}</p>}
      <ZoomableImage src={assetUrl(overview)} alt={`${title} 전체 통합 이미지`} />
    </details>}
    {extraOverview && <details className="luna-evidence-overview">
      <summary>{extraOverview.label}</summary>
      <p className="luna-evidence-note">{extraOverview.description}</p>
      <ZoomableImage src={assetUrl(extraOverview.image)} alt={extraOverview.description} />
    </details>}
  </div>;
}

export default function LunaProjectStory() {
  return <>
    <section className="project-story-section" aria-labelledby="luna-overview-title">
      <p className="luna-media-label">TEAM BUILD · 팀 공동 결과물</p>
      <ProjectVideo title="Project LUNA 최신 게임 플레이 — 팀 공동 결과물" youtubeUrl={lunaProjectVideos.gameplay} />
      <h2 id="luna-overview-title" data-toc="프로젝트 소개">프로젝트 소개</h2>
      <p>Project LUNA는 사이버펑크 세계의 바에서 칵테일을 제조하고 손님을 응대하는 게임입니다. 플레이어는 음료를 준비하고 직접 만드는 과정을 거쳐, 손님의 반응을 확인하며 가게 운영을 이어갑니다.</p>
      <p>저는 1학기가 끝난 뒤 여름방학에 팀에 합류했습니다. 기본 플레이가 구현된 상태에서 PD가 지향하는 경험을 확인하고, 칵테일 제조와 가게 운영의 구조를 개선하는 시스템·콘텐츠 기획을 담당했습니다.</p>
      <p>팀은 2026년 제작 목표를 3일차까지 플레이할 수 있는 분량으로 설정했습니다. 전체 칵테일 구성과 해금 흐름을 기획하면서, 해당 분량에 필요한 그래픽 리소스와 애니메이션 제작도 지원했습니다.</p>
      <p><strong>‘진짜 바텐더가 되어보는 경험’을 제조 조작과 손님 응대, 하루의 운영 흐름으로 구체화했습니다.</strong></p>
    </section>
    <section className="project-story-section" aria-labelledby="luna-gameplay-title">
      <h2 id="luna-gameplay-title" data-toc="핵심 플레이">핵심 플레이</h2>
      <ol className="project-play-flow">
        <li><strong>1부 · 일반 손님 응대</strong><p>손님을 맞이하고 코스터를 제공한 뒤 주문을 확인합니다.</p></li>
        <li><strong>칵테일 준비와 제조</strong><p>만들 칵테일을 선택하고 잔·도구·재료를 준비합니다. 따르기와 혼합 등 제조 과정의 조작을 직접 수행합니다.</p></li>
        <li><strong>서빙과 정산</strong><p>완성된 칵테일을 손님에게 제공하고, 반응과 추가 주문 여부를 확인하며 정산까지 이어갑니다.</p></li>
        <li><strong>2부 · 스토리 손님 응대</strong><p>일반 손님 운영과 구분된 흐름에서 스토리 손님을 만나고 응대합니다.</p></li>
        <li><strong>일차별 콘텐츠 확장</strong><p>영업일의 진행에 따라 칵테일이 해금되며, 만들 수 있는 음료와 제조 경험이 확장됩니다.</p></li>
      </ol>
    </section>
    <section className="project-story-section" aria-labelledby="luna-role-title">
      <h2 id="luna-role-title" data-toc="담당 역할">담당 역할</h2>
      <ul>
        <li>칵테일 제조 시스템 개편과 전체 플레이 루프 변경 제안·설계</li>
        <li>1부 일반 손님 및 2부 스토리 손님 운영 시스템 기획</li>
        <li>칵테일 30종 구성, 개별 레시피와 일차별 해금 레벨 디자인</li>
        <li>바 내부 UI의 화면 구성과 상호작용 흐름 설계</li>
        <li>제조·일반 손님 응대·UI 시뮬레이터 직접 제작 및 팀 설명·검토</li>
        <li>튜토리얼 개선을 위한 타 게임 분석 자료 제공</li>
        <li>3일차까지 필요한 재료·칵테일 레퍼런스 조사 및 Gemini 도트풍 리소스 초안 제작</li>
        <li>Gemini를 활용한 루나 스터 애니메이션 초안 제작과 원화 담당자의 프레임별 리터치 협업</li>
      </ul>
      <p>PD의 기획 의도를 기준으로 개선안을 제안하고, 직접 만든 시뮬레이터를 통해 동작을 공유하며 승인을 받았습니다. 승인된 기획의 게임 반영과 그래픽 표현 개선은 팀과 함께 진행했습니다.</p>
    </section>
    <div className="planning-section project-tool-showcase tool-reading luna-project-work">
      <article className="planning-feature" aria-labelledby="luna-work-title">
        <div className="planning-feature-heading">
          <p className="planning-kicker">DESIGN & COLLABORATION</p>
          <h2 id="luna-work-title" data-toc="기획 검증과 팀 협업">기획 검증과 팀 협업</h2>
        </div>
        <p className="planning-tool-description">기획 의도를 확인하고 구조를 설계한 뒤, 실행 가능한 시뮬레이터로 팀에 설명했습니다. 아래 자료는 그 과정에서 만든 기획 화면과 시뮬레이터이며, 상단의 최신 게임 플레이는 팀의 구현과 그래픽 작업을 거친 결과입니다.</p>
        <div className="tool-case-grid">
          <section className="tool-case" aria-labelledby="luna-intent-title">
            <p className="planning-kicker">01 / STARTING POINT</p>
            <h3 id="luna-intent-title" data-toc="기획 의도와 출발점">PD가 만들고자 한 경험에서 출발했습니다.</h3>
            <p>합류 후 가장 먼저 PD에게 플레이어에게 어떤 경험을 주고 싶은지 물었습니다. 답은 ‘진짜 바텐더가 되어보는 경험’이었습니다. 당시 제조는 버튼으로 재료 투입량을 조절하는 방식이 중심이었고, 이 의도가 플레이어의 행동에서 더 드러날 수 있도록 제조 구조의 개편을 제안했습니다.</p>
            <figure className="luna-before-image">
              <ZoomableImage src={assetUrl("/planning/luna-before.png")} alt="합류 당시 칵테일 제조 화면 — 재료 투입량 조절과 제조 방식 선택 중심의 기존 구조" />
              <figcaption>합류 당시 게임 화면 · 기존 팀이 구현한 제조 시스템</figcaption>
            </figure>
            <a className="luna-source-link" href={lunaProjectVideos.before} target="_blank" rel="noopener noreferrer">합류 당시 플레이 영상 보기 ↗</a>
          </section>
          <section className="tool-case" aria-labelledby="luna-crafting-title">
            <p className="planning-kicker">02 / COCKTAIL CRAFTING</p>
            <h3 id="luna-crafting-title" data-toc="칵테일 제조 개편">칵테일을 만드는 과정을 플레이로 설계했습니다.</h3>
            <p>잔과 도구·재료를 고르는 준비부터 따르기, 셰이크, 스터 등 실제 제조 동작까지 과정을 세분화했습니다. 각 단계에서 무엇을 선택하고 조작하는지, 그 결과가 어떻게 다음 과정으로 이어지는지를 구체화했습니다.</p>
            <div className="tool-case-result"><span>기획과 팀 반영</span><p>제조 시스템을 제안하고 시뮬레이터로 동작을 설명했습니다. PD의 검토와 승인 후 게임에 반영되었습니다.</p></div>
            <EvidenceBoard title="제조 과정 통합 보기" shots={craftingShots} overview="/planning/luna-preparation-overview.jpg" />
            <p className="luna-media-label">MY SIMULATOR · 직접 제작한 제조 시뮬레이터</p>
            <ProjectVideo title="직접 제작한 칵테일 제조 개편 시뮬레이터" youtubeUrl={lunaProjectVideos.crafting} />
          </section>
          <section className="tool-case" aria-labelledby="luna-service-title">
            <p className="planning-kicker">03 / SERVICE LOOP</p>
            <h3 id="luna-service-title" data-toc="가게 운영과 손님 응대">제조와 손님 응대를 하나의 운영 흐름으로 연결했습니다.</h3>
            <p>전체 플레이 루프를 재구성하며 1부 일반 손님과 2부 스토리 손님의 운영 구조를 제안했습니다. 일반 손님 응대는 코스터 제공과 주문 확인, 제조, 서빙, 반응과 정산까지 연결하고, 이 흐름을 직접 실행할 수 있는 시뮬레이터로 제작했습니다.</p>
            <div className="tool-case-result"><span>기획과 팀 반영</span><p>플레이 루프 변경안과 두 손님 운영 시스템은 검토·승인 후 반영되었습니다. 아래 화면과 영상은 그중 1부 일반 손님 응대의 기획을 보여줍니다.</p></div>
            <EvidenceBoard title="일반 손님 응대 통합 보기" shots={serviceShots} />
            <p className="luna-media-label">MY SIMULATOR · 직접 제작한 일반 손님 루프 시뮬레이터</p>
            <ProjectVideo title="직접 제작한 가게 운영 1부 — 일반 손님 루프 시뮬레이터" youtubeUrl={lunaProjectVideos.service} />
          </section>
          <section className="tool-case" aria-labelledby="luna-ui-title">
            <p className="planning-kicker">04 / UI FLOW</p>
            <h3 id="luna-ui-title" data-toc="바 내부 UI 설계">화면과 조작의 연결을 시뮬레이터로 공유했습니다.</h3>
            <p>손님 응대와 제조에 필요한 정보를 화면별로 나누고, 메뉴에서 제조 준비로 진입하거나 결과 확인 후 바 화면으로 돌아오는 흐름을 설계했습니다. 서비스 패널, 단골 손님 정보, 실시간 매출과 제조 화면을 UI 전용 시뮬레이터로 구성해 팀이 같은 화면과 동작을 보며 논의할 수 있도록 했습니다.</p>
            <div className="tool-case-result"><span>기획 전달과 협업</span><p>시뮬레이터를 제공하고 직접 설명하며 UI 구성을 검토·승인받았습니다. 이후 그래픽 담당자들과 화면과 표현을 함께 다듬었습니다.</p></div>
            <EvidenceBoard title="바 내부 UI 통합 보기" shots={uiShots} overview="/planning/luna-ui-overview.jpg" />
            <p className="luna-media-label">MY SIMULATOR · 직접 제작한 바 내부 UI 시뮬레이터</p>
            <ProjectVideo title="직접 제작한 바 내부 UI 전용 시뮬레이터" youtubeUrl={lunaProjectVideos.ui} />
          </section>
          <section className="tool-case" aria-labelledby="luna-content-title">
            <p className="planning-kicker">05 / CONTENT & LEARNING</p>
            <h3 id="luna-content-title" data-toc="콘텐츠와 학습 흐름">칵테일 구성과 해금, 학습 흐름을 함께 기획했습니다.</h3>
            <p>칵테일 30종의 구성과 개별 레시피를 기획하고, 일차별 해금 레벨 디자인을 담당했습니다. 제조 과정의 차이와 난이도, 음료의 시각적 다양성, 재료와 그래픽 리소스의 재사용을 함께 고려했습니다.</p>
            <div className="tool-case-result"><span>전체 기획과 제작 범위</span><p>30종의 구성과 해금 흐름은 전체 콘텐츠 기획입니다. 2026년에는 3일차까지 제작하는 것을 팀의 목표로 정하고, 해당 범위에 필요한 재료와 칵테일 리소스를 우선 준비했습니다.</p></div>
            <div className="tool-feature-grid luna-content-points">
              <div>
                <span>CONTENT</span><h4>칵테일과 레시피</h4>
                <p>각 음료의 재료와 제조 과정을 정리하고, 다양한 제조 경험을 제공할 수 있도록 칵테일 구성을 기획했습니다.</p>
                <EvidenceBoard title="칵테일 구성과 레시피" shots={contentShots} overview="/planning/luna-content-overview.jpg" overviewCaption="레시피 기획서 전체 6쪽을 모았습니다. 기획 당시의 개정 이력과 검토 사항을 포함한 자료입니다." />
              </div>
              <div>
                <span>LEVEL DESIGN</span><h4>일차별 해금</h4>
                <p>영업일의 진행에 맞춰 만들 수 있는 칵테일이 확장되도록 해금 흐름을 설계했습니다.</p>
                <EvidenceBoard title="일차별 해금과 난이도" shots={levelShots} overview="/planning/luna-level-overview.jpg" overviewCaption="레벨 디자인 기획서 전체 8쪽을 모았습니다. 일차별 해금과 손님 슬롯 구성 예시, 화면 흐름 및 당시 검토 사항을 확인할 수 있습니다." />
              </div>
              <div>
                <span>LEARNING</span><h4>튜토리얼 개선 지원</h4>
                <p>다른 게임의 튜토리얼을 분석하고 참고 자료와 개선 방향을 제공해 팀의 튜토리얼 개선에 반영했습니다.</p>
                <EvidenceBoard title="바 오아시스 튜토리얼 분석" shots={learningShots} overview="/planning/luna-tutorial-overview.jpg" overviewCaption="튜토리얼 분석 자료 전체 25쪽을 모았습니다. 시간 배분·단계별 학습 목표·개선 관점과 대사 분석 기록을 포함합니다."
                  extraOverview={{ image: "/planning/luna-tutorial-excel-overview.jpg", label: "엑셀 분석 통합 이미지 펼쳐 보기", description: "‘튜토리얼 레벨디자인’ 시트의 34단계 전체(A1:M40)와 ‘1일차’ 시트의 대사 분석 발췌(A1:P12, E195:M212)를 모았습니다." }} />
              </div>
            </div>
          </section>
          <section className="tool-case" aria-labelledby="luna-graphics-title">
            <p className="planning-kicker">06 / ART COLLABORATION</p>
            <h3 id="luna-graphics-title" data-toc="그래픽 제작 지원">제작 여건에 맞춰 초안을 만들고, 팀의 리터치로 완성했습니다.</h3>
            <p>그래픽 담당자들의 작업량을 고려해, 3일차까지 등장하는 재료와 칵테일의 레퍼런스를 직접 조사했습니다. 이를 바탕으로 Gemini를 활용해 게임의 그래픽 스타일에 맞는 도트풍 리소스 초안을 만들고, 그래픽 담당자들이 리터치하는 방식으로 작업을 이어갔습니다.</p>
            <div className="tool-feature-grid luna-content-points">
              <div>
                <span>RESOURCE SUPPORT</span><h4>필요한 리소스를 정리하고 제작 초안을 제공했습니다.</h4>
                <p>재료의 외형뿐 아니라 선반 진열용과 제조 조작용처럼 사용 상황에 따른 차이도 정리했습니다. 레퍼런스 조사와 Gemini 초안 제작을 맡고, 게임에 사용할 최종 표현은 그래픽 담당자의 리터치를 거쳐 다듬었습니다.</p>
                <EvidenceBoard title="재료·칵테일 리소스 제작 지원" shots={graphicsShots} overview="/planning/luna-graphics-cocktails.jpg" overviewCaption="노션에 정리한 칵테일 완성 이미지 초안 10장을 모았습니다. Gemini를 활용해 만든 제작 초안이며, 그래픽 담당자의 최종 리터치 결과와 구분해 제시합니다." />
              </div>
              <div>
                <span>ANIMATION SUPPORT</span><h4>전담 애니메이터 없이 스터 동작을 구현한 협업입니다.</h4>
                <p>팀에 전담 애니메이터가 없어 루나의 스터 애니메이션 제작에 어려움이 있었습니다. 저는 Gemini를 활용해 동작 초안을 제작했고, 원화 담당자가 각 프레임을 리터치해 게임에 사용할 수 있는 애니메이션으로 완성했습니다. 이 과정을 거쳐 스터 애니메이션을 게임에 반영했습니다.</p>
                <p className="luna-media-label">MY DRAFT · Gemini를 활용해 제작한 스터 애니메이션 초안</p>
                <ProjectVideo title="Gemini를 활용해 제작한 루나 스터 애니메이션 초안" videoSrc="/planning/luna-stir-gemini.mp4" posterSrc="/planning/luna-stir-draft.png" />
                <p className="luna-media-label">TEAM RESULT · 원화 담당자의 프레임별 리터치를 거친 인게임 반영본</p>
                <EvidenceBoard title="스터 애니메이션 제작과 팀 리터치" shots={stirShots} overview="/planning/luna-stir-overview.jpg" overviewCaption="Gemini 제작 과정 이미지 3장과 노션의 인게임 반영본 2종을 모았습니다. 통합 이미지에서는 애니메이션의 한 프레임을 보여주며, 위 반영본에서는 실제 움직임을 확인할 수 있습니다." />
                <div className="tool-case-result"><span>제작과 팀 완성</span><p>저는 레퍼런스 조사와 리소스·동작 초안을 제공했고, 그래픽·원화 담당자는 리터치와 최종 표현을 담당했습니다. 팀의 제작 여건 안에서 필요한 플레이를 완성할 수 있도록 기획과 제작 사이의 작업을 지원했습니다.</p></div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  </>;
}
