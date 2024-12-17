"use client";

import React from "react";

interface FileAccordionProps {
  folderList: {
    id: string;
    name: string;
    novelId: string;
    created_at: string;
    files: {
      id: string;
      name: string;
    }[];
  }[];
}

function FileAccordion({ folderList }: FileAccordionProps) {
  return (
    <div className="bg-blackAlpha-200 h-[calc(100vh-40px)] w-[200px] overflow-hidden">
      {folderList.map(folder => (
        <div key={folder.id}>{folder.name}</div>
      ))}
    </div>
  );
}

export default FileAccordion;
