import { readFile, writeFile, readdir } from "node:fs/promises";
import { resolve, join } from "node:path";

// Export the built site as one file that can be opened without a local server.
const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
let html = await readFile(join(dist, "index.html"), "utf8");
const scriptPath = html.match(/<script[^>]+src="([^"]+)"[^>]*><\/script>/)?.[1];
const stylePath = html.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/)?.[1];
if (!scriptPath || !stylePath) throw new Error("Build assets were not found.");
let script = await readFile(resolve(dist, scriptPath), "utf8");
const css = await readFile(resolve(dist, stylePath), "utf8");
const mimeTypes = { svg: "image/svg+xml", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif" };
for (const directory of ["placeholders", "activities", "planning"]) {
  for (const name of await readdir(join(dist, directory))) {
    const mime = mimeTypes[name.split(".").pop()?.toLowerCase()];
    if (!mime) {
      // Keep larger videos/documents beside the standalone preview, in public/planning.
      if (directory === "planning" && !name.startsWith(".")) {
        script = script.replaceAll(`/planning/${name}`, `./public/planning/${name}`);
      }
      continue;
    }
    const bytes = await readFile(join(dist, directory, name));
    script = script.replaceAll(`/${directory}/${name}`, `data:${mime};base64,${bytes.toString("base64")}`);
  }
}
const favicon = await readFile(join(dist, "favicon.svg"));
html = html
  .replace(/<script[^>]+src="[^"]+"[^>]*><\/script>/, () => `<script type="module">${script.replaceAll("</script", "<\\/script")}</script>`)
  .replace(/<link[^>]+href="[^"]+\.css"[^>]*>/, () => `<style>${css}</style>`)
  .replace(/href="[^"]*favicon\.svg"/, `href="data:image/svg+xml;base64,${favicon.toString("base64")}"`);
await writeFile(join(root, "포트폴리오 미리보기.html"), html);
console.log("Saved standalone preview: 포트폴리오 미리보기.html");
