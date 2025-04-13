import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#285F9D",
        secondary: "#292759",
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
