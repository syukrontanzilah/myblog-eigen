/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { getTopHeadlines } from "@/lib/api";
import SocialMedia from "../../../../components/SocialMedia";
import ArticleDetailSkeleton from "../../../../components/ArticleDetailSkeleton";

export async function generateMetadata(
  props: any
): Promise<Metadata> {
  const { slug } = props.params;

  return {
    title: `${slug.replace(/-/g, ' ')} | Blog Article`,
    description: 'Read this interesting article',
  };
}

async function ArticleFetcher({ slug }: { slug: string }) {
  const { articles } = await getTopHeadlines();

  const article = articles.find((a) => {
    const articleSlug = a.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    return articleSlug === slug;
  });

  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-xl md:text-4xl font-bold mb-8 leading-tight">
        {article.title}
      </h1>
      <img
        src={article.urlToImage || "/notfound.jpg"}
        alt={article.title}
        className="rounded-xl mb-8 w-full max-h-[400px] object-cover"
      />
      <p className="text-sm text-gray-500 mb-4">
        Published at: {new Date(article.publishedAt).toLocaleString()}
      </p>
      <p className="text-[18px] text-gray-800 mb-12">
        {article.description || "No description available."}
      </p>
      <div className="border-t pt-6 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 !border-t-gray-200">
        <div>
          <p className="text-sm text-gray-600">
            Written by{" "}
            <span className="font-medium text-gray-800">
              {article.author || "Unknown Author"}
            </span>
          </p>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default function Page(props: any) {
  const { slug } = props.params;

  return (
    <Suspense fallback={<ArticleDetailSkeleton />}>
      <ArticleFetcher slug={slug} />
    </Suspense>
  );
}
