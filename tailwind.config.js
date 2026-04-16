/** @type {import('tailwindcss').Config} */
export default {
  // Enable logical properties for RTL support
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dark: '#A07830',
        },
        charcoal: {
          DEFAULT: '#111111',
          light: '#1A1A1A',
          card: '#161616',
          border: '#2A2A2A',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #A07830 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
    },
  },
  plugins: [],
}
