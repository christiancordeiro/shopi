/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, sans-serif",
        Helvetica: "Helvetica Neue LT Pro, sans-serif",
      },
      strokeWidth: {
        4: "4px",
      },
    },
  },
  plugins: [],
}
