// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      standalone: false,
    },
  },
  colorMode: {
    preference: 'dark',
  },
})
