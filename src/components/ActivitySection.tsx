import { useRef, useState, type KeyboardEvent } from "react";
import { communityArticles, researchReference } from "../data/activities";
import { mentoringActivities, recognitions, relatedStories } from "../data/achievements";
import { assetUrl } from "../utils/assetUrl";
import ZoomableImage from "./ZoomableImage";
import "./ActivitySection.css";

const categories = [
  { id: "research", number: "01", label: "RESEARCH", title: "게임 분석·해석", description: "로스트아크 엘라어 해석과\n세계관·오브젝트 분석", detail: "직접 쓴 글 3편 · 해독 기여 1편" },
  { id: "mentoring", number: "02", label: "MENTORING", title: "봉사·멘토링", description: "스마일게이트 희망스튜디오\n아동·청소년 게임 창작 멘토링", detail: "호프크리에이터 · 팔레트 리더그룹" },
  { id: "recognition", number: "03", label: "RECOGNITION", title: "수상·선발", description: "미래내일 일경험 사업 우수상\n전문 기술 인재 장학생 등 선발", detail: "수상·선발 기록 5건" },
] as const;
type CategoryId = (typeof categories)[number]["id"];

function ArticleMetrics({ views, recommendations }: { views: number; recommendations: number }) {
  return <div className="activity-article-metrics">
    <span>조회 <strong>{views.toLocaleString("ko-KR")}</strong></span>
    <span>추천 <strong>{recommendations.toLocaleString("ko-KR")}</strong></span>
  </div>;
}

function ResearchPanel() {
  const [featured, ...others] = communityArticles;
  return <>
    <div className="activity-panel-intro">
      <p className="activity-kicker">LOST ARK / COMMUNITY</p>
      <h3>로스트아크 엘라어 해석</h3>
      <p className="activity-panel-description">인벤 닉네임 <strong>마스터로보</strong> · 새로운 문자를 발견하고, 자음·모음 해독에 기여했습니다.</p>
    </div>
    <a className="activity-feature" href={featured.url} target="_blank" rel="noopener noreferrer" aria-label={`${featured.title} — 인벤 원문 새 창으로 열기`}>
      <div className="activity-feature-image"><img src={assetUrl(featured.image)} alt={featured.imageAlt} loading="lazy" /><span>FEATURED RESEARCH</span></div>
      <div className="activity-feature-body">
        <div className="activity-article-top"><span className="activity-role">직접 작성한 글</span><span>{featured.date}</span></div>
        <p className="activity-article-category">{featured.category}</p>
        <h4>{featured.title}</h4><p className="activity-article-description">{featured.description}</p>
        <ArticleMetrics views={featured.views} recommendations={featured.recommendations} />
        <span className="activity-open-link">분석 원문 읽기 <span aria-hidden="true">↗</span></span>
      </div>
    </a>
    <aside className="activity-reference" aria-labelledby="activity-reference-title">
      <figure className="activity-reference-figure">
        <img src={assetUrl(researchReference.image)} alt={researchReference.imageAlt} loading="lazy" width="1013" height="627" />
        <figcaption>{researchReference.caption}</figcaption>
      </figure>
      <div className="activity-reference-copy">
        <p className="activity-kicker">RESEARCH IMPACT</p>
        <h4 id="activity-reference-title">{researchReference.title}</h4>
        <p className="activity-reference-description">{researchReference.description}</p>
        <div className="activity-reference-links">
          <a href={researchReference.documentUrl} target="_blank" rel="noopener noreferrer">나무위키 문서 보기 <span aria-hidden="true">↗</span></a>
          <a href={researchReference.originalUrl} target="_blank" rel="noopener noreferrer">직접 작성한 해석 원문 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </aside>
    <div className="activity-article-list">
      {others.map((article) => <a className="activity-article-row" key={article.id} href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`${article.title} — 인벤 원문 새 창으로 열기`}>
        <div className="activity-row-image"><img src={assetUrl(article.image)} alt={article.imageAlt} loading="lazy" /></div>
        <div className="activity-row-copy">
          <div className="activity-row-labels"><span className={`activity-role${article.role === "해독 기여" ? " is-contribution" : ""}`}>{article.role === "해독 기여" ? "해독 기여가 인용된 글" : "직접 작성한 글"}</span><span>{article.category}</span></div>
          <h4>{article.title}</h4><p>{article.description}</p>
          {article.creditNote && <p className="activity-credit-note">{article.creditNote}</p>}
          <ArticleMetrics views={article.views} recommendations={article.recommendations} />
        </div>
        <span className="activity-row-arrow" aria-hidden="true">↗</span>
      </a>)}
    </div>
  </>;
}

