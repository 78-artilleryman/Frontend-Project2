import dynamic from "next/dynamic";
import React from "react";
const QuillEditor = dynamic(() => import("@/components/edit/QuillEditor"), { ssr: false });

function NovelDetailPage() {
  return (
    <div className="mx-auto flex h-[calc(100vh-40px)] w-[100%] justify-center gap-6 overflow-y-auto pt-10">
      <QuillEditor />
      <div className="h-[100px] w-[20%] bg-blue-300">test</div>
    </div>
  );
}

export default NovelDetailPage;
