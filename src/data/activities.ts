export type CommunityArticleRole = "직접 작성" | "해독 기여";

export interface CommunityArticle {
  id: string;
  title: string;
  originalTitle: string;
  category: string;
  role: CommunityArticleRole;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  views: number;
  recommendations: number;
  featured?: boolean;
  creditNote?: string;
}

// 조회·추천은 사용자가 제공한 활동 기록의 수치입니다.
// 직접 작성한 글과 다른 작성자의 글에 인용된 해독 기여를 구분합니다.
export const communityArticles: CommunityArticle[] = [
  {
    id: "elar-discovery",
    title: "엘라어의 새로운 문자를 발견하다",
    originalTitle: "스포) 신규 엘라 언어 발견",
    category: "문자 해독",
    role: "직접 작성",
    date: "2022-05-03",
    description:
      "아리안오브의 책에서 새로운 문자를 발견하고, 자음·모음 배열 규칙을 분석해 엘라어 해독표의 보완을 제안했습니다.",
    image: "/activities/elar-discovery.jpg",
    imageAlt: "새로운 엘라 문자를 발견한 아리안오브의 책",
    url: "https://www.inven.co.kr/board/lostark/4811/4755321",
    views: 62631,
    recommendations: 145,
    featured: true,
  },
  {
    id: "elar-credit",
    title: "엘라어 해독에 남긴 기여",
    originalTitle: "스포) 엘라 해석법 알아옴 (5/19 update)",
    category: "해독 기여 기록",
    role: "해독 기여",
    date: "2022-04-29",
    description:
      "ㅛ·대문자 ㅑ 해독 제보가 반영되고, 신규 문자 분석 글이 참고 자료로 연결된 정리글입니다.",
    image: "/activities/elar-credit.png",
    imageAlt: "한글 자음·모음과 엘라 문자를 비교한 해독표",
    url: "https://www.inven.co.kr/board/lostark/4811/4730474",
    views: 187467,
    recommendations: 2002,
    creditNote: "원문 작성: 밥따로물따로 · 본문에 마스터로보의 제보와 분석 글 인용",
  },
  {
    id: "lore-analysis",
    title: "루페온과 큐브를 다시 읽다",
    originalTitle: "스포) 루페온이 흑막이라고 생각하는 사람들 들어와보셈",
    category: "스토리 해석",
    role: "직접 작성",
    date: "2022-05-18",
    description:
      "큐브의 설명, 문양과 인물의 대사를 연결해 루페온·카마인·할족의 관계를 해석하고, 세계관에 대한 가설을 정리했습니다.",
    image: "/activities/lore-analysis.png",
    imageAlt: "큐브 문양과 라우리엘·카마인·카단의 관계를 연결한 분석 도식",
    url: "https://www.inven.co.kr/board/lostark/4811/4858240",
    views: 69535,
    recommendations: 335,
  },
  {
    id: "stone-analysis",
    title: "석판에 남은 할족의 흔적",
    originalTitle: "보스러쉬 할 관련 석판 떡밥.jpg",
    category: "오브젝트 분석",
    role: "직접 작성",
    date: "2022-06-19",
    description:
      "보스러쉬 석판의 군단·문양·제단을 관찰하고, 컷신과 지역의 단서를 비교해 할족과의 연관성을 탐구했습니다.",
    image: "/activities/stone-analysis.jpg",
    imageAlt: "석판과 문양을 관찰한 로스트아크 보스러쉬의 돌계단과 입구",
    url: "https://www.inven.co.kr/board/lostark/4811/5054462",
    views: 40508,
    recommendations: 284,
  },
];

export const metricsNote =
  "조회·추천은 제공된 기록 기준이며, 기여 글의 수치는 해당 원문 전체의 반응입니다.";

// 제공된 나무위키 캡처와 인벤 자모 대응표를 대조한 자료 반영 사례입니다.
// 신규 문자 해독·보완 기여를 소개하며, 기존 표 전체의 단독 제작을 뜻하지 않습니다.
export const researchReference = {
  title: "나무위키로 이어진 엘라어 해석",
  description:
    "자음·모음의 배열 규칙을 분석해 ㅛ·대문자 ㅑ 해독을 제안했습니다. 이 해석을 반영한 자모 대응표는 나무위키 「엘라어」 문서의 ‘특징’ 항목에도 수록되었습니다.",
  image: "/activities/elar-namuwiki.png",
  imageAlt: "나무위키 엘라어 문서의 특징 항목에 실린 한글·엘라어 자모 대응표",
  caption: "나무위키 「엘라어」 · 3. 특징",
  documentUrl: "https://namu.wiki/w/엘라어",
  originalUrl: "https://www.inven.co.kr/board/lostark/4811/4755321",
};
