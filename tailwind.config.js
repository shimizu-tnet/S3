module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    colors: {
      black: '#3B4043',
      white: '#FFFFFF',
      primary: '#109954',
      secondary: {
        default: '#97CF35',
        light: '#9FDB38'
      },
      gray: {
        default: '#707070',
        light: '#F5F5F5',
        dark: '#3B4043'
      }
    }
  },
  variants: {},
  plugins: [],
}
