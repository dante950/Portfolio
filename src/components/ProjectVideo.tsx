import { youtubeEmbedUrl } from "../utils/youtube";
import { assetUrl } from "../utils/assetUrl";
import "./ProjectVideo.css";

export default function ProjectVideo({ title, youtubeUrl = "", videoSrc = "", posterSrc }: {
  title: string;
  youtubeUrl?: string;
  videoSrc?: string;
  posterSrc?: string;
}) {
  const embedUrl = youtubeEmbedUrl(youtubeUrl);
  const filePreview = window.location.protocol === "file:";
  const watchUrl = embedUrl ? `https://www.youtube.com/watch?v=${embedUrl.split("/embed/")[1].split("?")[0]}` : undefined;
  return <figure className="project-video" aria-label={title}>
    <div className="project-video-frame">
      {embedUrl && filePreview ? <div className="project-video-placeholder project-video-file-notice">
        <strong>{title}</strong>
        <p>영상은 웹 미리보기에서 재생할 수 있어요.</p>
        <span>‘미리보기.cmd’를 실행한 뒤 아래 버튼을 눌러주세요.</span>
        <a className="project-video-preview-link" href={`http://127.0.0.1:5173/${window.location.hash}`} target="_blank" rel="noopener noreferrer">웹 미리보기 열기 ↗</a>
      </div> : embedUrl ? <iframe src={embedUrl} title={title} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
        : videoSrc ? <video src={assetUrl(videoSrc)} poster={posterSrc ? assetUrl(posterSrc) : undefined} controls playsInline preload="metadata" aria-label={title} />
        : <div className="project-video-placeholder">
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" aria-hidden="true"><circle cx="27" cy="27" r="25" stroke="currentColor" /><path d="m22 17 15 10-15 10Z" stroke="currentColor" strokeLinejoin="round" /></svg>
          <strong>{title}</strong><span>영상 준비 중</span>
        </div>}
    </div>
    {watchUrl && <figcaption><a href={watchUrl} target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></figcaption>}
  </figure>;
}
