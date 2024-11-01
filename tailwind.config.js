/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontFamily: {
      "family-montserrat": "var(--font-family-montserrat)",
      "family-roboto-mono": "var(--font-family-roboto-mono)",
      "family-bebas-neue": "var(--font-family-bebas-neue)",
    },
    future: {
      hoverOnlyWhenSupported: true,
      purgeLayersByDefault: true,
    },
  },
  plugins: [],
};
