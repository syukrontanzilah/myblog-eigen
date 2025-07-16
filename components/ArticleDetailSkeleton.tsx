'use client';
import { Skeleton } from "antd";
import React from "react";

const ArticleDetailSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Skeleton
        active
        title={{ width: "60%" }}
        paragraph={{ rows: 1 }}
        className="mb-6"
      />

      <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-xl mb-8" />

      <Skeleton active paragraph={{ rows: 3 }} />
    </div>
  );
};

export default ArticleDetailSkeleton;
