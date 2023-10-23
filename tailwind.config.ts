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
        black:{
          100: "#2f2f31",
          500: "#18181b"
        },
        teal:{
          500: "#19b4b9"
        }
      },
      maxWidth: {
        container: "1400px",
      }
    },
  },
  plugins: [],
}
export default config
