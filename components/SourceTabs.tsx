"use client";

import { useState } from "react";
import { NewsItem, RSS_SOURCES } from "@/lib/types";
import FeedList from "./FeedList";

const ALL_TAB = "all";

export default function SourceTabs({ items }: { items: NewsItem[] }) {
  const [active, setActive] = useState(ALL_TAB);

  const filtered =
    active === ALL_TAB ? items : items.filter((i) => i.sourceId === active);

  const tabs = [{ id: ALL_TAB, name: "All" }, ...RSS_SOURCES];

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === tab.id
                ? "bg-emerald-700 text-white dark:bg-emerald-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <FeedList items={filtered} />
    </div>
  );
}
