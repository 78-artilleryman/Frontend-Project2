import React from "react";
import NavBar from "@/components/edit/NavBar";
import QuillEditor from "@/components/edit/QuillEditor";

function NovelDetailPage() {
  return (
    <main>
      <header className="bg-blackAlpha-300 h-10 w-full">
        <div />
      </header>
      <div className="flex h-screen w-full">
        <NavBar />
        <div className="bg-blackAlpha-900 h-full w-[200px]" />
        <div className="mx-auto w-[60%]">
          <QuillEditor />
        </div>
      </div>
    </main>
  );
}

export default NovelDetailPage;
