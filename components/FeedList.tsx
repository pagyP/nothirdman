import { NewsItem } from "@/lib/types";
import NewsCard from "./NewsCard";

export default function FeedList({ items }: { items: NewsItem[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-gray-500 py-8 text-center">
        No stories found.
      </p>
    );
  }

  return (
    <div>
      {items.map((item, i) => (
        <NewsCard key={`${item.sourceId}-${i}`} item={item} />
      ))}
    </div>
  );
}
