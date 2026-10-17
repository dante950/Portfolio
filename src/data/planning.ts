export interface PlanningResource {
  label: string;
  // public/planning 파일은 /planning/파일명, 외부 자료는 https:// 주소를 넣으세요.
  href: string;
}

export const simulatorUrl = "https://dante950.github.io/";

export const featuredTool = {
  role: {
    items: [
      "플레이 루프 구조 설계 — 손님 응대·미용·야차·하루 마감이 이어지는 전체 플레이 흐름 구성",
      "전체 볼륨 설계 — 5일차 마왕 방문까지의 진행 범위와 3스타 목표, 게임 오버·엔딩 조건 설계",
      "미용 시스템 기획 — 몬스터별 미용 영역과 정답 조건, 만족도 등 미용 규칙 설계",
      "전투 시스템 기획 — 미용 불만족에서 야차로 이어지는 구조와 전투 규칙·공격 패턴 설계",
      "AI 활용 검증·협업 도구 제작 — 미용·전투·대사를 편집하고 플레이로 검증하는 시뮬레이터 제작, 데이터 추출·변경 이력 저장 기능 구성",
      "팀 협업 — 스크립트 담당자의 대사 작업에 도구를 활용하고, 플레이 시연을 바탕으로 프로그래밍·그래픽 파트와 구현 및 연출 방향 논의",
    ],
    description: "리드 기획으로서 게임의 전체 구조부터 개별 시스템까지 연결해 설계했습니다. AI를 활용해 기획 내용을 직접 플레이하고 수정할 수 있는 도구를 만들고, 팀이 같은 화면을 보며 검증하고 협업할 수 있도록 실제 작업에 활용했습니다.",
  },
  title: "몬스터 헤어 살롱",
  subtitle: "AI를 활용해 만든 플레이 검증·협업 툴",
  description: "미용·전투·대사와 하루 마감 연출을 검토하고, 게임의 흐름 안에서 확인할 수 있는 도구를 만들었습니다. 시스템별 편집과 시험에서 본편 플레이까지 이어지는 작업 환경입니다.",
  context: "미용 로직과 전투 시스템이 아직 구체화되지 않은 단계에서, 게임의 큰 플레이 루프를 먼저 확인할 수 있는 수단이 필요했습니다.",
  approach: "AI를 활용해 본편과 유사한 흐름으로 플레이할 수 있는 툴을 제작했습니다. 규칙과 대사를 관리하고, 팀원에게 의도한 장면을 직접 보여주는 협업 도구로 활용했습니다.",
  // 로컬 영상(mp4/webm)과 포스터 이미지 경로. 영상이 없으면 명시적인 자리 표시자를 보여줍니다.
  videoSrc: "",
  posterSrc: "/planning/simulator-home.png",
  previewCaption: "개발자 시뮬레이터에서 각 시스템을 편집·시험하고, 본편 플레이에서 공개된 최신 설정으로 게임을 진행합니다.",
  capabilities: [
    { label: "01 / PLAY", title: "작업본 검증과 본편 플레이", description: "개발실에서 수정한 작업본으로 시험 플레이하고, 본편에서는 공개된 최신 설정으로 시작부터 현재 구현된 구간까지 플레이합니다." },
    { label: "02 / SCRIPT", title: "대사 작성·편집", description: "게임에 들어갈 대사를 추가하고 수정합니다. 실제 스크립트 담당자의 대사 작업에도 쓰이고 있습니다." },
    { label: "03 / GROOMING", title: "몬스터별 미용 시스템 편집", description: "방문 몬스터별 미용 영역·정답·만족도 등 규칙을 추가하고 수정합니다. 설정을 미용 시험과 작업본 플레이에 적용해 확인합니다." },
    { label: "04 / BATTLE", title: "전투 패턴 편집·플레이 시험", description: "패턴과 공격 영역을 편집하고, 툴 안의 전투 시뮬레이터로 직접 시험합니다. 패턴 하나의 체감부터 몬스터 전투 흐름까지 확인하고 데이터를 Excel로 추출할 수 있습니다." },
    { label: "05 / CLOSING", title: "하루 마감 연출 시험", description: "미용·전투 결과를 대입해 후기와 팔로워, 별 획득으로 이어지는 마감 연출을 확인합니다. 별도 연출실에서 결과 조합과 연출 속도를 바꿔 시험할 수 있습니다." },
    { label: "06 / EXPORT", title: "개발용 데이터 추출", description: "미용·진행·대사는 프로젝트 JSON으로, 전투 데이터는 전투 실험실에서 Excel로 추출합니다. Unity 연동용 Excel 추출도 갖추었습니다." },
    { label: "07 / HISTORY", title: "변경 이력 자동 저장", description: "편집 과정에서 발생한 변경 이력을 자동으로 저장해 작업 기록을 남깁니다." },
  ],
  outcomes: [
    {
      label: "CASE 01 / GROOMING", toc: "미용 설정·규칙 검증", title: "몬스터별 미용 규칙을 화면에서 조정하고 시험",
      description: "방문 몬스터를 선택해 미용 영역의 위치와 크기, 정답 조건, 만족도 등 미용 시스템의 설정을 추가·수정할 수 있게 만들었습니다. 몬스터 얼굴 위에서 영역을 직접 옮기고 크기를 조절하며, 형태 만들기·색과 무늬·장식 등 단계별 요구를 구성합니다.",
      result: "수정한 설정을 미용 시험과 작업본 플레이에 적용해 확인합니다. 미용·진행 데이터는 프로젝트 JSON으로 정리하며, 영역과 규칙 조정부터 플레이 확인까지 같은 툴에서 진행합니다.",
      image: "/planning/grooming-editor.png", imageAlt: "방문 몬스터 선택, 얼굴 위 미용 영역 편집, 단계별 요구 설정이 함께 보이는 미용 편집 화면", evidence: "미용 영역·규칙 편집 화면", caption: "방문 몬스터 선택 → 얼굴 위 영역 조정 → 단계별 요구 설정 → 미용 시험. 영역은 드래그로 이동하고 크기를 바꿀 수 있습니다.",
    },
    {
      label: "CASE 02 / BATTLE", toc: "전투 패턴·플레이 검증", title: "편집한 전투 패턴을 바로 플레이로 확인",
      description: "오른쪽 테이블에서 공격 패턴과 영역, 반복 횟수·예고 간격 등을 추가·수정하고, 왼쪽 전투 시험에 적용할 수 있게 만들었습니다. 전체 게임 시뮬레이터 안에 전투 전용 시뮬레이터를 두어, 패턴 하나를 따로 시험하거나 몬스터의 전투 흐름을 플레이할 수 있습니다.",
      result: "수치와 규칙을 편집한 뒤 실제 플레이에서 어떻게 느껴지는지 확인하며 조정합니다. 패턴 편집·플레이 시험·Excel 추출을 같은 작업 환경에서 진행할 수 있습니다.",
      image: "/planning/battle-simulator.png", imageAlt: "왼쪽 전투 시험 시뮬레이터와 오른쪽 공격 패턴 데이터 테이블이 나란히 있는 전투 편집 화면", evidence: "전투 패턴 편집·시험 화면", caption: "오른쪽에서 패턴 편집 → 왼쪽에서 ‘적용 후 시작’ → 패턴 하나 또는 몬스터 전투 시험. 추가한 패턴의 플레이 체감을 확인합니다.",
    },
    {
      label: "CASE 03 / SCRIPT", toc: "대사 작성·연출 확인", title: "팀의 대사 작업을 게임 속 연출로 연결",
      description: "누가, 언제, 어떤 말을 하는지 설정하고 대사와 텍스트 연출을 편집합니다. 수정한 대사를 작업본 시험 플레이에 반영해, 문장과 연출이 게임 안에서 어떻게 보이는지 확인합니다.",
      result: "스크립트 담당자가 실제 게임 대사 작성에 사용하고 있습니다. 텍스트를 작성하는 작업과 플레이 흐름 속에서 확인하는 작업을 같은 도구에서 이어갑니다.",
      image: "/planning/dialogue-editor.png", imageAlt: "손님과 대화 시점을 선택하고 대사·텍스트 효과를 편집하며 말풍선 연출을 미리 보는 대사 편집 화면", evidence: "대사 편집·연출 미리보기 화면", caption: "손님과 대화 시점 선택 → 대사 작성·텍스트 효과 편집 → 말풍선 연출 미리보기. 문장과 연출을 같은 화면에서 확인합니다.",
    },
    {
      label: "CASE 04 / CLOSING", toc: "하루 마감 연출", title: "하루의 플레이 결과가 마감 연출로 이어지도록",
      description: "미용과 전투의 결과를 대입해, 영업 종료 후 몬스타그램 후기·팔로워·별 획득으로 이어지는 연출을 시험합니다. 별도 하루 마감 연출실에서 시작 일차와 손님별 결과, 연출 속도를 바꿔 확인할 수 있습니다.",
      result: "결과 조합에 따른 마감 흐름을 따로 검토하고, 본편에서는 실제 플레이 결과가 하루 마감으로 연결되는 모습을 확인합니다.",
      image: "/planning/day-closing.png", imageAlt: "취준좀비의 몬스타그램 후기와 오늘의 팔로워 증가, 누적 팔로워 및 스타 달성 진행도를 보여주는 하루 마감 화면", evidence: "하루 마감 연출 화면", caption: "손님의 몬스타그램 후기와 팔로워 증가, 스타 달성 진행도를 확인하는 하루 마감 화면입니다.",
    },
    {
      label: "CASE 05 / PLAYTEST", toc: "반영 후 본편 플레이", title: "수정한 내용을 하나의 게임으로 플레이하며 검증",
      description: "개발자 시뮬레이터에서 미용·전투·대사를 편집한 뒤 ‘내 작업본으로 시험 플레이’로 게임 속 모습을 확인합니다. 메인의 ‘본편 플레이’에서는 공개된 최신 설정으로 게임 시작부터 현재 구현된 구간까지 진행하거나, 원하는 손님부터 이어서 플레이할 수 있습니다.",
      result: "개별 시스템의 시험을 넘어 대사·미용·전투·하루 마감이 이어지는 흐름을 팀과 함께 확인합니다. 작업본 저장과 공개 버전 반영은 구분되며, 개발실에서 저장한 내용이 공개 사이트에 자동 반영되는 구조는 아닙니다.",
      image: "/planning/story-play.png", imageAlt: "좀비·샌즈·마왕 부하 중 시작할 손님을 고르는 본편 플레이 화면", evidence: "본편 플레이 시작 화면", caption: "본편 플레이에서는 원하는 손님부터 시작할 수 있고, 선택한 손님의 등장부터 이후 이야기가 순서대로 이어집니다.",
    },
  ],
};

