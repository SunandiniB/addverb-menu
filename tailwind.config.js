/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff00ff",
          purple: "#9d4edd",
          blue: "#00f7ff"
        }
      },
      fontFamily: {
        techno: ["Orbitron", "sans-serif"]
      }
    }
  },
  plugins: []
};
