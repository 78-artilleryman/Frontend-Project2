import { vars } from "@byeonghyeon/themes";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-Page-gradient": "linear-gradient(0deg, #2B6CB0 0%, #2C5282 35.5%, #1A365D 93.5%)",
        "custom-box-gradient": "linear-gradient(180deg, #F8F8F8 25%, #BCDDF6 59%)",
      },
    },
    colors: vars.colors.$static.light,
  },
  plugins: [],
};
export default config;