export interface PlanningStudy {
  id: string;
  label: string;
  title: string;
  focus: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  placeholder: string;
  resources: PlanningResource[];
}

export const planningStudies: PlanningStudy[] = [
  {
    id: "semester-event", label: "EVENT DESIGN", title: "맙소사 벌써 종강이라니",
    focus: "이벤트 기획에서 데이터까지",
    description: "퀘스트로 모은 포인트를 글자 수집·교환과 종강 뱃지 보상으로 연결하고, 이벤트 UI와 8개 데이터 테이블·JSON을 설계했습니다.",
    tags: ["이벤트 기획", "데이터 테이블", "JSON"],
    image: "", imageAlt: "맙소사 벌써 종강이라니 이벤트 기획서와 데이터 테이블",
    placeholder: "기획서 · 테이블 미리보기",
    resources: [{ label: "기획서", href: "/planning/semester-event-plan.pptx" }, { label: "데이터 테이블", href: "/planning/semester-event-data.xlsx" }, { label: "JSON", href: "/planning/semester-event-json.zip" }],
  },
  {
    id: "kingdom-rush", label: "HERO & DATA", title: "킹덤러쉬 영웅 기획",
    focus: "영웅 분석과 신규 영웅 데이터 설계",
    description: "기존 영웅을 분석하고 신규 영웅을 기획했습니다. 영웅의 속성과 수치를 데이터 테이블로 정리한 작업입니다.",
    tags: ["영웅 분석", "신규 영웅", "데이터 설계"],
    image: "", imageAlt: "킹덤러쉬 신규 영웅 데이터 테이블",
    placeholder: "영웅 데이터 테이블 미리보기",
    resources: [{ label: "데이터 테이블", href: "" }, { label: "기획서", href: "" }],
  },
  {
    id: "stormveil", label: "SPATIAL ANALYSIS", title: "엘든링 스톰빌성 분석",
    focus: "도면과 그레이박싱으로 읽는 공간",
    description: "스톰빌성의 공간을 도면과 그레이박싱으로 재구성한 대학 과제입니다. 몬스터의 배치·양상과 아이템을 조사하며 공간을 깊이 살펴봤습니다.",
    tags: ["공간 분석", "그레이박싱", "도면 제작"],
    image: "", imageAlt: "엘든링 스톰빌성 분석 도면과 그레이박싱",
    placeholder: "도면 · 그레이박싱 미리보기",
    resources: [{ label: "공간 분석서", href: "" }, { label: "도면·그레이박싱", href: "" }],
  },
];
