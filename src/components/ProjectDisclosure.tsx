import type { ReactNode } from "react";
import "./ProjectDisclosure.css";

export default function ProjectDisclosure({ title, children }: { title: string; children: ReactNode }) {
  return <details className="project-disclosure">
    <summary>{title}</summary>
    <div className="project-disclosure-content">{children}</div>
  </details>;
}
