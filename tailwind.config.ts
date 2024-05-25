import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          700: "#db1020",
          500: "#ff0000",
        },
        yellow: "#ffd700",
        cream: "#f9f5f5",
      }
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.clip-ellipse': {
          'clip-path': 'ellipse(30.84% 43.79% at 62.7% 50.2%)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};
export default config;
