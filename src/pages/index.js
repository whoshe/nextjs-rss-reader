import Image from "next/image";
import { Inter } from "next/font/google";
import { FEEDS } from "../lib/rss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="px-6 py-12 max-w-xl mx-auto">
        <h1 className="font-bold text-5xl mb-12">코드포코리아 RSS 리더</h1>
        <div className="grid grid-cols-2 gap-4">
          {FEEDS.map((feed) => (
            <Link
              key={feed.slug}
              href={`/feeds/${feed.slug}`}
              className="p-4 border border-gray-200 hover:border-gray-500 rounded-lg"
            >
              {feed.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
