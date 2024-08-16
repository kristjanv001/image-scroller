/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      "neutral-one": "#F8FAFC",
      "neutral-seven": "#475569",
      "neutral-ten": "#0F172A",
      "rose-seven": "#E11D48",
    },
    fontFamily: {
      sans: "Roboto, system-ui",
      serif: "'Roboto Slab', Georgia",
    },
  },
  plugins: [],
};
