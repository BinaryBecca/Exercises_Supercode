import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rosa: "#FEE2E2",
      },
    },
  },
  plugins: [],
}
export default config
