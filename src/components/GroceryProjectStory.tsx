import { groceryProjectVideos } from "../data/projects";
import { assetUrl } from "../utils/assetUrl";
import ProjectVideo from "./ProjectVideo";
import ZoomableImage from "./ZoomableImage";
import "./AiToolShowcase.css";
import "./GroceryProjectStory.css";

function Shot({ src, caption }: { src: string; caption: string }) {
  return <figure className="grocery-shot"><ZoomableImage src={assetUrl(src)} alt={caption} /><figcaption>{caption}</figcaption></figure>;
}
function WorkOverview({ title, count, src, description }: { title: string; count: number; src: string; description: string }) {
  return <details className="grocery-details grocery-work-overview">
    <summary><span>{title} · 통합 이미지 펼쳐 보기</span><span className="grocery-overview-count">{count}개 화면</span></summary>
    <p className="grocery-caption">{description} 이미지를 누르면 확대할 수 있고, ‘원본 크기’에서 세부 내용을 확인할 수 있습니다.</p>
    <Shot src={src} caption={`${title} · ${count}개 화면 통합. 각 이미지 하단에 원본 문서·페이지 또는 파일명 표기`} />
  </details>;
}
const finalRoute = [
  { code: "A-1", type: "START · STATIC", title: "조작 학습", detail: "선형 진행 속에서 전투와 점프·대시를 경험하는 시작 구역" },
  { code: "B-3", type: "WAVE", title: "고저차 전투", detail: "중앙 허브와 여러 높이의 플랫폼을 오가도록 설계한 전투 구역" },
  { code: "B-2", type: "PASSING", title: "다리 통과", detail: "원거리 공격에 노출된 다리를 건너며 이동에 집중하는 구역" },
  { code: "BOSS", type: "ARENA", title: "보스 전투", detail: "탄막을 읽고 회피할 수 있도록 중앙을 비워 둔 아레나" },
];

