import type { Metadata } from "next";
import "./style/globals.css";
import { NextProvider } from "../context/providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  );
}
