module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['fallback-gap'],
      float: ['fallback-gap'],
      margin: ['fallback-gap'],
      backgroundOpacity: ['dark'],
      scale: ['active', 'group-hover'],
      boxShadow: ['active'],
      translate: ['active', 'group-hover'],
      borderColor: ['focus-keyboard', 'focus-within-keyboard'],
      ringWidth: ['focus-keyboard', 'focus-within-keyboard'],
      ringColor: ['focus-keyboard', 'focus-within-keyboard', 'group-hover'],
      ringOffsetColor: ['focus-keyboard', 'focus-within-keyboard'],
      ringOpacity: ['focus-keyboard', 'focus-within-keyboard'],
      ringOffsetWidth: ['focus-keyboard', 'focus-within-keyboard'],
    },
  },
  plugins: [],
};