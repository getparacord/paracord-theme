/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    /* Local paracord Django project templates */
    "../paracord/**/*.{html,js}",
    "paracord/**/*.{html,js}",
    /* Theme html files */
    'src/**/*.html',
     /**
     * Flowbite: If you do not use Flowbite components, comment out the following line
     */
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

