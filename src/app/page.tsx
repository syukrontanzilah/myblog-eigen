/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

"use client";
import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { getTopHeadlines } from "@/lib/api";
import { Article } from "@/types/articleType";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopHeadlines("us")
      .then((data) => {
        setArticles(data.articles);
        console.log("datanya:", data);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="p-4 md:p-10 bg-violet-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? skeletonCards.map((_, index) => <ArticleCard key={index} loading />)
          : articles.map((article: any, index) => (
              <ArticleCard key={index} article={article} />
            ))}
      </div>
    </div>
  );
}
