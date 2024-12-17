import dynamic from "next/dynamic";
import React from "react";
const QuillEditor = dynamic(() => import("@/components/edit/QuillEditor"), { ssr: false });

function NovelDetailPage() {
  return (
    <div className="mx-auto flex w-[100%] justify-center gap-6 overflow-y-auto bg-[#f1f1f1]">
      <QuillEditor />
    </div>
  );
}

export default NovelDetailPage;
