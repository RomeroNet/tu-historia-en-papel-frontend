// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
      enabled: true,
  },
  css: [
      'normalize.css/normalize.css',
      '@fontsource/nunito-sans/600.css',
      '@fontsource/nunito-sans/700.css',
      '@fontsource/caveat/400.css',

      '~/assets/scss/main.scss',
  ]
})
