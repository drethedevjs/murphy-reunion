/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
  ],
  safelist: [
    {
      pattern: /from-(yellow|green|blue|purple|pink)-(500)/,
    },
    {
      pattern: /via-(yellow|green|blue|purple|pink)-(500)/,
    },
    {
      pattern: /to-(yellow|green|blue|purple|pink)-(500)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A237E", // Indigo
        secondary: "#FF9800", // Orange
        contrast: "#00C853", // Emerald Green
        neutral: "#F5F5F5", // Light Gray
        accent: "#D500F9", // Vivid Purple
        fun: "#FFEB3B", // Bright Yellow
        sky: "#0288D1", // Strong Blue
        // Dark mode variants
        "primary-dark": "#3949AB",
        "secondary-dark": "#FFB74D",
        "contrast-dark": "#69F0AE",
        "neutral-dark": "#212121",
        "accent-dark": "#BA68C8",
        "fun-dark": "#FBC02D",
        "sky-dark": "#01579B",
        "bg-dark": "#121212",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
