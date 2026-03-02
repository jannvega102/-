/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        jet: 'hsl(0, 0%, 86%)',
        onyx: 'hsl(0, 0%, 94%)',
        eerie: 'hsl(0, 0%, 98%)',
        smoky: 'hsl(0, 0%, 96%)',
        accent: 'hsl(0, 0%, 28%)',
        vegas: 'hsl(0, 0%, 38%)',
        'light-gray': 'hsl(0, 0%, 45%)',
      },
      boxShadow: {
        card: '0 1px 3px hsla(0,0%,0%,.06), 0 6px 20px hsla(0,0%,0%,.1)',
        soft: '0 4px 12px hsla(0,0%,0%,.08), 0 8px 24px hsla(0,0%,0%,.1)',
      },
      animation: {
        fade: 'fade 0.5s ease backwards',
        scaleUp: 'scaleUp 0.25s ease forwards',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
