/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff00',
          light: '#66ff66',
          dark: '#00cc00',
        },
        secondary: {
          DEFAULT: '#00ffff',
          light: '#66ffff',
          dark: '#00cccc',
        },
        background: {
          DEFAULT: '#0a0a0a',
          paper: '#1a1a1a',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 725ms infinite',
      },
      keyframes: {
        glitch: {
          '0%': {
            textShadow: '0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00',
          },
          '15%': {
            textShadow: '0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00',
          },
          '16%': {
            textShadow: '-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00',
          },
          '49%': {
            textShadow: '-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00',
          },
          '50%': {
            textShadow: '0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00',
          },
          '99%': {
            textShadow: '0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00',
          },
          '100%': {
            textShadow: '-0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00',
          },
        },
      },
    },
  },
  plugins: [],
} 