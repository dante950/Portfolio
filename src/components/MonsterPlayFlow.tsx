import { useId, useState } from "react";
import "./MonsterPlayFlow.css";

function Arrow({ label }: { label?: string }) {
  return <div className="play-flow-arrow">{label && <span>{label}</span>}<span aria-hidden="true">↓</span></div>;
}

export default function MonsterPlayFlow() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return <div className="play-flow-disclosure">
    <button className="play-flow-toggle" type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)}>
      <span>{open ? "흐름도 접기" : "흐름도 보기"}</span>
      <svg className="play-flow-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
    <div id={panelId} className={`play-flow-reveal${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
      <div className="play-flow-clip"><div className="play-flow-spacing">
    <figure className="play-flow" aria-label="몬스터 헤어 살롱 핵심 플레이와 엔딩 분기">
    <figcaption>손님을 맞이하는 하루에서, 3스타 미용실의 마지막 손님까지.</figcaption>
    <div className="play-flow-opening">
      <div className="play-flow-node"><span className="play-flow-step">01</span><h3>손님 응대</h3><p>대화로 손님의 요청과 상황 확인</p></div>
      <span className="play-flow-horizontal" aria-hidden="true">→</span>
      <div className="play-flow-node"><span className="play-flow-step">02</span><h3>미용</h3><p>요구에 맞춰 형태·색·무늬·장식 적용</p></div>
    </div>
    <Arrow label="미용 결과에 따라" />
    <div className="play-flow-branches">
      <div className="play-flow-node play-flow-positive"><span className="play-flow-condition">미용 만족</span><h3>야차 없이 영업 진행</h3><p>손님의 미용 결과를 다음 흐름으로 연결</p></div>
      <div className="play-flow-node play-flow-battle"><span className="play-flow-condition">미용 불만족</span><h3><span className="play-flow-step">03</span> 전투 — 야차</h3><p>지불을 거부한 손님이 야차를 신청<br />몬스터의 공격 패턴에 대응</p></div>
    </div>
    <div className="play-flow-merge" aria-hidden="true"><span>↓</span><span>↓</span></div>
    <div className="play-flow-node"><span className="play-flow-step">04</span><h3>하루 마감</h3><p>몬스타그램 후기 · 팔로워 · 별 획득 확인</p></div>
    <div className="play-flow-repeat"><span aria-hidden="true">↺</span> 다음 영업일에도 손님 응대부터 반복하며 3스타를 목표로 운영합니다.</div>
    <Arrow label="5일차 · 마왕 방문 시점" />
    <div className="play-flow-node play-flow-goal"><span className="play-flow-step">05</span><h3>3스타 달성 여부</h3><p>마왕이 방문하기까지 미용실을 3스타로 만들었나요?</p></div>
    <div className="play-flow-merge" aria-hidden="true"><span>↓</span><span>↓</span></div>
    <div className="play-flow-final-branches">
      <div className="play-flow-node play-flow-gameover"><span className="play-flow-condition">3스타 미달</span><h3>GAME OVER</h3><p>마왕의 미용을 진행할 수 없습니다.</p></div>
      <div className="play-flow-final-path">
        <div className="play-flow-node"><span className="play-flow-condition">3스타 달성</span><h3><span className="play-flow-step">06</span> 마왕의 방문</h3><p>마지막 손님, 마왕의 미용 진행</p></div>
        <Arrow label="마왕의 미용 결과" />
        <div className="play-flow-branches play-flow-ending-options">
          <div className="play-flow-node play-flow-positive"><span className="play-flow-condition">미용 만족</span><h3>미용으로 만족시키기</h3><p>엔딩 조건 달성</p></div>
          <div className="play-flow-node play-flow-battle"><span className="play-flow-condition">미용 불만족</span><h3>마왕과 야차</h3><p>야차에서 승리하면<br />엔딩 조건 달성</p></div>
        </div>
        <div className="play-flow-merge" aria-hidden="true"><span>↓</span><span>↓</span></div>
        <div className="play-flow-node play-flow-ending"><h3>ENDING</h3><p>미용으로 만족시키거나, 야차에서 승리하거나.</p></div>
      </div>
    </div>
    </figure>
      </div></div>
    </div>
  </div>;
}
