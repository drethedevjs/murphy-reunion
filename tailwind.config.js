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
        primary: "#F6BE00", // Gold
        secondary: "#C8102E", // Red
        contrast: "#0033A0", // Blue
        neutral: "#101820", // Black
        white: "#FFFFFF", // White
        // Dark mode variants
        "primary-dark": "#FFD447",
        "secondary-dark": "#FF5C5C",
        "contrast-dark": "#5C88FF",
        "neutral-dark": "#E4E4E4",
        "bg-dark": "#0D0D0D",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
