import { featuredTool } from "../data/planning";
import AiToolShowcase from "./AiToolShowcase";
import ProjectVideo from "./ProjectVideo";
import ProjectDisclosure from "./ProjectDisclosure";
import ZoomableImage from "./ZoomableImage";
import { assetUrl } from "../utils/assetUrl";
import { monsterProjectVideos } from "../data/projects";
import "./MonsterProjectStory.css";

export default function MonsterProjectStory() {
  return <>
    <section className="project-story-section" aria-labelledby="project-overview-title">
      <p className="monster-gameplay-label">TEAM BUILD · 게임 플레이</p>
      <ProjectVideo title="몬스터 헤어 살롱 게임 플레이" youtubeUrl={monsterProjectVideos.gameplay} />
      <h2 id="project-overview-title" data-toc="프로젝트 소개">프로젝트 소개</h2>
      <p>몬스터 헤어 살롱은 손님의 요청에 맞춰 미용하고, 결과에 불만족한 손님과 ‘야차’로 대결하는 게임입니다. 미용과 전투의 결과는 몬스타그램 후기·팔로워·별 획득으로 이어집니다.</p>
      <p>저는 2026년 9월 리드 기획으로 합류해 전체 플레이 흐름과 미용·전투 시스템을 재설계했습니다.</p>
    </section>
    <section className="project-story-section" aria-labelledby="project-gameplay-title">
      <h2 id="project-gameplay-title" data-toc="핵심 플레이">핵심 플레이</h2>
      <p>아래 흐름은 시뮬레이터에서 플레이할 수 있으며, 팀은 이를 엔진 빌드에 반영하고 있습니다.</p>
      <ol className="project-play-flow">
        <li><strong>손님 응대</strong><p>등장한 몬스터와 대화하며 손님의 요청과 상황을 확인합니다.</p></li>
        <li><strong>미용</strong><p>손님별 요구에 맞춰 형태를 다듬고 색·무늬·장식을 적용합니다. 손질 결과에 따라 손님의 반응이 달라집니다.</p></li>
        <li><strong>전투 — 야차</strong><p>미용에 불만족한 손님은 돈을 지불할 수 없다며 ‘야차’를 걸어옵니다. 공격을 피하며 무력화를 깎고, 빈틈이 열리면 가위 공격으로 피해를 줍니다.</p></li>
        <li><strong>하루 마감</strong><p>영업을 마친 뒤 몬스타그램 후기와 팔로워, 별 획득 등 플레이 결과를 확인합니다.</p></li>
        <li><strong>3스타 달성</strong><p>최종 목표는 5일차 마왕의 방문까지 미용실을 3스타로 만드는 것입니다. 마왕이 방문했을 때 3스타에 도달하지 못했다면 게임 오버가 됩니다.</p></li>
        <li><strong>마왕의 방문</strong><p>3스타를 달성했다면 마왕의 미용을 진행합니다. 미용으로 마왕을 만족시키면 엔딩에 도달하며, 만족시키지 못하면 야차가 시작됩니다. 이 야차에서 승리해도 엔딩에 도달할 수 있습니다.</p></li>
      </ol>
    </section>
    <section className="project-story-section monster-role-section" aria-labelledby="tool-role-title">
      <h2 id="tool-role-title" data-toc="담당 역할">담당 역할</h2>
      <h3 id="monster-restructure" data-toc="루프와 시스템 재구성">전체 루프와 개별 조작을 함께 재설계했습니다.</h3>
      <ul className="monster-design-points">{featuredTool.role.design.map(item => <li key={item.title}><strong>{item.title}</strong><p>{item.description}</p></li>)}</ul>
      <h3 id="monster-role-collaboration" data-toc="시뮬레이터 제작·협업">시뮬레이터를 제작하고 팀의 구현 방향을 조율했습니다.</h3>
      <ul className="monster-design-points">{featuredTool.role.collaboration.map(item => <li key={item.title}><strong>{item.title}</strong><p>{item.description}</p></li>)}</ul>
    </section>
    <AiToolShowcase />
    <section className="project-story-section monster-evidence-section" aria-labelledby="monster-evidence-title">
      <h2 id="monster-evidence-title" data-toc="기획·검증 자료 모아보기">기획·검증 자료 모아보기</h2>
      <p>미용과 전투의 규칙을 설명한 도식, 시뮬레이터 플레이·편집 화면을 주제별로 모았습니다. 이미지를 누른 뒤 ‘원본 크기’로 전환하면 세부 내용을 확인할 수 있습니다.</p>
      <ProjectDisclosure title="미용 조작·손님별 요구·반응 설계 · 통합 이미지 펼쳐 보기">
        <p>가위 조작, 손님별 형태 손질, 색·무늬·장식과 만족도 표현을 연결한 기획 도식과 시뮬레이터 캡처입니다.</p>
        <ZoomableImage src={assetUrl("/planning/monster-gallery-grooming.svg")} alt="몬스터 미용 설계 통합 이미지 — 도구 조작, 손님별 요구, 평가와 반응" />
      </ProjectDisclosure>
      <ProjectDisclosure title="전투 흐름·몬스터 기믹·파훼 설계 · 통합 이미지 펼쳐 보기">
        <p>기본 공격과 무력화, 빈틈 조작, 취준좀비·샌즈의 공략 규칙과 미용에서 전투로 이어지는 흐름을 모았습니다.</p>
        <ZoomableImage src={assetUrl("/planning/monster-gallery-battle.svg")} alt="몬스터 전투 설계 통합 이미지 — 전투 반복, 가위 판정, 몬스터별 기믹과 파훼" />
      </ProjectDisclosure>
      <ProjectDisclosure title="통합 시뮬레이터 편집·플레이 · 통합 이미지 펼쳐 보기">
        <p>미용 영역과 전투 패턴, 대사를 편집하고 본편 플레이와 하루 마감을 확인하는 팀 협업 도구의 화면입니다.</p>
        <ZoomableImage src={assetUrl("/planning/monster-gallery-simulator.svg")} alt="통합 시뮬레이터 활용 화면 — 미용·전투·대사 편집, 본편 플레이와 하루 마감" />
      </ProjectDisclosure>
    </section>
  </>;
}

