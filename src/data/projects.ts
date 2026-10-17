// Paste the two YouTube links here when the recordings are ready.
export const monsterProjectVideos = { gameplay: "", simulator: "https://www.youtube.com/watch?v=AHj7lhXeWC8" };

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
    icon: "/planning/monster-zombie.png",
    summary: "몬스터 손님을 맞아 미용과 전투를 진행하고, 하루의 영업을 마무리하는 게임입니다.",
    tags: ["PC", "Unity 6", "학교 팀 프로젝트"], heroImage: "",
    screenshots: [
      { src: "/planning/monster-build-salon.png", alt: "몬스터 손님과 미용사가 있는 미용실 전경 — 몬스터 헤어 살롱 실제 빌드 플레이 화면" },
      { src: "/planning/monster-build-battle.png", alt: "샌즈와 야차를 진행하는 전투 장면 — 몬스터 헤어 살롱 실제 빌드 플레이 화면" },
    ],
    info: [{ label: "장르", value: "미용 · 전투" }, { label: "플랫폼", value: "PC" }, { label: "엔진", value: "Unity 6 (6000.5.4f1)" }, { label: "개발 형태", value: "학교 팀 프로젝트" }, { label: "상태", value: "개발 중" }, { label: "참여 기간", value: "2026.09 ~ 현재 진행 중" }],
    body: "monster-hair-salon.md", relatedWorkIds: ["monster-hair-system"],
  },
  ...[
    { id: "project-luna", title: "프로젝트 루나", initials: "LUNA" },
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
