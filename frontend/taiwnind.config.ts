/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blacktext: "#1A1A1A",
        background: "#FAFAFA",
        cta: "#FCA311",
        "cta-hover": "#E59400",
        branding: "#D62828",
        secondary: "#6B7280",
      },
    },
  },
  plugins: [],
}