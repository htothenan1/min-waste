const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      quicksand: ["var(--font-quicksand)"],
      quicksandBold: ["var(--font-quicksandBold)"],
    },
    container: {
      center: true,
      padding: "2rem",
      extend: {
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          quicksand: ["var(--font-quicksand)"],
          quicksandBold: ["var(--font-quicksandBold)"],
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
}
