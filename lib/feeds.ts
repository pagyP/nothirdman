import Parser from "rss-parser";
import { NewsItem, RSS_SOURCES } from "./types";

const parser = new Parser({ timeout: 8000 });

async function fetchSource(
  id: string,
  name: string,
  url: string
): Promise<NewsItem[]> {
  try {
    const feed = await parser.parseURL(url);
    return (feed.items ?? []).slice(0, 20).map((item) => ({
      title: item.title ?? "Untitled",
      link: item.link ?? url,
      pubDate: item.pubDate ?? item.isoDate ?? "",
      sourceId: id,
      sourceName: name,
    }));
  } catch {
    return [];
  }
}

export async function getAllNews(): Promise<NewsItem[]> {
  const results = await Promise.allSettled(
    RSS_SOURCES.map((s) => fetchSource(s.id, s.name, s.url))
  );

  const items = results.flatMap((r) =>
    r.status === "fulfilled" ? r.value : []
  );

  // Sort by date descending, items with no date go last
  return items.sort((a, b) => {
    if (!a.pubDate) return 1;
    if (!b.pubDate) return -1;
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });
}
