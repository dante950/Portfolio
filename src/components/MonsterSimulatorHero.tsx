import { featuredTool, simulatorUrl } from "../data/planning";
import { monsterProjectVideos } from "../data/projects";
import ProjectVideo from "./ProjectVideo";
import "./MonsterProjectStory.css";

export default function MonsterSimulatorHero() {
  return <section className="monster-simulator-hero" aria-labelledby="monster-simulator-title">
    <div className="monster-simulator-copy">
      <p className="monster-simulator-kicker">VIBE CODING / PLAYABLE SIMULATOR</p>
      <h2 id="monster-simulator-title">게임의 처음부터 끝까지<br />시뮬레이터로 만들었습니다.</h2>
      <p className="monster-simulator-description"><strong>바이브 코딩으로 직접 제작한 플레이·편집 도구입니다.</strong> 엔진 빌드가 나오기 훨씬 전, 손님 응대부터 미용·야차·하루 마감과 엔딩까지 이어지는 전체 플레이를 시뮬레이터로 먼저 구현했습니다. 팀과 함께 처음부터 끝까지 플레이하며 규칙과 흐름을 검증하는 데 활용했습니다.</p>
      <a className="monster-simulator-play" href={simulatorUrl} target="_blank" rel="noopener noreferrer">시뮬레이터 직접 플레이 <span aria-hidden="true">↗</span><span className="project-demo-sr"> (새 창)</span></a>
    </div>
    <div className="monster-simulator-video">
      <ProjectVideo title="직접 제작한 몬스터 헤어 살롱 시뮬레이터 플레이" youtubeUrl={monsterProjectVideos.simulator} videoSrc={featuredTool.videoSrc} posterSrc={featuredTool.posterSrc} />
    </div>
    <div className="monster-simulator-background">
      <section aria-labelledby="monster-simulator-why">
        <h3 id="monster-simulator-why">왜 만들었나요?</h3>
        <p>{featuredTool.context}</p>
      </section>
      <section aria-labelledby="monster-simulator-how">
        <h3 id="monster-simulator-how">어떻게 풀었나요?</h3>
        <p>{featuredTool.approach}</p>
      </section>
    </div>
  </section>;
}
