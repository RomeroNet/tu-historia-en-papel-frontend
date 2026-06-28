// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {
        enabled: true,
    },

    modules: ['@nuxt/image'],
    image: {
        quality: 80,
        format: ['avif', 'webp'],
        screens: {
            xs: 360,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536
        }
    },

    css: [
        'normalize.css/normalize.css',
        '@fontsource/nunito-sans/600.css',
        '@fontsource/nunito-sans/700.css',
        '@fontsource/caveat/400.css',

        '~/assets/scss/main.scss',
    ],

    routeRules: {
        '/': { prerender: true },
        '/portfolio/birthday': { prerender: true }
    }
})
