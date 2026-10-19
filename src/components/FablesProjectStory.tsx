import ProjectDisclosure from "./ProjectDisclosure";
import { fablesProjectVideos } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import ProjectVideo from "./ProjectVideo";
import ZoomableImage from "./ZoomableImage";
import "./AiToolShowcase.css";
import "./GroceryProjectStory.css";
import "./FablesProjectStory.css";

function Shot({src,caption}:{src:string;caption:string}) {
  return <figure className="grocery-shot"><ZoomableImage src={assetUrl(src)} alt={caption}/><figcaption>{caption}</figcaption></figure>;
}
function Archive({title,src,children}:{title:string;src:string;children:string}) {
  return <ProjectDisclosure title={`${title} · 통합 이미지 펼쳐 보기`}><p className="grocery-caption">{children}</p><Shot src={src} caption={`${title} · 개인 산출물 PPT 발췌`}/></ProjectDisclosure>;
}
export default function FablesProjectStory() {
  return <div className="grocery-story fables-story">
    <section className="project-story-section" aria-labelledby="rof-overview">
      <p className="grocery-eyebrow">TEAM PROJECT · 게임 트레일러</p>
      <ProjectVideo title="Roulette of Fables 트레일러 — 팀 공동 결과물" youtubeUrl={fablesProjectVideos.trailer}/>
      <h2 id="rof-overview" data-toc="프로젝트 소개와 담당 범위">프로젝트 소개와 담당 범위</h2>
      <p>Roulette of Fables는 슬롯머신으로 코인을 얻고, 이를 회복·공격·참에 사용하며 딜러와 대결하는 게임입니다. 개발 기간은 2025년 9월부터 11월까지이며, 개발 시작부터 마무리까지 함께했습니다. 완성한 게임은 네오위즈 1층 아트홀에 전시했습니다.</p>
      <p>저는 게임 루프 구조와 콘텐츠·콘셉트, 튜토리얼 내러티브를 담당했습니다. 운에 따른 기대감에 딜러와의 대결이라는 역할놀이를 더하고, <strong>슬롯·상점·전투가 플레이어의 선택으로 이어지는 하나의 플레이 경험</strong>을 설계했습니다. 전달할 내용과 협업 상황에 맞춰 직접 만든 그레이박스·기획 문서·손그림 등 다양한 형태로 기획 의도를 공유했습니다.</p>
      <dl className="grocery-role-list">
        <div><dt>구조·콘텐츠</dt><dd>스테이지형 딜러 대결 제안, 재화 순환과 소비처, 코인토스 이벤트, 첫 보스 도입 및 난이도 흐름 개선</dd></div>
        <div><dt>콘셉트·내러티브</dt><dd>슬롯머신 외관 그레이박싱, 가판대·캔들러 딜러·채셔 딜러 콘셉트, 튜토리얼 흐름·대사, 마스코트와 딜러의 서사 보강</dd></div>
        <div><dt>사운드</dt><dd>Cakewalk를 사용한 게임 내 모든 SFX 디자인. (BGM·캐릭터 보이스 제외)</dd></div>
      </dl>
      <div className="grocery-note"><strong>팀 협업</strong><p>팀에서 구상한 참 뽑기와 참 시스템을 바탕으로, 저는 슬롯·상점·딜러 대결을 잇는 플레이 흐름을 설계했습니다. 직접 만든 기획 자료와 그레이박스를 공유하고, 그래픽·프로그래밍 담당자와 함께 게임 화면과 동작으로 구체화했습니다.</p></div>
    </section>
    <section className="project-story-section" aria-labelledby="rof-loop">
      <h2 id="rof-loop" data-toc="게임 목표와 루프 구조">딜러를 이기는 목표와 코인의 사용처</h2>
      <p>초기에는 돌림판을 돌려 계속 돈을 벌고, 마주 앉은 NPC가 진행을 설명하는 구조였습니다. 프로젝트의 핵심인 확률 게임의 손맛과 보상이 커지는 경험을 살리면서, 제한된 개발 기간과 전시 환경에 맞는 명확한 클리어 목표가 필요하다고 판단했습니다.</p>
      <p>핵심 재미인 <strong>알레아, 운과 우연에서 오는 기대감</strong>에 <strong>미미크리, 역할놀이의 경험</strong>을 더했습니다. 플레이어가 딜러와 1:1로 마주 앉아 대결하고, <strong>상대의 HP를 0으로 만들면 다음 단계로 넘어가는 구조</strong>를 제안했습니다. 코인을 얻는 행위에 ‘눈앞의 딜러를 이긴다’는 목적을 부여하고, 시작부터 클리어까지 이어지는 흐름을 만들었습니다.</p>
      <div className="fables-loop"><p>핵심 자원 순환 · 코인을 어디에 쓸지 결정하는 플레이</p><ol>
        <li><strong>01 슬롯</strong><span>스핀과 결과 확인으로 코인을 획득</span></li><li><strong>02 선택</strong><span>회복·공격·참 구매에 코인을 배분</span></li><li><strong>03 대결</strong><span>생존을 유지하며 딜러의 HP를 감소</span></li><li><strong>04 진행</strong><span>딜러를 이기고 다음 스테이지로 이동</span></li>
      </ol></div>
      <p>이후에는 회복과 공격을 반복해도 긴장감이 약해지는 문제를 검토했습니다. 구매 누적에 따른 가격 상승, 딜러의 공격 턴을 앞당기는 해골 문양 등을 개선안으로 정리해 보상과 위험이 같은 루프 안에서 작동하도록 제안했습니다.</p>
      <Archive title="게임 방향성·HP·자원 순환 기획" src="/planning/rof-gallery-structure.webp">클리어 목표와 스테이지·HP 구조, 상점 이용과 자원 순환을 구체화한 개발 당시 설계안입니다.</Archive>
      <ProjectDisclosure title="초기 돌림판 구도와 변경된 대결 구도 보기"><div className="grocery-grid"><Shot src="/planning/rof-source-02.webp" caption="초기 팀 프로토타입 · 진행 NPC와 세워진 돌림판"/><Shot src="/planning/rof-source-09.webp" caption="방향성 논의 이후 팀 프로토타입 · 중앙 딜러와 우측 슬롯머신"/></div></ProjectDisclosure>
    </section>
    <section className="project-story-section" aria-labelledby="rof-slot">
      <h2 id="rof-slot" data-toc="슬롯머신 그레이박싱">슬롯머신을 직접 만들어 제작 방향 전달</h2>
      <p>결과와 조작 대상을 더 명료하게 보여주기 위해 슬롯머신과 테이블형 돌림판을 대안으로 제시했습니다. 슬롯머신은 릴·레버·보상 배출구를 직접 그레이박스로 구성해 정면과 측면의 형태를 전달했습니다.</p>
      <div className="grocery-grid"><Shot src="/planning/rof-source-06.webp" caption="직접 제작한 슬롯머신 그레이박스 · 측면과 레버 구조"/><Shot src="/planning/rof-source-07.webp" caption="직접 제작한 슬롯머신 그레이박스 · 정면 구성"/></div>
      <p>그래픽 담당자가 형태를 입체적으로 확인할 수 있도록 회전 시연 영상도 직접 촬영했습니다. 이 그레이박스를 바탕으로 UI 임시안이 제작됐고, 그래픽팀의 시안 연구를 거쳐 최종 슬롯머신으로 발전했습니다.</p>
      <p><a href="https://www.youtube.com/watch?v=VHyOH06vbH0" target="_blank" rel="noopener noreferrer">직접 촬영한 그레이박스 시연 영상 보기 ↗</a></p>
      <Archive title="슬롯머신 외관과 제작 기준" src="/planning/rof-gallery-slot.webp">외관 콘셉트·참고 이미지·기능 설명·여러 시점의 직접 제작 그레이박스를 정리한 작업 기록입니다.</Archive>
      <ProjectDisclosure title="그레이박스 이후의 UI·그래픽 협업 결과 보기"><Shot src="/planning/rof-source-08.webp" caption="그레이박스를 활용한 UI 임시안 · UI 담당자의 작업"/><Shot src="/planning/rof-source-10.webp" caption="슬롯머신 시안 연구와 최종 외형 선택 · 그래픽팀 작업"/><Shot src="/planning/rof-source-11.webp" caption="게임에 적용된 슬롯머신 · 팀 공동 결과물"/></ProjectDisclosure>
    </section>
    <section className="project-story-section" aria-labelledby="rof-stall">
      <h2 id="rof-stall" data-toc="가판대와 코인토스">재화의 소비처와 짧은 역전 기회</h2>
      <h3 id="rof-stall-design" data-toc="가판대 콘셉트">회복·공격·참을 테이블 위 가판대로 표현</h3>
      <p>슬롯으로 얻은 돈을 HP 회복, 딜러 공격, 참 뽑기에 사용하도록 소비처를 두었습니다. 저는 이를 종이 상자를 오려 만든 듯한 작은 가판대로 표현하자고 제안하고, 테이블 안의 위치와 기능별 외관 참고 자료를 정리했습니다.</p>
      <div className="grocery-grid fables-stall-grid"><Shot src="/planning/rof-stall-design-board.svg" caption="기획 제안 · 상점 연출 흐름과 종이 가판대 참고 자료"/><Shot src="/planning/rof-source-12.webp" caption="게임 적용 · 팀에서 완성한 가판대"/></div>
      <Archive title="가판대 기능·배치·콘셉트" src="/planning/rof-gallery-stall.webp">기능별 배치와 종이·박스 재질 방향을 정리한 콘셉트 제안서, 제작에 활용한 참고 자료입니다.</Archive>
      <h3 id="rof-coin" data-toc="코인토스 이벤트">코인이 부족할 때 등장하는 추가 도전</h3>
      <p>필요한 행동에 쓸 코인이 부족한 상황에 짧은 코인토스 이벤트를 제안했습니다. 별도의 긴 미니게임 대신 앞면·뒷면을 고르게 해 기존의 운과 위험 감수라는 주제를 이어가고자 했습니다.</p>
      <p>최대 세 번 도전하며 성공하면 다음 도전을 선택할 수 있고, 중간에 실패하면 이벤트에서 얻은 금액을 모두 잃는 구조입니다. 멈추고 보상을 확보할지, 더 큰 보상을 노릴지 선택하게 했습니다.</p>
      <Shot src="/planning/rof-source-14.webp" caption="코인토스 이벤트 ‘HEADS OR TAILS’ 연출 · 팀 공동 결과물"/>
      <Archive title="코인토스 진입·보상·복귀 설계" src="/planning/rof-gallery-coin.webp">진입 조건과 중단·추가 도전 선택, 보상과 실패 처리, 원래 플레이로 돌아가는 흐름을 정리한 기획 초안입니다.</Archive>
    </section>
    <section className="project-story-section" aria-labelledby="rof-tutorial">
      <h2 id="rof-tutorial" data-toc="튜토리얼과 내러티브">조작을 배우는 과정에 플레이의 이유 연결</h2>
      <p>마스코트가 플레이어를 이 세계로 데려왔고, 딜러를 이겨야 한다는 상황을 튜토리얼에 연결했습니다. 팀의 세계관을 바탕으로 마스코트의 이중성과 ‘승자가 새로운 딜러가 된다’는 반전을 서사 방향으로 제안해, 플레이어가 대결에 참여하는 이유를 보강했습니다.</p>
      <p>튜토리얼은 2분 이내를 목표로 설계했습니다. 슬롯 고정과 리스핀으로 잭팟을 경험하고, 받은 코인으로 회복·공격·참 구매를 체험하도록 순서를 정리했습니다. 스킵 여부와 관계없이 첫 참을 가진 상태로 본게임에 진입하도록 조건도 맞췄습니다.</p>
      <Archive title="튜토리얼·대사·내러티브 작업" src="/planning/rof-gallery-tutorial.webp">튜토리얼 흐름과 시간 목표, 스킵 분기, 대사 스크립트, 수정안과 연출 제안을 묶었습니다.</Archive>
      <ProjectDisclosure title="마스코트와 게임 내 연출 화면 보기"><Shot src="/planning/rof-source-15.webp" caption="플레이어를 안내하고 압박하는 마스코트 · 팀 공동 결과물"/><Shot src="/planning/rof-hero-candler.webp" caption="마스코트와 캔들러가 등장하는 장면 · 팀 공동 결과물"/></ProjectDisclosure>
    </section>
    <section className="project-story-section" aria-labelledby="rof-difficulty">
      <h2 id="rof-difficulty" data-toc="캔들러와 난이도 흐름">첫 보스에서 배운 규칙을 써볼 시간 확보</h2>
      <p>외부 피드백에서는 첫 상대인 채셔의 난도가 높아 전시 시간이 대부분 첫 전투에 소모된다는 문제가 나왔습니다. 튜토리얼에서 조작을 배워도, 이를 실제 플레이로 익히고 한 스테이지를 마치는 경험이 부족했습니다.</p>
      <p>저는 다음의 어려운 딜러를 늘리기보다 쉽게 이길 수 있는 첫 보스, ‘스마일 보스’ 캔들러를 우선 제작하자고 제안했습니다. 팀의 동의를 거쳐 <strong>튜토리얼 → 캔들러 → 채셔</strong>로 난도가 높아지는 구성을 마련했습니다.</p>
      <div className="grocery-grid"><Shot src="/planning/rof-source-16.webp" caption="캔들러 · 학습한 조작을 써보고 첫 클리어를 경험하는 딜러. 팀 공동 결과물"/><Shot src="/planning/rof-hero-cheshire.webp" caption="채셔 · 익힌 규칙을 바탕으로 도전하는 다음 딜러. 팀 공동 결과물"/></div>
      <p>기획서에서는 쉬운 첫 스테이지와 명확한 등장·퇴장 연출을 통해 짧은 전시 시간 안에 한 번의 클리어를 경험하게 하는 것을 목표로 삼았습니다. 난이도만 낮추는 안과 신규 보스를 추가하는 안의 제작 비용·효과도 비교했습니다.</p>
      <Archive title="첫 보스 추가·게임 개선안" src="/planning/rof-gallery-difficulty.webp">외부 피드백, 대안 비교, 캔들러와 채셔의 역할·공격 조건, 등장·퇴장 흐름과 추가 사운드 요청입니다.</Archive>
      <h3 id="rof-exhibition" data-toc="전시에서 확인한 플레이">전시에서 들은 반응과 플레이어의 선택</h3>
      <p>전시에서는 단계적으로 어려워지는 흐름이 좋았다는 의견을 들었습니다. 캔들러에서 돈을 충분히 모은 뒤 채셔에 도전한다는 플레이 방법도 인상적이었습니다. <strong>같은 규칙 안에서도 플레이어가 자원 사용과 다음 도전의 시점을 스스로 판단하는 모습</strong>에서, 콘텐츠를 선택의 흐름으로 연결한 설계의 의미를 확인했습니다.</p>
    </section>
    <section className="project-story-section" aria-labelledby="rof-sound">
      <h2 id="rof-sound" data-toc="사운드 디자인과 최종 플레이">행동·결과·연출에 맞춘 사운드 디자인</h2>
      <p>Cakewalk를 사용해 게임 내 모든 SFX를 직접 디자인했습니다. (BGM·캐릭터 보이스 제외) 필요한 소리를 먼저 목록으로 나누고, 프로토타입 플레이 영상에 맞춰 타이밍을 확인한 뒤 구현 담당자에게 파일과 적용 정보를 전달했습니다.</p>
      <Shot src="/planning/rof-sound-work.webp" caption="개인 산출물에 수록된 사운드 작업 화면 · 프로토타입 영상과 타이밍 대조"/>
      <p>슬롯의 조작·결과, 코인과 상점, 딜러의 공격·피격, 코인토스 등 플레이 상태가 바뀌는 지점의 소리를 작업했습니다. 중간 시연 이후에도 누락되거나 어울리지 않는 소리를 정리하고 교체·보완했습니다.</p>
      <Archive title="사운드 목록·작업·구현 전달" src="/planning/rof-gallery-sound.webp">팀에서 함께 관리한 사운드 목록과 직접 제작한 효과음의 작업 화면, 구현 전달 문서와 시연별 수정 기록입니다.</Archive>
      <p className="grocery-eyebrow">TEAM BUILD · 최종 빌드 플레이</p>
      <ProjectVideo title="Roulette of Fables 최종 빌드 플레이 — 팀 공동 결과물" youtubeUrl={fablesProjectVideos.gameplay}/>
    </section>
  </div>;
}
