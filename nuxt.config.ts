export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: { preset: 'static' },
  ssr: false,
  app: {
    baseURL: '/'   // keep default
  },
  vite: {
    base: './'     // ✅ makes paths relative for GitHub Pages
  }
})
