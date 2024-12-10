import type { Metadata } from "next";
import "./style/globals.css";
import { NextProvider } from "../common/context/providers";

export const metadata: Metadata = {
  title: "Pluma",
  description: "웹소설 작가들을 위한 에디터 프로그램 Pluma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div id="backdrop" />
        <div id="modal" />
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
