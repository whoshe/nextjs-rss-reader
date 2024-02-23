import Parser from "rss-parser";

export const FEEDS = [
  {
    slug: "google-news",
    title: "지역사랑상품권 또는 지역화폐 뉴스",
    url: "https://news.google.com/rss/search?q=지역사랑상품권 OR 지역화폐&ceid=KR:ko&hl=ko&gl=KR",
  },
  {
    slug: "bookshopmap-blog",
    title: "오늘의동네서점 블로그",
    url: "https://blog.bookshopmap.com/rss",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();
  let feed = await parser.parseURL(encodeURI(feedUrl));

  return feed;
}
