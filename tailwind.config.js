/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: 'var(--sand)',
        'sand-light': 'var(--sand-light)',
        surface: 'var(--surface)',
        espresso: 'var(--espresso)',
        'espresso-light': 'var(--espresso-light)',
        'red-accent': 'var(--red-accent)',
        gray: 'var(--gray)',
        charcoal: 'var(--charcoal)',
        white: 'var(--white)',
        gold: 'var(--gold)',
        sage: 'var(--sage)',
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
