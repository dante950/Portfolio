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
    info: [{ label: "장르", value: "미용 · 전투" }, { label: "플랫폼", value: "PC" }, { label: "엔진", value: "Unity 6 (6000.5.4f1)" }, { label: "개발 형태", value: "학교 팀 프로젝트" }, { label: "상태", value: "개발 중" }, { label: "참여 기간", value: "2026.09 ~ 현재 진행 중" }],
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
  ...[
    { id: "se-grocery", title: "SE:Grocery", initials: "SE" },
    { id: "roulette-of-pebbles", title: "룰렛 오브 페블즈", initials: "ROP" },
  ].map((project) => ({
    ...project, summary: "프로젝트 소개와 참여 내용을 준비하고 있습니다.",
    tags: ["참여 프로젝트"], heroImage: "",
    info: [{ label: "담당 역할", value: "추후 추가" }, { label: "참여 기간", value: "추후 추가" }],
    body: `${project.id}.md`,
  })),
];

export const projectHref = (id: string) => `#/projects/${encodeURIComponent(id)}`;
