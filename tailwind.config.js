/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'custom-primary': '#282d3a',
        'custom-secondary': '#e0a965',
        'custom-tertiary': '#13161d',
        'custom-back': '#333333',
        'custom-back-light': '#cfcccc',
        'custom-nav-color': '#fcf9f5',
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
        'elevation-md': '0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1)',
        'elevation-lg': '0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1)',
        'elevation-xl': '0 8px 16px rgba(0, 0, 0, 0.2), 0 -8px 16px rgba(0, 0, 0, 0.2), 8px 0 16px rgba(0, 0, 0, 0.2), -8px 0 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
