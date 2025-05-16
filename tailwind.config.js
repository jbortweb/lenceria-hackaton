module.exports = {
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  content: [
    './components/**/*.{vue,js}', // Incluye los componentes
    './layouts/**/*.vue', // Incluye los layouts
    './pages/**/*.vue', // Incluye las páginas
    './app.vue', // Incluye el archivo raíz
    './nuxt.config.{js,ts}', // Incluye la configuración de Nuxt
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#1a202c', // Fondo oscuro
        },
        rosa: '#ff04b4',
      },
    },
  },
  plugins: [],
};