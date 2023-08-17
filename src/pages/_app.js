import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "코드포코리아 RSS 리더",
  description:
    "뉴스 또는 블로그의 RSS 피드를 추가해보세요. 웹페이지에 최신 기사 목록을  삽입할 수 있어요.",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://whoshe.github.com/nextjs-rss-reader",
    title: "코드포코리아 RSS 리더",
    site_name: "코드포코리아",
    images: [
      {
        url: "/nextjs-rss-reader/img/codeforkr-cover.jpg",
        width: 700,
        height: 525,
        alt: "코드포코리아 대표이미지",
      },
    ],
  },
  twitter: {
    handle: "@codeforkr",
    site: "https://twitter.com/codeforkr",
    cardType: "summary_large_image",
  },
};
export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </>
  );
}
