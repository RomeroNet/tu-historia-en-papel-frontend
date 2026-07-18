// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {
        enabled: true,
    },

    modules: ['@nuxt/image'],
    runtimeConfig: {
        smtpHost: '',
        smtpPort: 465,
        smtpUser: '',
        smtpPassword: '',
        smtpTo: '',
        public: {
            siteUrl: 'https://creahistoriastudio.com'
        }
    },
    image: {
        quality: 90,
        format: ['webp'],
        screens: {
            xs: 360,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1500,
            '2xl': 1920
        }
    },

    css: [
        'normalize.css/normalize.css',
        '@fontsource/nunito-sans/latin-400.css',
        '@fontsource/nunito-sans/latin-600.css',
        '@fontsource/nunito-sans/latin-700.css',
        '@fontsource/caveat/latin-400.css',

        '~/assets/scss/main.scss',
    ],

    routeRules: {
        '/': { prerender: true },
        '/portfolio/birthday': { prerender: true },
        '/portfolio/business': { prerender: true },
        '/portfolio/restaurant': { prerender: true },
        '/portfolio/menu': { prerender: true },
        '/politica-de-privacidad': { prerender: true },
        '/sitemap.xml': { prerender: true }
    }
})