export default function GroceryProjectStory() {
  return <div className="grocery-story">
    <section className="project-story-section" aria-labelledby="grocery-overview">
      <p className="grocery-eyebrow">TEAM BUILD · 최종 게임 플레이</p>
      <ProjectVideo title="SE:Grocery 최종 게임 플레이 — 팀 공동 결과물" youtubeUrl={groceryProjectVideos.gameplay} />
      <h2 id="grocery-overview" data-toc="프로젝트 소개와 역할">프로젝트 소개와 역할</h2>
      <p>SE:Grocery는 마트의 선반과 상품, 설비를 전투 공간으로 활용하는 FPS 프로젝트입니다. 저는 메인 레벨 디자이너로 참여해 공간 설계와 그레이박싱을 진행하고, 레벨에 연결되는 콘텐츠·시스템을 기획했습니다.</p>
      <p>여러 레벨 시안을 제작하고 PD가 승인한 지역을 선별해 시연 구간을 구성했습니다. 이후 일정에 맞춰 플레이 분량을 축소했으며, 멀티플레이 오류가 반복되어 최종 빌드는 싱글 플레이로 전환했습니다.</p>
      <dl className="grocery-role-list">
        <div><dt>주 담당</dt><dd>레벨 구조·동선 설계, Unreal Engine 그레이박싱, 시연 구간 구성</dd></div>
        <div><dt>콘텐츠·시스템</dt><dd>벤트·PIT ROOM 및 기능 오브젝트 기획, 세이프존·셔터문·스코어보드·랜덤 맵 생성 설계</dd></div>
        <div><dt>연출·사운드</dt><dd>Sequencer를 활용한 포도 보스 컷씬 제작, BGM을 제외한 게임 전체 사운드 디자인</dd></div>
      </dl>
      <div className="grocery-note"><strong>기획 범위와 최종 결과</strong><p>이 페이지의 레벨·시스템 문서는 개발 과정의 설계 기록입니다. 멀티플레이를 전제로 설계한 시스템 중에는 최종 빌드에 반영되지 못한 작업이 있습니다. 최종 플레이 영상과 그래픽이 적용된 화면은 팀 공동 결과물이며, 제 담당 영역은 별도로 설명했습니다.</p></div>
    </section>
    <section className="project-story-section" aria-labelledby="grocery-level">
      <h2 id="grocery-level" data-toc="레벨 디자인과 그레이박싱">레벨 디자인과 그레이박싱</h2>
      <p>공간의 외형뿐 아니라 플레이어가 어디로 이동하고, 어느 높이에서 적과 마주치며, 다음 경로를 어떻게 찾는지를 함께 설계했습니다. FPS 레벨 R&D와 마트 공간·설비 레퍼런스 조사를 바탕으로 여러 구조를 그레이박스로 제작했습니다.</p>
      <Shot src="/planning/se-level-overview.webp" caption="전체 레벨 작업 전경 · 검토 중 변경되거나 최종 시연에서 제외된 공간을 포함한 그레이박싱 작업 모음" />
      <h3 id="grocery-level-iterations" data-toc="변경 전·후 레벨 작업 모음">탑뷰의 동선과 플레이어 시점을 함께 확인했습니다.</h3>
      <p>변경 전에는 구역 간 연결과 전투·이동 구간의 배치를 여러 시안으로 구성했습니다. 변경 후에는 선반과 플랫폼, 램프를 배치하며 내부 동선을 구체화했습니다. 아래 작업 모음은 탑뷰 도면과 엔진 화면, 플레이어 시점을 함께 보여줍니다.</p>
      <WorkOverview title="변경 전 레벨 작업" count={24} src="/planning/se-gallery-before.webp" description="‘변경전 레벨작업1·2’에서 선별한 공간 배치·동선 도면·플레이 시점입니다. 최종 시연에 포함되지 않은 초기 시안도 함께 담았습니다." />
      <WorkOverview title="변경 후 그레이박싱" count={28} src="/planning/se-gallery-after.webp" description="‘변경후 레벨작업1~4’에서 선별한 작업 화면입니다. 선반 구역과 중앙 허브, 층간 이동 구조를 여러 시점으로 확인할 수 있습니다." />
      <h3 id="grocery-design-intent" data-toc="구간별 플레이 의도">각 구간에 서로 다른 플레이 역할을 부여했습니다.</h3>
      <ul>
        <li><strong>조작 학습:</strong> A-1은 복잡한 분기보다 선형 진행에 집중하고, 선반 위로 올라가 점프·대시로 다음 공간에 진입하도록 기획했습니다.</li>
        <li><strong>위치 전환:</strong> B-3은 중앙 다리형 허브와 1층·1.5층·2층을 연결해 한 위치에 머무르기보다 이동하며 전투하도록 설계했습니다.</li>
        <li><strong>이동의 긴장:</strong> B-2는 아래쪽 원거리 적에게 노출된 공중 다리를 건너는 구간으로, 전투 구역과 다른 이동 경험을 의도했습니다.</li>
        <li><strong>패턴을 읽는 공간:</strong> 보스방은 중앙을 비워 탄막 회피와 수평 기동에 집중하고, 높은 진입 지점에서 아레나를 먼저 내려다보도록 기획했습니다.</li>
      </ul>
      <div className="grocery-grid grocery-docs">
        <Shot src="/planning/se-doc-graybox.webp" caption="변경후 레벨작업4 · 1쪽. B-3 공간의 탑뷰와 내부 그레이박스" />
        <Shot src="/planning/se-doc-level-intent.webp" caption="기말시연 레벨 픽스 정리본 · 8쪽. B-3의 공간 구성과 고저차·허브 동선 설계 의도" />
      </div>
      <p className="grocery-caption">구간별 설명은 당시 기획 의도입니다. 최종 빌드는 아래의 축소된 순서로 구성되었으며, 세부 배치와 표현은 제작 과정에서 달라졌습니다.</p>
    </section>
    <section className="project-story-section" aria-labelledby="grocery-scope">
      <h2 id="grocery-scope" data-toc="최종 동선과 반영 화면">최종 동선과 반영 화면</h2>
      <p>처음에는 A·B 구역의 여러 전투 공간과 세이프존을 연결하는 분량을 계획했습니다. 제작 시간의 제약으로 A-2와 B-1 등을 제외하고, 남은 구간의 연결 순서를 바꾸어 시연 빌드를 마무리했습니다.</p>
      <div className="grocery-route-panel">
        <p className="grocery-eyebrow">FINAL ROUTE · 최종 시연 동선</p>
        <p className="grocery-route-summary">A-1 → B-3 → B-2 → BOSS</p>
        <ol className="grocery-route" aria-label="최종 레벨 진행 순서">{finalRoute.map(item => <li key={item.code}><span>{item.type}</span><strong>{item.code}</strong><b>{item.title}</b><p>{item.detail}</p></li>)}</ol>
      </div>
      <details className="grocery-details">
        <summary>초기 계획과 최종 축소 표시 비교</summary>
        <p>초기 계획: A-1 → A-2 → SAFE ZONE → B-1 → B-2 → B-3 → SAFE ZONE → B-4 BOSS</p>
        <div className="grocery-grid grocery-flow-images">
          <Shot src="/planning/se-flow-planned.webp" caption="초기 전체 플로우 · 전투 구역과 정비 구간을 포함한 계획" />
          <Shot src="/planning/se-flow-marked.webp" caption="최종 축소 범위를 표시한 자료 · 최종 순서는 A-1 → B-3 → B-2 → BOSS" />
        </div>
      </details>
      <h3 id="grocery-final-level" data-toc="게임에 반영된 공간">그레이박스에서 실제 플레이 공간으로</h3>
      <p>선별한 레벨 구조에 팀의 그래픽과 구현이 더해진 화면입니다. 저는 공간 구성과 그레이박싱을 담당했으며, 아래 이미지는 최종 반영 자료에서 발췌했습니다.</p>
      <div className="grocery-grid grocery-scenes">
        <Shot src="/planning/se-wh01_7.webp" caption="시작 구역 · 선반과 적재물을 활용한 높이 변화" />
        <Shot src="/planning/se-wh03_11.webp" caption="전투 공간 전경 · 여러 층의 플랫폼과 연결 동선" />
        <Shot src="/planning/se-wh03_10.webp" caption="상층 시점 · 중앙 연결부와 주변 플랫폼의 관계" />
        <Shot src="/planning/se-wh03_3.webp" caption="플레이어 시점 · 전투 중 보이는 높이 차와 이동 공간" />
      </div>
      <WorkOverview title="인게임 반영 화면 전체" count={23} src="/planning/se-gallery-final.webp" description="‘인게임 최종 반영’ 폴더의 WH01·WH02·WH03 이미지 23장을 모았습니다. 제 레벨 작업에 팀의 그래픽과 구현이 더해진 결과이며, 파일명은 최종 진행 순서와 별개입니다." />
    </section>
    <section className="project-story-section" aria-labelledby="grocery-props">
      <h2 id="grocery-props" data-toc="모듈·프랍과 제작 전달">모듈·프랍과 제작 전달</h2>
      <p>공간을 제작 가능한 단위로 나누고, 직접 프랍과 그레이박스 예시를 만들며 크기·재질·기능·우선순위를 문서화했습니다. 그래픽 담당자가 필요한 정보를 확인할 수 있도록 레퍼런스와 엔진 내 배치 예시를 함께 정리했습니다.</p>
      <h3 id="grocery-vent" data-toc="벤트 모듈">벤트 — 공통 규격으로 연결되는 이동 통로</h3>
      <p>직선·꺾임·T자 분기·수직 하강 모듈을 조합해 경로를 만들도록 설계했습니다. 기본 1칸은 가로 325cm × 세로 375cm × 높이 250cm로 정의하고, 입구 규격을 통일했습니다. 통로와 출입구, 외부를 조망하는 루버, 바닥 그레이팅의 역할도 분리했습니다.</p>
      <p>통과 가능 여부, 파괴 가능한 문, 배치 방식과 재질까지 지정했습니다. 이는 모듈을 반복 배치하면서도 각 오브젝트의 기능을 구분하기 위한 제작 기준이었습니다.</p>
      <WorkOverview title="벤트 모듈·프랍 제작" count={24} src="/planning/se-gallery-vent.webp" description="벤트 모듈 기획서에서 직접 제작한 그레이박스와 규격·조합 설명을 발췌했습니다. 직선·꺾임·분기 통로, 출입구·루버·프레임, 바닥 그레이팅을 함께 볼 수 있습니다." />
      <h3 id="grocery-pit" data-toc="PIT ROOM 설비">PIT ROOM — 설비의 기능과 공간의 맥락</h3>
      <p>마트 지하의 전기·배관·환기 설비가 모인 공간을 기획했습니다. 물탱크·난간·분전함·배수로 등을 분류하고, 찢어진 물탱크의 적 스폰과 누수 표현, 난간과 경고 표시를 통한 공간 안내를 설계했습니다. 이 작업은 최종 시연 동선과 구분되는 공간·오브젝트 설계 사례입니다.</p>
      <WorkOverview title="PIT ROOM 설비·배치 연구" count={24} src="/planning/se-gallery-pit.webp" description="출입문, 물탱크, 난간, 전기 설비, 배수구와 케이블 등의 제작용 그레이박스·규격·캐릭터 대비 크기 검토 화면입니다. 완성 그래픽이 아닌 제작 기준과 배치 구상입니다." />
      <div className="grocery-grid grocery-docs">
        <Shot src="/planning/se-doc-vent.webp" caption="벤트 모듈 기획서 · 7쪽. 기본 유닛의 엔진 그레이박스와 크기·재질·조합 기준" />
        <Shot src="/planning/se-doc-pit.webp" caption="PIT ROOM 설비 기획서 · 9쪽. 출입문의 규격과 캐릭터 대비 크기 검토" />
      </div>
      <h3 id="grocery-shelves" data-toc="진열상품대 규격과 변형">진열상품대 — 반복 배치할 구조의 크기와 변형</h3>
      <p>일반진열상품대 A·B의 프레임과 상품 묶음을 나누고, 정면·대각선·윗면에서 크기와 배치를 정리했습니다. 선반 높이와 상품 적재량을 달리하는 변형을 검토해 같은 구조가 반복되는 단조로움을 줄이고자 했습니다.</p>
      <WorkOverview title="진열상품대 A·B 규격 연구" count={16} src="/planning/se-gallery-shelves.webp" description="일반진열상품대 A·B 연구 자료의 규격 표시와 구성 요소별 화면을 모았습니다. 철조대·상품 묶음의 크기, 선반 추가와 배치 변형을 정리한 작업입니다." />
      <div className="grocery-note"><strong>제작 전달에서 얻은 경험</strong><p>‘어떤 물건이 필요한가’에서 더 나아가 ‘어느 크기로, 어떤 기능을 가지며, 어디에 쓰이는가’를 설명하는 자료를 만들었습니다. 천장·인프라, 파렛트 상품과 진열대에도 같은 관점으로 규격과 배치 정보를 정리했습니다.</p></div>
    </section>
    <section className="project-story-section" aria-labelledby="grocery-systems">
      <h2 id="grocery-systems" data-toc="시스템 기획과 검증 시도">시스템 기획과 검증 시도</h2>
      <p className="grocery-status">멀티플레이 전제의 기획·시뮬레이션 작업 · 최종 빌드 반영과 구분</p>
      <p>전투 공간을 연결하는 규칙도 함께 기획했습니다. 멀티플레이 구현 과정의 오류와 싱글 플레이 전환으로 이 설계들을 모두 최종 빌드에 적용하지는 못했지만, 진행 조건과 예외 상황을 문서와 시뮬레이터로 구체화했습니다.</p>
      <h3 id="grocery-score" data-toc="스코어보드">스코어보드 — 전투와 팀 기여를 보여주는 결과</h3>
      <p>처치·피해량·미션 수행과 소생·지원 등 팀 기여를 집계하고, 개인 성과를 영수증 형태로 보여주는 시스템을 기획했습니다. 중간 결과의 재화 환산과 최종 결과의 경험치 환산을 구분하고, 점수 가중치·집계 상한·예외 처리도 정의했습니다.</p>
      <p>시뮬레이터에서는 플레이어 행동 데이터와 가중치를 바꾸며 결과를 확인하도록 구성했습니다. 수식과 결과 표시를 검토하는 도구였으며, FPS 전투의 재미나 실제 멀티플레이 안정성까지 검증한 것은 아닙니다.</p>
      <h3 id="grocery-safe" data-toc="세이프존과 진행 규칙">세이프존·셔터문 — 전투 사이의 정비와 다음 출발</h3>
      <p>세이프존은 보급·회복·부활로 다음 전투를 준비하는 공간으로 설계했습니다. 일반 구간과 랜덤미션 이후 구간의 기능을 나누고, 셔터문의 진입·퇴장 조건, 준비 완료와 투표, 다음 맵 선택이 이어지는 흐름을 정리했습니다.</p>
      <div className="grocery-grid grocery-docs">
        <Shot src="/planning/se-doc-scoreboard.webp" caption="스코어보드 시스템 기획서 · 4쪽. 시뮬레이터 활용 목적과 영수증 UI 구성안" />
        <Shot src="/planning/se-doc-safezone.webp" caption="세이프존 시스템 기획서 · 3쪽. 타입별 기능과 셔터문·보급·회복의 연결" />
      </div>
      <p>스코어보드 외에도 셔터문·세이프도어·랜덤 맵 생성 시뮬레이터를 제작했습니다. 당시에는 웹 시뮬레이션으로 FPS의 공간감과 전투 조건을 충분히 재현하기 어려웠고, 엔진에서 확인해야 할 항목과 문서·수식으로 확인할 항목을 나눌 필요를 배웠습니다.</p>
    </section>
    <section className="project-story-section" aria-labelledby="grocery-audio">
      <h2 id="grocery-audio" data-toc="보스 컷씬과 사운드">보스 컷씬과 사운드</h2>
      <p>Unreal Engine Sequencer를 하루 동안 독학해 포도 보스 컷씬을 제작했습니다. 컷씬 제작과 해당 장면의 사운드 디자인을 함께 담당해 보스 등장 연출을 완성했습니다.</p>
      <p className="grocery-eyebrow">MY CONTRIBUTION · 컷씬 제작 + 사운드 디자인</p>
      <ProjectVideo title="포도 보스 컷씬 — 직접 제작한 컷씬과 사운드 디자인" youtubeUrl={groceryProjectVideos.boss} />
      <details className="grocery-details"><summary>Sequencer 작업 화면 보기</summary><Shot src="/planning/se-doc-sequencer.webp" caption="UE 시퀀스 보스전 컷씬 제작 기록 · Sequencer 편집 화면" /></details>
      <h3 id="grocery-sound" data-toc="BGM을 제외한 사운드">게임 전체의 행동과 상태를 소리로 연결했습니다.</h3>
      <p>BGM을 제외한 게임 내 사운드 디자인을 담당했습니다. 무기와 캐릭터, 몬스터·보스의 행동뿐 아니라 웨이브 전조, 셔터문, 서비스 박스와 킬 콤보 등 플레이의 상태 변화를 전달하는 소리를 작업했습니다.</p>
      <dl className="grocery-role-list">
        <div><dt>전투 피드백</dt><dd>무기 발사·장전, 캐릭터 스킬, 몬스터의 공격과 사망</dd></div>
        <div><dt>보스의 행동</dt><dd>쇼크웨이브, 투사체 발사·착지, 이동, 부패액 공격 전조와 발사</dd></div>
        <div><dt>진행·상호작용</dt><dd>웨이브 시작, 셔터문 열림, 서비스 박스 작동·아이템 선택, 킬 콤보 단계</dd></div>
      </dl>
    </section>
  </div>;
}
