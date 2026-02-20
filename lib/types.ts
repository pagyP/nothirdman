export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  sourceId: string;
  sourceName: string;
}

export interface RssSource {
  id: string;
  name: string;
  url: string;
}

export const RSS_SOURCES: RssSource[] = [
  {
    id: "cricinfo",
    name: "ESPN Cricinfo",
    url: "https://www.espncricinfo.com/rss/content/story/feeds/0.xml",
  },
  {
    id: "bbc",
    name: "BBC Cricket",
    url: "https://feeds.bbci.co.uk/sport/cricket/rss.xml",
  },
  {
    id: "cricbuzz",
    name: "CricBuzz",
    url: "https://news.google.com/rss/search?q=cricket+site:cricbuzz.com&hl=en&gl=US&ceid=US:en",
  },
  {
    id: "wisden",
    name: "Wisden",
    url: "https://www.wisden.com/feed",
  },
  {
    id: "guardian",
    name: "The Guardian",
    url: "https://www.theguardian.com/sport/cricket/rss",
  },
  {
    id: "skysports",
    name: "Sky Sports",
    url: "https://news.google.com/rss/search?q=cricket+site:skysports.com&hl=en-GB&gl=GB&ceid=GB:en",
  },
];
