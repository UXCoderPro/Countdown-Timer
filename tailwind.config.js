/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgba(221,229,255,0.50)",
        clr: "#000c25",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/bg.jpg')",
        "design-card":
          "linear-gradient(180deg,rgba(245,247,255,0.80)_0%,rgba(214,220,255,0.80)_100%)",
      },
    },
  },
  plugins: [],
};
