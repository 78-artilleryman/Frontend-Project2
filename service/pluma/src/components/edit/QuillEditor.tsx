"use client";

import Quill from "quill";
import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css"; // Quill의 기본 테마를 가져옵니다.

function QuillEditor() {
  const editorRef = useRef<HTMLDivElement | null>(null); // 에디터를 위한 ref
  const quillInstanceRef = useRef<Quill | null>(null); // Quill 인스턴스를 위한 ref

  useEffect(() => {
    if (editorRef.current && !quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(editorRef.current, {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }], //글자 크기
            [{ font: [] }], //폰트
            ["bold", "italic", "underline"], //글씨효과
            [{ list: "ordered" }, { list: "bullet" }, { align: [] }], //불렛, 정렬
            ["image", "code-block"], //이미지 및 코드
          ],
        },
        theme: "snow",
      });
    }
  }, []);

  return (
    <div>
      <div ref={editorRef} style={{ height: "100vh" }} />
    </div>
  );
}

export default QuillEditor;
