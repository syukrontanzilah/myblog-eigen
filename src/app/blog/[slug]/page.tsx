/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { getTopHeadlines } from "@/lib/api";
import slugify from "slugify";
import ArticleDetailSkeleton from "../../../../components/ArticleDetailSkeleton";
import SocialMedia from "../../../../components/SocialMedia";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: decodeURIComponent(params.slug) };
}

export default function ArticleDetailPageWrapper({ params }: Props) {
  return (
    <Suspense fallback={<ArticleDetailSkeleton />}>
      <ArticleDetailPage params={params} />
    </Suspense>
  );
}

async function ArticleDetailPage({ params }: Props) {
  const { articles } = await getTopHeadlines();

  const article = articles.find((a) => {
    const safeSlug = slugify(a.title, { lower: true, strict: true });
    return safeSlug === params.slug;
  });

  if (!article) return notFound();

  const image = article.urlToImage || "/notfound.jpg";
  const author = article.author || "Unknown Author";

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-xl md:text-4xl font-bold mb-8 leading-tight">
        {article.title}
      </h1>

      <img
        src={image}
        alt={article.title}
        className="rounded-xl mb-8 w-full max-h-[400px] object-cover"
      />

      <p className="text-sm text-gray-500 mb-4">
        Published at: {new Date(article.publishedAt).toLocaleString()}
      </p>

      <p className="text-[18px] text-gray-800 mb-12">
        {article.description || "No description available."}
      </p>

      {/* Penulis dan sosial media */}
      <div className="border-t pt-6 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 !border-t-gray-200">
        <div>
          <p className="text-sm text-gray-600">
            Written by{" "}
            <span className="font-medium text-gray-800">{author}</span>
          </p>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}
