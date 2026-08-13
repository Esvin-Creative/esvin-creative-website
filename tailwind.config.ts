import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight: {
          yellow: "#fdfd96",
          blue: "#aec6cf",
          pink: "#ffb7b2",
        },
        brand: {
          navy: "#0f172a",
          blue: "#3b82f6",
          light: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        sketch: ["var(--font-kalam)", "cursive"],
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        wobble: "wobble 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
