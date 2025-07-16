/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, Typography } from "antd";
import Link from "next/link";
import slugify from "slugify";
import ArticleCardSkeleton from "./ArticleCardSkeleton";

const { Title, Paragraph, Text } = Typography;

type Props = {
  article?: {
    urlToImage: string | null;
    title: string;
    description: string;
    author: string;
    url: string;
    publishedAt: string;
  };
  loading?: boolean;
};

export default function ArticleCard({ article, loading = false }: Props) {
  if (loading) return <ArticleCardSkeleton />;

  const image = article?.urlToImage || "/notfound.jpg";
  const author = article?.author || "Unknown Author";
  const slug = slugify(article?.title ?? "", { lower: true, strict: true });

  return (
    <Link href={`/blog/${encodeURIComponent(slug)}`}>
      <Card
        hoverable
        className="!rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-xl bg-white min-h-[500px]"
        styles={{ body: { padding: "10px" } }}
      >
        {/* image */}
        <div className="relative !rounded-xl h-50 w-full mb-4">
          <img
            src={image}
            alt={article?.title}
            className="object-cover !rounded-xl w-full h-full"
          />
        </div>

        {/* content*/}
        <div className="flex flex-col h-full p-4">
          <div>
            <div className="flex items-center text-xs  mb-4 justify-between">
              <Text className="text-[11px] line-clamp-1 !text-gray-500">
                By {author}
              </Text>
              <div className="line-clamp-1">
                <span className="mx-2 h-3 border-l border-gray-300" />
                <Text className="!text-[11px] !text-gray-500">
                  {Math.floor(Math.random() * 10) + 2} min read
                </Text>
              </div>
            </div>

            <Title
              level={4}
              className="text-gray-900 text-base font-semibold leading-snug line-clamp-2 !mb-4"
            >
              {article?.title}
            </Title>

            <Paragraph className="!text-[16px] text-gray-600 line-clamp-3 mt-1 mb-4">
              {article?.description || "No description available."}
            </Paragraph>
          </div>

          <div className="mt-auto pt-2">
            <div
              className="!text-[#7c3aed] font-medium text-[16px] inline-flex items-center"
            >
              Read more <span className="ml-1">→</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
