/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        smilist: {
          primary: '#1E3A8A',
          secondary: '#7BCBFF',
          accent: '#35D0BA',
          gold: '#C8A24A',
          background: '#F7FAFF',
          surface: '#FFFFFF',
          text: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      lineHeight: {
        thai: '1.85',
      },
    },
  },
  plugins: [],
}
