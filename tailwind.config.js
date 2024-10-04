/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "bounce-horizontal": {
          "0%, 100%": { transform: "translateX(0)" }, // Başlangıç ve bitiş noktası
          "50%": { transform: "translateX(25px)" }, // Ortada sağa doğru hareket
        },
      },
      animation: {
        "slide-left": "slide-left 1s ease-in-out",
        "bounce-horizontal": "bounce-horizontal 2s infinite",
      },
      boxShadow: {
        "custom-inset": "inset 0 1px 2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
