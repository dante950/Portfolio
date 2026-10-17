import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./ZoomableImage.css";

export default function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [original, setOriginal] = useState(false);
  useEffect(() => {
    if (!open) return;
    const modal = dialog.current!;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modal.showModal();
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  return <>
    <button className="screenshot-trigger" type="button" aria-label={`${alt} 크게 보기`} onClick={() => { setOriginal(false); setOpen(true); }}>
      <img src={src} alt={alt} loading="lazy" />
      <span className="screenshot-hint" aria-hidden="true">화면 크게 보기 ↗</span>
    </button>
    {createPortal(<dialog className="screenshot-dialog" ref={dialog} aria-label="스크린샷 확대 보기" onClose={() => setOpen(false)} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false);
    }}>
      <div className="screenshot-toolbar">
        <p>{alt}</p>
        <button type="button" aria-pressed={original} onClick={() => setOriginal(!original)}>{original ? "화면에 맞추기" : "원본 크기"}</button>
        <button type="button" onClick={() => setOpen(false)} autoFocus>닫기 ×</button>
      </div>
      <div className={`screenshot-viewport${original ? " is-original" : ""}`} tabIndex={0} aria-label="확대 이미지. 원본 크기에서는 스크롤하여 볼 수 있습니다.">
        <img src={src} alt={alt} />
      </div>
    </dialog>, document.body)}
  </>;
}
