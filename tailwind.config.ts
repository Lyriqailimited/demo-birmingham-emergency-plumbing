import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: { primary: '#0066cc', accent: '#ff6600' },
      },
    },
  },
  plugins: [],
}
export default config
