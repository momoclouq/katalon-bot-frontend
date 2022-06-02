module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      blur: {
        xs: '3px',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
