/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponse {
    find: any;
    status: string;
    totalResults: number;
    articles: Article[];
}