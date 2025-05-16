import { esES } from '@clerk/localizations'
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify',
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'dark', // Aplica el modo oscuro por defecto
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@clerk/nuxt'],
  pages: true,
  image: {
    // Configura las fuentes permitidas para las imágenes
    domains: ['localhost'], // Asegúrate de incluir el dominio correcto
    dir: 'public/img', // Ruta donde se encuentran las imágenes
  },
  clerk: {
    localization: esES,
  },
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    NUXT_CLERK_SECRET_KEY: process.env.NUXT_CLERK_SECRET_KEY,
  },
})
