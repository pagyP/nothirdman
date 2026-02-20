import { NewsItem } from "@/lib/types";

const SOURCE_COLOURS: Record<string, string> = {
  cricinfo: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  bbc: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  cricbuzz: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  wisden: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  guardian: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
  skysports: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
};

function formatDate(raw: string): string {
  if (!raw) return "";
  const d = new Date(raw);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NewsCard({ item }: { item: NewsItem }) {
  const badge = SOURCE_COLOURS[item.sourceId] ?? "bg-gray-100 text-gray-700";
  const date = formatDate(item.pubDate);

  return (
    <article className="flex flex-col gap-1 py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base font-medium text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 leading-snug"
      >
        {item.title}
      </a>
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
        <span
          className={`inline-block px-2 py-0.5 rounded-full font-medium ${badge}`}
        >
          {item.sourceName}
        </span>
        {date && <span>{date}</span>}
      </div>
    </article>
  );
}
