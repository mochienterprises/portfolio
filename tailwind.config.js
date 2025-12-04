/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        light: "400",
        normal: "500",
        medium: "600",
        semibold: "700",
        bold: "800",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
