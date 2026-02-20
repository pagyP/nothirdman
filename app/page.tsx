import { getAllNews } from "@/lib/feeds";
import { RSS_SOURCES } from "@/lib/types";
import SourceTabs from "@/components/SourceTabs";

export const revalidate = 600; // re-fetch feeds at most every 10 minutes

export default async function Home() {
  const items = await getAllNews();
  const sourceNames = RSS_SOURCES.map((s) => s.name).join(", ");

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">Latest Cricket News</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {items.length} stories from {sourceNames}
      </p>
      <SourceTabs items={items} />
    </div>
  );
}
