"use client";

import Quill from "quill";
import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css"; // Quill 기본 테마

function QuillEditor() {
  const containerRef = useRef<HTMLDivElement | null>(null); // 부모 컨테이너 ref
  const editorRef = useRef<HTMLDivElement | null>(null); // 에디터 컨테이너 ref
  const quillInstanceRef = useRef<Quill | null>(null); // Quill 인스턴스

  useEffect(() => {
    if (containerRef.current && editorRef.current && !quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(editorRef.current, {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }], // 글자 크기
            [{ font: [] }], // 폰트
            ["bold", "italic", "underline"], // 글씨 효과
            [{ list: "ordered" }, { list: "bullet" }, { align: [] }], // 불렛, 정렬
            ["image", "code-block"], // 이미지 및 코드
          ],
        },
        theme: "snow",
      });

      const editorToolbar = containerRef.current.querySelector(".ql-toolbar") as HTMLElement;
      if (editorToolbar) {
        editorToolbar.style.background = "white";
      }

      // Quill 내부 스크롤 설정
      const editor = editorRef.current.querySelector(".ql-editor") as HTMLElement;
      if (editor) {
        editor.style.overflowY = "auto"; // 스크롤 활성화
        editor.style.height = "auto"; // 글자 수에 맞춰 높이 자동 조정
        editor.style.paddingBottom = "20px";
        editor.style.background = "white";
        editor.style.minHeight = "85vh";
      }
    }
  }, []);

  return (
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* 에디터 컨테이너 */}
      <div
        ref={editorRef}
        style={{
          border: "none",
          maxWidth: "750px",
          width: "750px",
          margin: "20px auto",
        }}
      />
    </div>
  );
}

export default QuillEditor;
