// 활동과 수상·선발 기록의 원문. 날짜와 내용은 이 기록을 기준으로 작성했습니다.
export const activitySourceUrl =
  "https://app.notion.com/p/cc6648bf6778838598ae81c56302a021";

export interface MentoringActivity {
  id: string;
  program: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tools: string[];
  role: string;
}

export const mentoringActivities: MentoringActivity[] = [
  {
    id: "hope-creator-5",
    program: "호프크리에이터 5기",
    title: "Unity 게임 창작 멘토링",
    organization: "스마일게이트 희망스튜디오",
    period: "2024.08 — 2025.02",
    description:
      "아동·청소년의 Unity 기반 게임 창작을 지도하고, 작품 완성과 전시를 지원했습니다.",
    tools: ["Unity"],
    role: "아동·청소년 게임 창작 멘토",
  },
  {
    id: "palette-leader-group",
    program: "팔레트 리더그룹",
    title: "Scratch 게임 창작 멘토링",
    organization: "스마일게이트 희망스튜디오",
    period: "2025.04 — 2026.08",
    description:
      "Scratch 기반 게임 창작을 지도하고, 작품 완성과 전시를 지원했습니다.",
    tools: ["Scratch"],
    role: "창작 멘토",
  },
];

export interface Recognition {
  id: string;
  date: string;
  title: string;
  organization: string;
  kind: "수상" | "선발";
}

export const recognitions: Recognition[] = [
  {
    id: "professional-technical-scholarship-2026",
    date: "2026.06",
    title: "전문 기술 인재 장학생",
    organization: "한국장학재단",
    kind: "선발",
  },
  {
    id: "creative-culture-scholarship-2025",
    date: "2025.12",
    title: "창의 문화 장학생",
    organization: "청강문화산업대학교",
    kind: "선발",
  },
  {
    id: "future-tomorrow-award-2024",
    date: "2024.11",
    title: "미래내일 일경험 사업 우수상",
    organization: "고용노동부",
    kind: "수상",
  },
  {
    id: "creative-talent-scholarship-2024",
    date: "2024.06",
    title: "창의 인재 장학생",
    organization: "청강문화산업대학교",
    kind: "선발",
  },
  {
    id: "academic-excellence-2023",
    date: "2023.08",
    title: "성적 우수자(수석)",
    organization: "청강문화산업대학교",
    kind: "선발",
  },
];

// 관련 활동을 소개하는 외부 글입니다. 개별 프로그램과의 연결은 단정하지 않습니다.
export const relatedStories: { label: string; url: string }[] = [
  {
    label: "프로젝트 램",
    url: "https://www.heemangstudio.org/community/storyView/490",
  },
  {
    label: "팔레트 리더그룹",
    url: "https://www.heemangstudio.org/community/storyView/462",
  },
  {
    label: "2025 팔레트 페스타",
    url: "https://www.heemangstudio.org/community/storyView/409",
  },
  {
    label: "함청 팔레트 오픈 스튜디오",
    url: "https://www.heemangstudio.org/community/storyView/403",
  },
  {
    label: "함청 활동 이야기",
    url: "https://www.heemangstudio.org/community/storyView/358",
  },
  {
    label: "함청 샌드위치 게임",
    url: "https://www.heemangstudio.org/community/storyView/368",
  },
];
