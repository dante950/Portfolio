import { featuredTool } from "../data/planning";
import AiToolShowcase from "./AiToolShowcase";
import ProjectVideo from "./ProjectVideo";
import { monsterProjectVideos } from "../data/projects";
import "./MonsterProjectStory.css";

export default function MonsterProjectStory() {
  return <>
    <section className="project-story-section" aria-labelledby="project-overview-title">
      <p className="monster-media-label">TEAM BUILD · 엔진 구현 진행 기록</p>
      <ProjectVideo title="몬스터 헤어 살롱 엔진 빌드 — 개선안 구현 중" youtubeUrl={monsterProjectVideos.gameplay} />
      <p>이 영상은 아래 시뮬레이터 플레이 영상보다 이전 시점의 엔진 빌드 기록입니다. 팀은 시뮬레이터로 제안·검증한 플레이를 엔진에서 동일하게, 나아가 더 높은 완성도로 구현하는 작업을 진행하고 있습니다.</p>
      <h2 id="project-overview-title" data-toc="프로젝트 소개">프로젝트 소개</h2>
      <p>몬스터 헤어 살롱은 몬스터 손님을 맞이해 미용과 전투를 진행하는 게임입니다. 손님의 요청에 맞춰 모습을 다듬고, 손님과의 대화와 전투를 거쳐 하루의 영업을 이어갑니다.</p>
      <p>미용과 전투의 결과는 손님의 후기와 팔로워 등 하루 마감 과정으로 연결됩니다. 각 활동이 하나의 플레이 흐름 안에서 이어지는 경험을 만들고 있습니다.</p>
      <p>저는 2026년 9월, 미용과 전투의 기본 플레이가 구현된 팀에 중간 합류했습니다. 리드 기획으로서 기존 콘텐츠와 시스템의 보완점을 살피고, 전체 플레이 루프를 다시 설계했습니다. 시뮬레이터로 개선 방향을 보여 주며 팀을 설득하고 검증했으며, 컨펌한 기획은 엔진 빌드에 단계적으로 반영하고 있습니다.</p>
      <p><strong>기존 콘텐츠에서 살릴 부분과 보완할 부분을 찾아, 미용·전투·하루 마감을 하나의 경험으로 재구성하는 역할을 맡았습니다.</strong></p>
    </section>
    <section className="project-story-section" aria-labelledby="project-gameplay-title">
      <h2 id="project-gameplay-title" data-toc="핵심 플레이">핵심 플레이</h2>
      <p>아래는 시뮬레이터로 구체화한 목표 플레이 흐름입니다. 팀은 이 흐름을 기준으로 엔진 구현을 진행하고 있으며, 상단 빌드 영상과는 구현 범위에 차이가 있습니다.</p>
      <ol className="project-play-flow">
        <li><strong>손님 응대</strong><p>등장한 몬스터와 대화하며 손님의 요청과 상황을 확인합니다.</p></li>
        <li><strong>미용</strong><p>손님별 요구에 맞춰 형태를 다듬고 색·무늬·장식을 적용합니다. 손질 결과에 따라 손님의 반응이 달라집니다.</p></li>
        <li><strong>전투 — 야차</strong><p>미용에 만족하지 못한 손님은 돈을 지불할 수 없다며 ‘야차’를 걸어옵니다. 기본 공격과 무력화로 빈틈을 만들고, 몬스터별 콘셉트가 담긴 기믹과 파훼 방법을 익혀 공략하도록 설계했습니다. 기믹·파훼는 제안 후 도입되어 엔진 구현 중입니다.</p></li>
        <li><strong>하루 마감</strong><p>영업을 마친 뒤 몬스타그램 후기와 팔로워, 별 획득 등 플레이 결과를 확인합니다.</p></li>
        <li><strong>3스타 달성</strong><p>최종 목표는 5일차 마왕의 방문까지 미용실을 3스타로 만드는 것입니다. 마왕이 방문했을 때 3스타에 도달하지 못했다면 게임 오버가 됩니다.</p></li>
        <li><strong>마왕의 방문</strong><p>3스타를 달성했다면 마왕의 미용을 진행합니다. 미용으로 마왕을 만족시키면 엔딩에 도달하며, 만족시키지 못하면 야차가 시작됩니다. 이 야차에서 승리해도 엔딩에 도달할 수 있습니다.</p></li>
      </ol>
    </section>
    <section className="project-story-section" aria-labelledby="tool-role-title">
      <h2 id="tool-role-title" data-toc="담당 역할">담당 역할</h2>
      <ul>{featuredTool.role.items.map(item => <li key={item}>{item}</li>)}</ul>
      <p>{featuredTool.role.description}</p>
    </section>
    <AiToolShowcase />
  </>;
}

