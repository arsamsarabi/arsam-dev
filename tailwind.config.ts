import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['var(--font-body)'],
      heading: ['var(--font-heading)'],
      cursive: ['var(--font-cursive)'],
    },
    extend: {
      colors: {
        dark: '#393B44',
        light: '#F1F3FB',
        primary: '#D6E0F0',
        secondary: '#8D93AB',
      },
    },
  },
}
export default config
