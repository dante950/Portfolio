import { works } from "./works";

// 첫 화면의 문구를 바꾸세요. 배열 항목 하나가 한 줄입니다.
// accent: true인 줄에는 기존 파란 강조색이 적용됩니다.
export const introduction = {
  eyebrow: "PORTFOLIO / 2026",
  titleLines: [
    { text: "Game Content", accent: false },
    { text: "Designer", accent: true },
  ],
  role: "시스템 · 콘텐츠 기획자",
  descriptionLines: [
    "기존 콘텐츠와 시스템의 약점을 찾아 재구성하고,",
    "팀이 구현할 수 있는 규칙과 플레이로 구체화합니다.",
    "시뮬레이터로 방향을 제안하고, 함께 검증하며 완성도를 높입니다.",
  ],
  worksLinkText: "EXPLORE WORKS ↗",
  scrollHint: "SCROLL TO DISCOVER ↓",
};

export const projectSection = {
  eyebrow: "02 / WORKS",
  title: "Selected Works",
  allWorksText: "VIEW WORK ARCHIVE ↗",
};

// HOME에 보여 줄 작품입니다. workId를 works.ts의 id와 맞추세요.
export const selectedWorks = [
  { workId: "semester-event" },
  { workId: "monster-hair-system" },
  { workId: "monster-battle-system" },
  { workId: "stormveil" },
];
export const projects = selectedWorks.flatMap(({ workId }) => {
  const work = works.find((item) => item.id === workId);
  if (!work) return [];
  return [
    {
      id: work.id,
      thumbnail: work.thumbnail,
      game: work.project,
      title: work.title,
      types: work.types,
    },
  ];
});

// 본인 이름과 이메일을 입력하세요. 이메일을 비워 두면 연락 버튼이 비활성화됩니다.
export const contact = { name: "고현정", email: "gamedesignerkoh@gmail.com" };
