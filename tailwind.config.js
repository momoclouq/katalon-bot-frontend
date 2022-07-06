module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      blur: {
        xs: '3px',
      },
      maxHeight: {
        '128': '44rem',
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
