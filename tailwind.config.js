/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "cf-",
  theme: {
    extend: {},
    fontFamily: {
      "family-montserrat": "var(--font-family-montserrat)",
      "family-roboto-mono": "var(--font-family-roboto-mono)",
      "family-bebas-neue": "var(--font-family-bebas-neue)",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
      purgeLayersByDefault: true,
    },
  },
  plugins: [],
};
