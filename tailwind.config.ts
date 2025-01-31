import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "pulse-border": "pulse-border 2s infinite",
      },
      keyframes: {
        "pulse-border": {
          "0%, 100%": { borderColor: "rgb(59 130 246 / 1)" }, // border-blue-500
          "50%": { borderColor: "rgb(147 197 253 / 1)" }, // lighter blue
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
