import Parser from 'rss-parser'

export const FEEDS = [
  {
    slug: 'bookshopmap-blog',
    title: '오늘의동네서점 블로그',
    url: 'https://blog.bookshopmap.com/rss',
  },
  {
    slug: 'google-news',
    title: '지역화폐 뉴스 기사',
    url: 'https://news.google.com/rss/search?q=지역사랑상품권 OR 지역화폐&ceid=KR:ko&hl=ko&gl=KR',
  },
  {
    slug: 'bookshopmap-news',
    title: '동네서점지도 뉴스 기사',
    url: 'https://news.google.com/rss/search?q=주식회사 동네서점 OR 동네서점지도&ceid=KR:ko&hl=ko&gl=KR',
  },
]

export async function getFeed(feedUrl) {
  let parser = new Parser()
  let feed = await parser.parseURL(encodeURI(feedUrl))

  return feed
}
