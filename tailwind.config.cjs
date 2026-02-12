module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0f',
        purpleDeep: '#130f2d',
        neonBlue: '#00b3ff',
        neonRed: '#ff1f6a'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif']
      }
    }
  },
  plugins: []
}
