export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inter: ["Inter", "sans-serif"],
      colors: {
        'main': '#B039FF',  
        'main-hover': '#9B05FF',
        'bg': '#0E051B',
        'nav-bg': '#160F22',
        'stroke': '#282034',
      },
    },
  },
  plugins: [],
}