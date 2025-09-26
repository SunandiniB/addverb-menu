/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'robot-red': '#dc2626',
        'robot-dark': '#0a0a0a',
        'robot-metal': '#404040',
        'robot-steel': '#737373',
        'robot-light': '#d4d4d4',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-robot': 'pulse-robot 2s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'mechanical': 'mechanical 0.5s ease-in-out',
      },
      keyframes: {
        'pulse-robot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      }
    },
  },
  plugins: [],
}