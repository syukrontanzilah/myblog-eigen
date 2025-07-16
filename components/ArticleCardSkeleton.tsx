'use client';
import { Card, Skeleton } from 'antd';

export default function ArticleCardSkeleton() {
  return (
    <Card
      hoverable
      className="rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-xl bg-white"
      styles={{ body: { padding: '16px' } }}
    >
      <div className="relative h-48 w-full mb-4 bg-gray-200 animate-pulse rounded" />
      <Skeleton active paragraph={{ rows: 3 }} />
    </Card>
  );
}
