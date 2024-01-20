/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'main': "#fafafa",
      },
      textColor:{
        'main': '#757575',
        'title': '#515151'
      },
      screens:{
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    }
  },
  plugins: []
};

