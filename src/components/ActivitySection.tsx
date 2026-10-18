import { useRef, useState, type KeyboardEvent } from "react";
import { communityArticles, researchReference } from "../data/activities";
import { mentoringActivities, recognitions, relatedStories } from "../data/achievements";
import { assetUrl } from "../utils/assetUrl";
import ZoomableImage from "./ZoomableImage";
import "./ActivitySection.css";

const categories = [
  { id: "research", number: "01", label: "RESEARCH", title: "게임 분석·해석", description: "흩어진 단서에서 의미를 발견하고,\n플레이어들과 해석을 나눕니다.", detail: "직접 쓴 글 3편 · 해독 기여 1편" },
  { id: "mentoring", number: "02", label: "MENTORING", title: "봉사·멘토링", description: "아이디어가 하나의 게임이 되도록,\n아동·청소년의 창작을 함께합니다.", detail: "게임 창작 멘토링 · 2개 활동" },
  { id: "recognition", number: "03", label: "RECOGNITION", title: "수상·선발", description: "꾸준한 배움과 현장의 경험이\n수상과 선발로 이어진 기록입니다.", detail: "우수상 · 장학생 선발" },
] as const;
type CategoryId = (typeof categories)[number]["id"];

function CategoryIcon({ type }: { type: CategoryId }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    {type === "research" ? <>
      <circle cx="21" cy="21" r="12" /><path d="m30 30 10 10M16 21h10M21 16v10" />
      <path d="M6 5h5M5 6v5M36 6h6v6" opacity=".45" />
    </> : type === "mentoring" ? <>
      <circle cx="15" cy="15" r="5" /><circle cx="33" cy="15" r="5" />
      <path d="M5 35v-5a10 10 0 0 1 15-8M43 35v-5a10 10 0 0 0-15-8M16 30l8 8 8-8M24 38V23" />
      <path d="M6 41h36" opacity=".45" />
    </> : <>
      <circle cx="24" cy="20" r="12" /><path d="m24 12 2.5 5.2 5.7.8-4.1 4 .9 5.7-5-2.7-5 2.7.9-5.7-4.1-4 5.7-.8Z" />
      <path d="m16 29-3 13 11-5 11 5-3-13" />
    </>}
  </svg>;
}

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
      <div><p className="activity-kicker">LOST ARK / COMMUNITY</p><h3>플레이 너머의 이야기를 읽다.</h3></div>
      <p>문자의 규칙, 세계관, 오브젝트를 관찰하고 연결한 기록.<br />커뮤니티 닉네임 <strong>마스터로보</strong>로 활동했습니다.</p>
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
      <div><p className="activity-kicker">CREATE TOGETHER</p><h3>함께 만드는 첫 번째 게임.</h3></div>
      <p>아동·청소년이 자신의 아이디어를 게임으로 완성하고,<br />다른 사람에게 선보이는 과정에 함께했습니다.</p>
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
      <div><p className="activity-kicker">AWARDS & SELECTIONS</p><h3>배움과 경험이 남긴 성과.</h3></div>
      <p>학업과 일경험에서 받은 수상 및 장학생 선발 기록입니다.</p>
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
  return <section className="activity-section" id="activities" aria-labelledby="activity-heading">
    <div className="shell">
      <div className="activity-section-heading"><div><p className="activity-kicker">BEYOND THE PROJECTS</p><h2 id="activity-heading">관심이 활동이 되고,<br />경험이 쌓이는 곳.</h2></div><p>게임을 깊이 읽고, 함께 만들며, 꾸준히 성장해 온 기록.<br /><span>카드를 누르면 펼쳐지고, 한 번 더 누르면 접힙니다.</span></p></div>
      <div className="activity-tabs" role="group" aria-label="활동 분류">
        {categories.map((category, index) => <button key={category.id} ref={(element) => { tabRefs.current[index] = element; }} type="button" className={`activity-tab${selected === category.id ? " is-active" : ""}`} id={`activity-tab-${category.id}`} aria-expanded={selected === category.id} aria-controls={`activity-panel-${category.id}`} onClick={() => setSelected((current) => current === category.id ? null : category.id)} onKeyDown={(event) => handleKey(event, index)}>
          <span className="activity-tab-top"><span>{category.number} / {category.label}</span><CategoryIcon type={category.id} /></span>
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
