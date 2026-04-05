import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1865C8',
        accent: '#2B7FE0',
        'primary-dark': '#0D4A9E',
        'bg-base': '#060E1A',
        'bg-surface': '#0D1E30',
        'bg-elevated': '#132438',
        'text-primary': '#EEF4FF',
        'text-secondary': '#7AABCF',
        'text-muted': '#4A7A9B',
        border: '#0D2744',
        'border-blue': '#1865C8',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
