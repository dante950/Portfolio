// Accept pasted watch/share/Shorts/live links, but embed only a validated video ID.
export function youtubeEmbedUrl(source: string): string | undefined {
  try {
    const url = new URL(source.trim());
    if (!["https:", "http:"].includes(url.protocol)) return;
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    const parts = url.pathname.split("/").filter(Boolean);
    let id: string | null | undefined;
    if (host === "youtu.be") id = parts[0];
    else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
      id = url.pathname === "/watch" ? url.searchParams.get("v")
        : ["embed", "shorts", "live"].includes(parts[0]) ? parts[1] : undefined;
    }
    if (!id || !/^[\w-]{11}$/.test(id)) return;
    return `https://www.youtube-nocookie.com/embed/${id}?playsinline=1&rel=0`;
  } catch {
    return;
  }
}
