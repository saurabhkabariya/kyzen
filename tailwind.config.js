/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#2196F3',
        backgroundLight: '#F9FBFD',
        textPrimary: '#212121',
        textSecondary: '#555555',
        success: '#4CAF50',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-backgroundLight',
    'bg-success',
    'text-primary',
    'text-secondary',
    'text-textPrimary',
    'text-textSecondary',
  ],
  plugins: [],
}
