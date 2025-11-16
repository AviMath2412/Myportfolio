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
        bg: "#0f0f0f",
        text: "#e0e0e0",
        accent: "#a0a0a0",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
