/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
          
        },
        infiniteScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        typewriter: 'typewriter 3s steps(30, end) forwards, blink 0.75s step-end infinite',
        infiniteScroll: 'infiniteScroll 35s linear infinite',
      },
    },
  },
  plugins: [],
}

