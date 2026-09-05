import GithubSlugger from "github-slugger";

export type TocEntry = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export function extractToc(markdown: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const toc: TocEntry[] = [];

  for (const line of lines) {
    const match = /^(##|###)\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const depth = match[1].length === 2 ? 2 : 3;
    const text = match[2].trim();
    const id = slugger.slug(text);
    toc.push({ id, text, depth });
  }

  return toc;
}
