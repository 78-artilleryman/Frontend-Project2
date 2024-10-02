import React from "react";
import QuillEditor from "@/components/edit/QuillEditor";

function NovelDetailPage() {
  return (
    <main>
      <div className="bg-blackAlpha-300 h-10 w-full">
        <div />
      </div>
      <div className="flex h-screen w-full">
        <div className="bg-blackAlpha-300 h-full w-20" />
        <div className="bg-blackAlpha-900 h-full w-[200px]" />
        <div className="mx-auto w-[60%]">
          <QuillEditor />
        </div>
      </div>
    </main>
  );
}

export default NovelDetailPage;
