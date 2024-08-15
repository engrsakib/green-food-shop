/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./fruit-brust/images/team.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: { themes: ["light"], },
}

