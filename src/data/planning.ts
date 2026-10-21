export interface PlanningResource {
  label: string;
  // public/planning 파일은 /planning/파일명, 외부 자료는 https:// 주소를 넣으세요.
  href: string;
}

export const simulatorUrl = "https://dante950.github.io/";

export const featuredTool = {
  role: {
    design: [
      { title: "전체 루프 · 각 활동의 결과를 다음 목표로 연결", description: "하루의 영업 결과가 후기·팔로워·별 획득으로 쌓이도록 구성하고, 이를 3스타 목표와 5일차 마왕 방문에 연결했습니다. 진행 분량과 게임 오버·엔딩 조건을 정리해 각 활동이 다음 목표로 이어지도록 설계했습니다." },
      { title: "미용 · 손님의 부탁을 플레이 규칙으로 구체화", description: "형태·색과 무늬·장식의 단계, 손님별 요구와 판정 영역, 만족도 규칙을 정리했습니다. 부탁 달성 체크와 전체 반응을 구분하고, 자유롭게 꾸미는 행동과 평가가 함께 작동하도록 구성했습니다." },
      { title: "전투 · 공격 기회를 직접 만드는 행동 추가", description: "회피 중에도 기본 공격으로 무력화를 깎고, 무력화가 무너지면 빈틈을 여는 흐름을 설계했습니다. 빈틈에서는 가위를 좌우로 드래그하는 공격으로 조작을 바꾸어, 평상시의 대응과 공격 기회에서의 행동에 차이를 주었습니다." },
      { title: "몬스터별 기믹·파훼 · 콘셉트를 공략 행동으로 연결", description: "몬스터의 특징이 공격을 피하는 방식과 기회를 얻는 행동에 드러나도록 기믹·파훼 개념을 제안해 도입했습니다. 예를 들어 취준좀비는 돌진을 비석으로 유도해 추가 빈틈을 얻고, 샌즈는 빈틈에서 가위 공격을 성공시켜 하트 판을 줄이는 공략을 시뮬레이터로 구체화했습니다. 현재 이러한 기믹과 파훼 경험을 엔진 빌드에 구현하고 있습니다." },
    ],
    collaboration: [
      { title: "통합 시뮬레이터 제작", description: "검토와 편집에 필요한 기능을 직접 만들고, 미용·전투·대사를 같은 도구에서 다룰 수 있도록 구성했습니다." },
      { title: "개선안 제안·검증과 팀 구현 조율", description: "팀 미팅에서 조작과 흐름을 함께 검토하고, 합의한 규칙과 연출을 프로그래밍·그래픽 파트에 전달해 엔진 구현을 조율했습니다." },
    ],
  },
  title: "몬스터 헤어 살롱",
  subtitle: "바이브 코딩으로 직접 제작한 통합 시뮬레이터",
  description: "미용·전투·대사와 하루 마감, 엔딩까지 하나의 시뮬레이터로 연결했습니다. 게임 전체를 플레이하면서 개별 시스템의 규칙과 연출도 편집·시험할 수 있도록 만들었습니다.",
  context: "미용·전투의 개선 방향을 팀과 합의하기 전에, 의도한 조작과 흐름을 직접 확인할 수 있는 자료가 필요했습니다. 엔진 구현에 앞서 새 규칙과 기믹을 플레이해 보며 검토할 수 있도록 만들었습니다.",
  approach: "설계한 규칙을 바이브 코딩으로 구현하고, 직접 플레이하며 조정했습니다. 이후 미용·전투·대사를 편집할 수 있도록 기능을 확장해 팀의 검토와 데이터 작업에도 사용했습니다.",
  // 로컬 영상(mp4/webm)과 포스터 이미지 경로. 영상이 없으면 명시적인 자리 표시자를 보여줍니다.
  videoSrc: "",
  posterSrc: "/planning/simulator-home.png",
  previewCaption: "개발자 시뮬레이터에서 각 시스템을 편집·시험하고, 본편 플레이에서 공개된 최신 설정으로 게임을 진행합니다.",
  handoff: "미용·진행·대사는 JSON으로, 전투 데이터는 Excel로 추출해 개발에 전달할 수 있도록 했습니다. Unity 연동용 Excel 추출과 변경 이력 자동 저장도 구성했습니다.",
  outcomes: [
    {
      label: "CASE 01 / GROOMING", toc: "미용 설정·규칙 검증", title: "몬스터별 미용 규칙을 화면에서 조정하고 시험",
      description: "방문 몬스터별 미용 영역·정답 조건·만족도를 편집하도록 만들었습니다. 얼굴 위에서 영역을 옮기고 크기를 조절하며 단계별 요구를 설정할 수 있습니다.",
      result: "수정한 설정을 미용 시험에 적용해, 판정 영역과 손질 결과가 의도대로 맞는지 확인합니다.",
      image: "/planning/grooming-editor.png", imageAlt: "방문 몬스터 선택, 얼굴 위 미용 영역 편집, 단계별 요구 설정이 함께 보이는 미용 편집 화면", evidence: "미용 영역·규칙 편집 화면", caption: "몬스터별 미용 영역과 단계별 요구를 설정하는 편집 화면",
    },
    {
      label: "CASE 02 / BATTLE", toc: "전투 패턴·플레이 검증", title: "편집한 전투 패턴을 바로 플레이로 확인",
      description: "공격 영역·반복 횟수·예고 간격 등을 테이블에서 수정하고, 옆의 전투 시뮬레이터에 바로 적용할 수 있도록 만들었습니다.",
      result: "패턴 하나의 체감과 몬스터 전투 전체의 흐름을 각각 확인하며 수치와 규칙을 조정합니다.",
      image: "/planning/battle-simulator.png", imageAlt: "왼쪽 전투 시험 시뮬레이터와 오른쪽 공격 패턴 데이터 테이블이 나란히 있는 전투 편집 화면", evidence: "전투 패턴 편집·시험 화면", caption: "왼쪽: 전투 시험 · 오른쪽: 패턴 데이터 편집",
    },
    {
      label: "CASE 03 / SCRIPT", toc: "대사 작성·연출 확인", title: "팀의 대사 작업을 게임 속 연출로 연결",
      description: "손님과 대화 시점별로 대사·텍스트 효과를 편집하고, 말풍선 연출을 미리 볼 수 있도록 만들었습니다.",
      result: "스크립트 담당자가 실제 대사 작성에 사용하고 있으며, 작성한 내용을 작업본 플레이에서 확인합니다.",
      image: "/planning/dialogue-editor.png", imageAlt: "손님과 대화 시점을 선택하고 대사·텍스트 효과를 편집하며 말풍선 연출을 미리 보는 대사 편집 화면", evidence: "대사 편집·연출 미리보기 화면", caption: "대사·텍스트 효과 편집과 말풍선 미리보기",
    },
    {
      label: "CASE 04 / CLOSING", toc: "하루 마감 연출", title: "하루의 플레이 결과가 마감 연출로 이어지도록",
      description: "하루 마감 연출실에서 시작 일차·손님별 미용과 전투 결과·연출 속도를 바꿔 시험할 수 있도록 만들었습니다.",
      result: "후기·팔로워·별 획득이 결과 조합에 맞게 이어지는지 검토하고, 실제 플레이 후의 하루 마감과 함께 확인합니다.",
      image: "/planning/day-closing.png", imageAlt: "취준좀비의 몬스타그램 후기와 오늘의 팔로워 증가, 누적 팔로워 및 스타 달성 진행도를 보여주는 하루 마감 화면", evidence: "하루 마감 연출 화면", caption: "몬스타그램 후기와 팔로워·스타 달성 결과",
    },
    {
      label: "CASE 05 / PLAYTEST", toc: "반영 후 본편 플레이", title: "수정한 내용을 하나의 게임으로 플레이하며 검증",
      description: "‘내 작업본으로 시험 플레이’에서 편집한 미용·전투·대사를 게임에 적용해 확인합니다. ‘본편 플레이’에서는 공개된 설정으로 원하는 손님부터 시작할 수 있습니다.",
      result: "개별 기능을 시험한 뒤 대사·미용·야차·하루 마감이 이어지는 흐름을 팀과 함께 검토합니다.",
      image: "/planning/story-play.png", imageAlt: "좀비·샌즈·마왕 부하 중 시작할 손님을 고르는 본편 플레이 화면", evidence: "본편 플레이 시작 화면", caption: "시작할 손님을 선택하는 본편 플레이 화면",
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
    resources: [{ label: "기획서", href: "https://drive.google.com/drive/folders/12kQxAFfseEheq1f0kNx-N7CUP0Jr1snG?usp=sharing" }, { label: "데이터 테이블", href: "https://drive.google.com/drive/folders/11JR_vDP4Z7hgyhN2raLjC328ACg_K_tn?usp=sharing" }, { label: "JSON", href: "https://drive.google.com/drive/folders/16BoXR5rdkQf35ASaLg2mUvJcUH1TguCY?usp=drive_link" }],
  },
  {
    id: "kingdom-rush", label: "HERO & DATA", title: "킹덤러쉬 영웅 기획",
    focus: "영웅 분석과 신규 영웅 데이터 설계",
    description: "이그누스의 전투·성장 규칙을 분석하고, 원거리 공격과 늑대 소환을 결합한 신규 영웅 칸을 기획했습니다. 영웅·스킬·소환수와 UI·리소스를 8개 데이터 시트로 정리했습니다.",
    tags: ["영웅 분석", "신규 영웅", "데이터 설계"],
    image: "/planning/kingdom-khan-overview.png", imageAlt: "늑대의 왕 칸의 콘셉트와 전투 역할을 정리한 기획서",
    placeholder: "영웅 데이터 테이블 미리보기",
    resources: [{ label: "이그누스 역기획서", href: "https://drive.google.com/drive/folders/1YqP5bTlIdTTZzgabThhjnOsKbG0WnVP0?usp=drive_link" }, { label: "신규 영웅 칸 기획서", href: "https://drive.google.com/drive/folders/1gtVpZv7yrJSa2rcdGkEIhnPJYXSRsv5x?usp=drive_link" }, { label: "데이터 테이블", href: "https://drive.google.com/drive/folders/136eGfFn0StWZ9OeVdJBEQjofawAjpjyr?usp=drive_link" }, { label: "기획 문서·데이터 전체 보기", href: "https://drive.google.com/drive/folders/1ByycPPPOSSu4ET9x5hFTjlclshaYaXDs?usp=sharing" }],
  },
  {
    id: "stormveil", label: "SPATIAL ANALYSIS", title: "엘든링 스톰빌성 분석",
    focus: "직접 조사한 공간·그래픽 문법·몬스터 데이터",
    description: "직접 탐색·측정한 스톰빌성을 도면과 그레이박싱으로 재구성하고, 그래픽 문법과 몬스터의 배치·반응 조건을 분석했습니다.",
    tags: ["도면·그레이박싱", "그래픽 문법", "몬스터 데이터"],
    image: "", imageAlt: "엘든링 스톰빌성 분석 도면과 그레이박싱",
    placeholder: "도면 · 그레이박싱 미리보기",
    resources: [{ label: "레벨 분석서", href: "https://drive.google.com/drive/folders/1smK8Bm5fXjzMfG_WggFJgRolDTlyJlZe?usp=drive_link" }, { label: "분석용 데이터", href: "https://drive.google.com/drive/folders/1HVU8CJ6YUwlVm8N96P5J09U5e_l-vWR5?usp=drive_link" }],
  },
];
