import { works } from "./works";

// 첫 화면의 문구를 바꾸세요. 배열 항목 하나가 한 줄입니다.
// accent: true인 줄에는 기존 파란 강조색이 적용됩니다.
export const introduction = {
  eyebrow: "PORTFOLIO / 2026",
  titleLines: [
    { text: "Creative", accent: false },
    { text: "Portfolio", accent: true },
  ],
  role: "분야 · 직무를 입력하세요",
  descriptionLines: [
    "나를 소개하는 한 문장을 입력하세요.",
    "관심 분야와 일하는 방식을 간결하게 소개해 주세요.",
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
  { workId: "kingdom-rush" },
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
export const contact = { name: "이름을 입력하세요", email: "" };
