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
    title: ["맙소사 벌써 종강이라니 이벤트 기획", "킹덤러쉬 영웅 분석·신규 영웅 기획", "엘든링 스톰빌성 레벨 분석"][index],
    // Keep paths literal so the standalone HTML exporter can embed each image.
    thumbnail: study.image || ["/planning/semester-event-cover.png", "/placeholders/project-02.svg", "/planning/stormveil-work-cover.png"][index],
    types: study.id === "stormveil" ? ["공간 분석", "게임 분석"] : ["기획", "데이터 설계"],
    summary: study.description,
    details: study.id === "semester-event"
      ? [{ label: "기획 대상", value: "청강 RPG · 종강 기념 글자 수집 이벤트" }, { label: "담당 범위", value: "이벤트 흐름·보상·교환·상점·UI 기획 및 데이터 구조 설계" }, { label: "자료", value: "2024년 기획서 44쪽 · Excel 8개 시트 · JSON 8개 파일" }]
      : study.id === "kingdom-rush"
        ? [{ label: "기획 대상", value: "킹덤러쉬 · 기존 영웅 이그누스 / 신규 영웅 칸" }, { label: "담당 범위", value: "영웅 역기획·캐릭터 콘셉트 및 외형 디자인·콘셉트 이미지 작화·전투 규칙·데이터 설계" }, { label: "자료", value: "이그누스 역기획서 21쪽 · 칸 기획서 17쪽 · Excel 8개 시트" }]
        : [{ label: "분석 대상", value: "엘든링 · 스톰빌성" }, { label: "담당 범위", value: "공간 측정·도면·그레이박싱, 그래픽 문법·플레이 분석, 몬스터·아이템 데이터 정리" }, { label: "집중 플레이", value: "스톰빌성에서 70시간 이상" }, { label: "자료", value: "레벨 분석서 53쪽 · Excel 2개 시트 · 직접 제작한 도면과 플레이 기록" }],
    body: `${study.id}.md`,
  })),
  {
    id: "monster-hair-system", project: "몬스터 헤어 살롱",
    title: "몬스터 미용 시스템 기획",
    thumbnail: "/planning/grooming-doc-zombie.png", types: ["기획"],
    summary: "손님의 부탁과 자유로운 꾸미기가 공존하도록, 미용 도구·부위별 판정·합산 평가와 표정 피드백을 설계했습니다.",
    details: [{ label: "관련 프로젝트", value: "몬스터 헤어 살롱" }, { label: "담당 범위", value: "미용 단계·영역·정답 조건·만족도 기획 및 시뮬레이터 검증" }, { label: "자료", value: "시스템 기획서, 데이터 테이블" }],
    body: "monster-hair-system.md",
  },
  {
    id: "monster-battle-system", project: "몬스터 헤어 살롱",
    title: "몬스터 전투 시스템 기획",
    thumbnail: "/planning/battle-doc-opening.png", types: ["기획"],
    summary: "회피와 클릭으로 빈틈을 만들고 드래그로 공격하는 전투 흐름, 몬스터별 패턴·피격 규칙과 데이터 구조를 설계했습니다.",
    details: [{ label: "관련 프로젝트", value: "몬스터 헤어 살롱" }, { label: "담당 범위", value: "전투 흐름·공격 패턴·페이즈·피격 규칙 및 데이터 구조 설계" }, { label: "자료", value: "시스템 기획서, 작업용 데이터 테이블" }],
    body: "monster-battle-system.md",
  },
  {
    id: "cocktail-making-system", project: "칵테일 제조 시스템",
    title: "칵테일 제조 시스템 기획",
    thumbnail: "", types: ["기획"],
    summary: "칵테일 제조 시스템 기획의 작업 내용과 문서를 준비하고 있습니다.",
    body: "cocktail-making-system.md",
  },
];

// Shared order for Work Archive, the work switcher, and previous/next navigation.
export const works = ["semester-event", "monster-hair-system", "monster-battle-system", "cocktail-making-system", "kingdom-rush", "stormveil"]
  .flatMap((id) => workItems.filter((work) => work.id === id));
