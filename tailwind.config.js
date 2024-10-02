/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-primary': '#282d3a',
        'custom-secondary': '#e0a965',
        'custom-tertiary': '#13161d',
        'custom-back': '#333333',
        'custom-nav-color': '#fcfcfc',
        'custom-mark-color': '#e23e4e',
        'custom-pastel-blue': '#51A8B1',
      },
      flexGrow: {
        '1': 1,
        '2': 2,
        '3': 3,
        // Add more values as needed
      },
      boxShadow: {
        'elevation': '0 8px 16px rgba(0, 0, 0, 0.2), 0 -8px 16px rgba(0, 0, 0, 0.2), 8px 0 16px rgba(0, 0, 0, 0.2), -8px 0 16px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
