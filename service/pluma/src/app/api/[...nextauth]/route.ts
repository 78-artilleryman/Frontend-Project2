import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";
import Naver from "next-auth/providers/naver";
import prisma from "@/db";

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt" as const,
    maxAge: 60 * 60 * 24,
    updateAge: 60 * 60 * 2,
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Naver({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
