import { vars } from "@byeonghyeon/themes";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "button-right": "linear-gradient(to left, var(--black-alpha-900) 60%, rgba(75, 0, 130, 0) 100%)",
        "button-left": "linear-gradient(to right, var(--black-alpha-900) 60%, rgba(75, 0, 130, 0) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-Page-gradient": "linear-gradient(0deg, #2B6CB0 0%, #2C5282 35.5%, #1A365D 93.5%)",
        "custom-box-gradient": "linear-gradient(180deg, #F8F8F8 25%, #BCDDF6 59%)",
      },
      screens: {
        mb: { min: "360px", max: "766px" },
        tbc: { min: "767px", max: "1022px" },
        tbr: { min: "1023px", max: "1439px" },
        pc: { max: "1440px" },
      },
      keyframes: {
        bannerAnimation_PC: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(400px) translateY(150px) scale(0.7)" }, // 오른쪽으로 이동
          "50%": { transform: "translateX(-400px) translateY(-150px) scale(0.7)" }, // 왼쪽으로 다시 돌아옴
          "90%": {
            transform: "scale(1.2)", // 크기 커짐
            opacity: "0.5", // 깜빡임 효과
          },
          "100%": {
            transform: "scale(1)", // 크기 원래대로
            opacity: "1", // 깜빡임 효과 종료
          },
        },
        bannerAnimation_TBR: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(300px) translateY(80px) scale(0.7)" }, // 오른쪽으로 이동
          "50%": { transform: "translateX(-300px) translateY(-80px) scale(0.7)" }, // 왼쪽으로 다시 돌아옴
          "90%": {
            transform: "scale(1.2)", // 크기 커짐
            opacity: "0.5", // 깜빡임 효과
          },
          "100%": {
            transform: "scale(1)", // 크기 원래대로
            opacity: "1", // 깜빡임 효과 종료
          },
        },
        bannerAnimation_TBC: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(200px) translateY(80px) scale(0.7)" }, // 오른쪽으로 이동
          "50%": { transform: "translateX(-200px) translateY(-80px) scale(0.7)" }, // 왼쪽으로 다시 돌아옴
          "90%": {
            transform: "scale(1.2)", // 크기 커짐
            opacity: "0.5", // 깜빡임 효과
          },
          "100%": {
            transform: "scale(1)", // 크기 원래대로
            opacity: "1", // 깜빡임 효과 종료
          },
        },
      },
      animation: {
        "bannerAnimation-pc": "bannerAnimation_PC 4s ease-in-out",
        "bannerAnimation-tbr": "bannerAnimation_TBR 4s ease-in-out",
        "bannerAnimation-tbc": "bannerAnimation_TBC 4s ease-in-out",
      },
    },

    colors: vars.colors.$static.light,
  },
  plugins: [],
};
export default config;
