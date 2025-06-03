// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
    
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          900: '#1E40AF',
          800: '#1E3A8A',
          600: '#2563EB',
          200: '#BFDBFE',
        },
        'teal': {
          100: '#CCFBF1',
          200: '#99F6E4',
          400: '#2DD4BF',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
        },
        'silver': {
          100: '#E5E7EB',
          200: '#D1D5DB',
        },
        'orinoco': {
          100: '#F3F5D5',
        },
        'gray': {
          300: '#D1D5DB',
          500: '#6B7280',
          700: '#374151',
          800: '#1F2937',
        }
      }
    },
  },
  plugins: [],
}