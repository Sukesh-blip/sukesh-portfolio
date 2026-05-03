/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        '900px': '900px',
      },
      colors: {
        sidebar: '#0e0e0e',
        accent: '#c8f04a',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        syne: ['Syne', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleWave: {
          '0%': { opacity: '0', transform: 'scale(0.93)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in-1': 'slideIn 0.35s ease forwards',
        'slide-in-2': 'slideIn 0.35s ease 0.05s forwards',
        'slide-in-3': 'slideIn 0.35s ease 0.1s forwards',
        'slide-in-4': 'slideIn 0.35s ease 0.15s forwards',
        'slide-in-5': 'slideIn 0.35s ease 0.2s forwards',
        'slide-in-6': 'slideIn 0.35s ease 0.25s forwards',
        'scale-wave-1': 'scaleWave 0.4s ease forwards',
        'scale-wave-2': 'scaleWave 0.4s ease 0.07s forwards',
        'scale-wave-3': 'scaleWave 0.4s ease 0.14s forwards',
        'scale-wave-4': 'scaleWave 0.4s ease 0.21s forwards',
        'scale-wave-5': 'scaleWave 0.4s ease 0.28s forwards',
        'scale-wave-6': 'scaleWave 0.4s ease 0.35s forwards',
        'scale-wave-7': 'scaleWave 0.4s ease 0.42s forwards',
        'scale-wave-8': 'scaleWave 0.4s ease 0.49s forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
