// 질문과 답변을 본인의 이야기로 바꾸세요. 배열 순서가 표시 순서입니다.
export const qaPage = {
  label: "Q&A / NOTES",
  title: "Questions & Answers",
  description: "나의 경험과 일하는 방식을 소개하는 공간입니다.",
  documentTitle: "Q&A | 포트폴리오",
  backToHome: "BACK TO HOME ↑",
  emptyMessage: "질문과 답변을 준비하고 있습니다.",
};

export interface QAItem {
  id: string;
  question: string;
  // 빈 줄, - 목록, **강조**, [링크](https://...) 형식의 Markdown을 지원합니다.
  answer: string;
}

// 아래 답변은 작성 안내입니다. 실제 경험으로 교체하세요.
export const qaItems: QAItem[] = [
  {
    id: "introduction",
    question: "어떤 일을 하는 사람인가요?",
    answer: `이름, 관심 분야, 현재 하고 있는 일을 소개해 주세요.

**나를 표현하는 한 문장**과 그 이유를 덧붙이면 좋습니다.`,
  },
  {
    id: "strengths",
    question: "가장 자신 있는 강점은 무엇인가요?",
    answer: `자신의 강점과 그 강점을 발휘한 구체적인 경험을 입력하세요.

어떤 상황에서 무엇을 했고, 그 결과가 어땠는지 연결해 주세요.`,
  },
  {
    id: "process",
    question: "프로젝트를 어떤 방식으로 진행하나요?",
    answer: `문제를 파악하고 해결책을 만드는 과정을 본인의 방식으로 설명해 주세요.

- 시작할 때 확인하는 것
- 작업하면서 중요하게 보는 기준
- 결과를 검토하고 개선하는 방법`,
  },
  {
    id: "collaboration",
    question: "함께 일할 때 중요하게 생각하는 것은 무엇인가요?",
    answer: `소통, 역할 분담, 피드백 등 협업에서 중요하게 생각하는 점을 입력하세요.

실제 경험을 한 가지 더하면 본인의 일하는 방식이 더 잘 전달됩니다.`,
  },
];
