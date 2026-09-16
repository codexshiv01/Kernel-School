/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kernel-black': '#0B0D10',
        'kernel-blue': '#315BFF',
        'kernel-green': '#B5F34A',
        'kernel-paper': '#F7F7F2',
        'kernel-grey': '#8A8F98',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'code': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
