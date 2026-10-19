export const monsterProjectVideos = {
  gameplay: "https://www.youtube.com/watch?v=O-70TVuT1L4",
  beforeGrooming: "https://www.youtube.com/watch?v=xVAsG9mAgfo",
  beforeBattle: "https://www.youtube.com/watch?v=iqcf42R9J44",
  simulator: "https://www.youtube.com/watch?v=AHj7lhXeWC8",
};

export const lunaProjectVideos = {
  gameplay: "https://www.youtube.com/watch?v=LnDkn3xif20",
  before: "https://www.youtube.com/watch?v=YIC-JGSxPRU",
  crafting: "https://www.youtube.com/watch?v=dFbCqxHFoWM",
  service: "https://www.youtube.com/watch?v=CJHColaSQkE",
  ui: "https://www.youtube.com/watch?v=ZlO0_8LphYM",
};

export const groceryProjectVideos = {
  gameplay: "https://www.youtube.com/watch?v=UU7aD4w94ks",
  boss: "https://www.youtube.com/watch?v=3SG0Wc6K3NY",
};

export const fablesProjectVideos = {
  trailer: "https://www.youtube.com/watch?v=F0qB0OFTj-U",
  gameplay: "https://www.youtube.com/watch?v=fd0Tri05yOM",
};

export interface PortfolioProject {
  id: string;
  title: string;
  initials: string;
  icon?: string;
  summary: string;
  tags: string[];
  heroImage?: string;
  heroImageAlt?: string;
  screenshots?: { src: string; alt: string }[];
  info: { label: string; value: string }[];
  body?: string;
  relatedWorkIds?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "monster-hair-salon", title: "몬스터 헤어 살롱", initials: "MHS",
    icon: "/planning/mhs-project-icon.png",
    summary: "몬스터 손님을 맞아 미용과 전투를 진행하고, 하루의 영업을 마무리하는 게임입니다.",
    tags: ["PC", "Unity 6", "학교 팀 프로젝트"], heroImage: "",
    screenshots: [
      { src: "/planning/monster-build-salon.png", alt: "몬스터 손님과 미용사가 있는 미용실 전경 — 몬스터 헤어 살롱 실제 빌드 플레이 화면" },
      { src: "/planning/monster-build-battle.png", alt: "샌즈와 야차를 진행하는 전투 장면 — 몬스터 헤어 살롱 실제 빌드 플레이 화면" },
    ],
    info: [
      { label: "담당 역할", value: "게임 루프·미용·전투 시스템 기획 · 통합 시뮬레이터 제작" },
      { label: "장르", value: "미용 · 전투" },
      { label: "플랫폼", value: "PC" },
      { label: "엔진", value: "Unity 6 (6000.5.4f1)" },
      { label: "개발 형태", value: "학교 팀 프로젝트" },
      { label: "상태", value: "개발 중" },
      { label: "참여 기간", value: "2026.09 ~ 현재 진행 중" },
    ],
    body: "monster-hair-salon.md", relatedWorkIds: ["monster-hair-system"],
  },
  {
    id: "project-luna", title: "프로젝트 루나", initials: "LUNA",
    icon: "/planning/luna-project-icon.png",
    summary: "칵테일을 직접 제조하고 손님을 응대하며, 사이버펑크 세계의 바를 운영하는 게임입니다.",
    tags: ["PC", "Unity 6", "학교 팀 프로젝트", "Steam 등록", "2026 비버롹스 전시 선정"],
    screenshots: [
      { src: "/planning/luna-steam-page.png", alt: "Project L.U.N.A Steam 상점 등록 화면" },
      { src: "/planning/luna-project-keyvisual.png", alt: "Project L.U.N.A 대표 이미지 — 바에서 손님을 맞이하는 루나" },
    ],
    info: [
      { label: "담당 역할", value: "시스템·콘텐츠 기획 · UI/UX 설계 · 레벨 디자인" },
      { label: "장르", value: "칵테일 제조 · 바 운영" },
      { label: "플랫폼", value: "PC" },
      { label: "엔진", value: "Unity 6 (6000.3.14f1)" },
      { label: "개발 형태", value: "학교 팀 프로젝트" },
      { label: "상태", value: "개발 중" },
      { label: "참여 기간", value: "2026.08 ~ 현재 진행 중" },
      { label: "팀 성과", value: "Steam 상점 등록 · 2026 비버롹스 전시 선정" },
    ],
    body: "project-luna.md",
  },
  {
    id: "se-grocery", title: "SE:Grocery", initials: "SE",
    icon: "/planning/se-project-icon.png",
    summary: "마트를 무대로 전투와 이동을 이어가는 FPS. 레벨 디자인을 중심으로 콘텐츠·시스템 기획, 보스 컷씬과 사운드 디자인을 담당했습니다.",
    tags: ["PC", "Unreal Engine 5.7.4", "FPS", "레벨 디자인"],
    screenshots: [
      { src: "/planning/se-wh01_4.webp", alt: "SE:Grocery 최종 반영 공간 — 선반과 플랫폼으로 구성된 시작 구역. 그래픽과 구현은 팀 공동 결과물" },
      { src: "/planning/se-wh03_13.webp", alt: "SE:Grocery 최종 반영 공간 — 여러 높이의 플랫폼과 중앙 연결부. 그래픽과 구현은 팀 공동 결과물" },
    ],
    info: [
      { label: "담당 역할", value: "레벨 디자인 · 콘텐츠·시스템 기획 · 컷씬·사운드 제작" },
      { label: "장르", value: "FPS · 싱글 플레이" },
      { label: "플랫폼", value: "PC" },
      { label: "엔진", value: "Unreal Engine 5.7.4" },
      { label: "개발 형태", value: "팀 프로젝트" },
      { label: "상태", value: "시연 빌드 제작 후 개발 종료" },
      { label: "개발 기간", value: "2026.03 ~ 2026.07" },
    ],
    body: "se-grocery.md",
  },
  {
    id: "roulette-of-pebbles", title: "Roulette of Fables", initials: "ROF",
    icon: "/planning/rof-project-icon.webp",
    summary: "슬롯머신으로 얻은 코인을 회복·공격·참에 사용하며 딜러와 대결하는 게임. 게임 루프와 콘텐츠·콘셉트·튜토리얼 내러티브, 사운드 디자인을 담당했습니다.",
    tags: ["PC", "Unity 6", "학교 팀 프로젝트", "네오위즈 아트홀 전시"],
    screenshots: [
      { src: "/planning/rof-hero-candler.webp", alt: "Roulette of Fables 캔들러와 마스코트가 등장하는 장면 — 팀 공동 결과물" },
      { src: "/planning/rof-hero-cheshire.webp", alt: "Roulette of Fables 채셔와의 대결 전경 — 팀 공동 결과물" },
    ],
    info: [
      { label: "담당 역할", value: "게임 루프·콘텐츠 기획 · 콘셉트·내러티브 설계 · 사운드 디자인" },
      { label: "장르", value: "슬롯머신 · 딜러 대결" },
      { label: "플랫폼", value: "PC" },
      { label: "엔진", value: "Unity 6 (6000.0.42f1)" },
      { label: "개발 형태", value: "학교 팀 프로젝트" },
      { label: "상태", value: "개발 완료" },
      { label: "개발 기간", value: "2025.09 ~ 2025.11" },
      { label: "팀 성과", value: "네오위즈 1층 아트홀 전시" },
    ],
    body: "roulette-of-pebbles.md",
  },
];

export const projectHref = (id: string) => `#/projects/${encodeURIComponent(id)}`;
