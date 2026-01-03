/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      colors: {
        server: '#82c91e',
        bg: '#141414',
        prim: '#1f1f1f'
      }
    },
  },
  plugins: [],
}