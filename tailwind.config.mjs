/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx,md,mdx,vue,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};