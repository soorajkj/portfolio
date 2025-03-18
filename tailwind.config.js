/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontFamily: {
      "family-manrope": "var(--font-family-manrope)",
      "family-roboto-pt-mono": "var(--font-family-pt-mono)",
      "family-bebas": "var(--font-family-bebas)",
    },
    future: {
      hoverOnlyWhenSupported: true,
      purgeLayersByDefault: true,
    },
  },
  plugins: [],
};