function MentoringPanel() {
  return <>
    <div className="activity-panel-intro">
      <p className="activity-kicker">MENTORING</p>
      <h3>아동·청소년 게임 창작 멘토링</h3>
      <p className="activity-panel-description">스마일게이트 희망스튜디오 · Unity와 Scratch를 활용한 창작 지도 및 작품 전시 지원</p>
    </div>
    <div className="activity-mentoring-grid">
      {mentoringActivities.map((item, index) => <article className="activity-mentoring-card" key={item.id}>
        <div className="activity-mentoring-top"><span>0{index + 1}</span><span>{item.period}</span></div>
        <p className="activity-kicker">{item.organization}</p><h4>{item.program}</h4>
        <div className="activity-mentor-photo"><ZoomableImage src={assetUrl(item.image)} alt={item.imageAlt} /></div>
        <p className="activity-mentor-role">{item.role}</p><p className="activity-mentor-description">{item.description}</p>
        <div className="activity-mentor-tags">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}<span>게임 창작</span></div>
      </article>)}
    </div>
    <div className="activity-related-stories"><div><p className="activity-kicker">RELATED STORIES</p><h4>활동을 담은 이야기</h4></div>
      <div className="activity-story-links">{relatedStories.map((story) => <a key={story.url} href={story.url} target="_blank" rel="noopener noreferrer">{story.label}<span aria-hidden="true">↗</span></a>)}</div>
    </div>
  </>;
}

function RecognitionPanel() {
  return <>
    <div className="activity-panel-intro">
      <p className="activity-kicker">AWARDS & SELECTIONS</p>
      <h3>수상·장학생 선발</h3>
    </div>
    <ol className="activity-recognition-list">
      {recognitions.map((item) => <li key={item.id}><time>{item.date}</time><div><h4>{item.title}</h4><p>{item.organization}</p></div><span className="activity-recognition-kind">{item.kind}</span></li>)}
    </ol>
  </>;
}

export default function ActivitySection() {
  const [selected, setSelected] = useState<CategoryId | null>("research");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft") next = (index + categories.length - 1) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    tabRefs.current[next]?.focus({ preventScroll: true });
  }
  return <section className="activity-section" id="activities" aria-label="게임 분석·해석, 봉사·멘토링, 수상·선발">
    <div className="shell">
      <div className="activity-tabs" role="group" aria-label="활동 분류">
        {categories.map((category, index) => <button key={category.id} ref={(element) => { tabRefs.current[index] = element; }} type="button" className={`activity-tab${selected === category.id ? " is-active" : ""}`} id={`activity-tab-${category.id}`} aria-expanded={selected === category.id} aria-controls={`activity-panel-${category.id}`} onClick={() => setSelected((current) => current === category.id ? null : category.id)} onKeyDown={(event) => handleKey(event, index)}>
          <span className="activity-tab-top"><span>{category.number} / {category.label}</span></span>
          <span className="activity-tab-title">{category.title}</span><span className="activity-tab-description">{category.description}</span>
          <span className="activity-tab-bottom"><span>{category.detail}</span><span aria-hidden="true">{selected === category.id ? "−" : "+"}</span></span>
        </button>)}
      </div>
      {categories.map((category) => <div key={category.id} className={`activity-panel-reveal${selected === category.id ? " is-open" : ""}`} role="region" id={`activity-panel-${category.id}`} aria-labelledby={`activity-tab-${category.id}`} aria-hidden={selected !== category.id} inert={selected !== category.id} tabIndex={selected === category.id ? 0 : -1}>
        <div className="activity-panel-clip"><div className="activity-panel">
          {category.id === "research" ? <ResearchPanel /> : category.id === "mentoring" ? <MentoringPanel /> : <RecognitionPanel />}
        </div></div>
      </div>)}
    </div>
  </section>;
}
