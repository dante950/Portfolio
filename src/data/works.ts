import { planningStudies } from "./planning";

export const workTypes = ["기획", "데이터 설계", "공간 분석", "게임 분석"] as const;
export type WorkType = (typeof workTypes)[number];
export interface WorkItem {
  id: string;
  project: string;
  title: string;
  thumbnail: string;
  types: WorkType[];
  summary?: string;
  details?: { label: string; value: string }[];
  heroImage?: string;
  heroImageAlt?: string;
  body?: string;
}
export const worksPage = {
  label: "주요 작업 / WORKS",
  title: "Work Archive",
  description: "직접 작성한 기획서와 분석서, 데이터 설계를 모았습니다.",
  documentTitle: "Work Archive | 포트폴리오",
  filterLabel: "작업 유형",
  emptyMessage: "해당 유형의 작업물이 아직 없습니다.",
};

const workItems: WorkItem[] = [
  ...planningStudies.map((study, index): WorkItem => ({
    id: study.id,
    project: study.title,
    title: ["맙소사 벌써 종강이라니 이벤트 기획", "킹덤러쉬 영웅 분석·신규 영웅 기획", "엘든링 스톰빌성 공간 분석"][index],
    // Keep paths literal so the standalone HTML exporter can embed each image.
    thumbnail: study.image || ["/placeholders/project-01.svg", "/placeholders/project-02.svg", "/placeholders/project-03.svg"][index],
    types: study.id === "stormveil" ? ["공간 분석"] : ["기획", "데이터 설계"],
    summary: study.description,
    details: [{ label: "주요 자료", value: study.tags.join(" · ") }],
    body: `${study.id}.md`,
  })),
  {
    id: "monster-hair-system", project: "몬스터 헤어 살롱",
    title: "몬스터 미용 시스템 기획",
    thumbnail: "/placeholders/project-04.svg", types: ["기획"],
    summary: "손님의 부탁과 자유로운 꾸미기가 공존하도록, 미용 도구·부위별 판정·합산 평가와 표정 피드백을 설계했습니다.",
    details: [{ label: "관련 프로젝트", value: "몬스터 헤어 살롱" }, { label: "담당 범위", value: "미용 단계·영역·정답 조건·만족도 기획 및 시뮬레이터 검증" }, { label: "자료", value: "시스템 기획서, 데이터 테이블" }],
    body: "monster-hair-system.md",
  },
  {
    id: "monster-battle-system", project: "몬스터 헤어 살롱",
    title: "몬스터 전투 시스템 기획",
    thumbnail: "", types: ["기획"],
    summary: "몬스터 헤어 살롱의 야차 전투 규칙과 공격 패턴을 정리한 시스템 기획입니다.",
    details: [{ label: "관련 프로젝트", value: "몬스터 헤어 살롱" }, { label: "자료", value: "시스템 기획서" }],
    body: "monster-battle-system.md",
  },
  {
    id: "cocktail-making-system", project: "칵테일 제조 시스템",
    title: "칵테일 제조 시스템 기획",
    thumbnail: "", types: ["기획"],
    summary: "칵테일 제조 시스템 기획의 작업 내용과 문서를 준비하고 있습니다.",
    body: "cocktail-making-system.md",
  },
  {
    id: "bar-oasis-tutorial", project: "Bar Oasis",
    title: "Bar Oasis 튜토리얼 분석",
    thumbnail: "", types: ["게임 분석"],
    summary: "Bar Oasis 튜토리얼 분석의 작업 내용과 문서를 준비하고 있습니다.",
    body: "bar-oasis-tutorial.md",
  },
];

// Shared order for Work Archive, the work switcher, and previous/next navigation.
export const works = ["semester-event", "monster-hair-system", "monster-battle-system", "cocktail-making-system", "kingdom-rush", "stormveil", "bar-oasis-tutorial"]
  .flatMap((id) => workItems.filter((work) => work.id === id));
