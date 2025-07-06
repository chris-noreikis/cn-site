/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#005b99',
          dark: '#4a9eff',
        },
        text: {
          DEFAULT: '#2e353f',
          light: '#4f5969',
          dark: '#e2e8f0',
          'dark-light': '#a0aec0',
        },
        heading: {
          DEFAULT: '#1a202c',
          dark: '#f7fafc',
        },
        accent: {
          DEFAULT: '#d1dce5',
          dark: '#4a5568',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#1a202c',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}