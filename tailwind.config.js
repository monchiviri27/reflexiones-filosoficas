/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'filosofia': {
          'primario': '#2c3e50',
          'secundario': '#7f8c8d',
          'acento': '#3498db',
          'claro': '#ecf0f1',
          'oscuro': '#1a252f',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Georgia', 'serif'],
        'poema': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

