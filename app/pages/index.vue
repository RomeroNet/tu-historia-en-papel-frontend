<script setup lang="ts">

import HeroBanner from '~/components/Home/HeroBanner.vue';
import Portfolio from '~/components/Home/Portfolio/Portfolio.vue';

const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl.replace(/\/$/, '');

usePageSeo({
    title: 'CreaHistoria Studio | Diseño e ilustración',
    description: 'Diseño e ilustración a medida para eventos, restaurantes y negocios.'
});

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebSite',
                        '@id': `${siteUrl}/#website`,
                        url: `${siteUrl}/`,
                        name: 'CreaHistoria Studio',
                        alternateName: ['CreaHistoria', 'creahistoriastudio.com'],
                        inLanguage: 'es'
                    },
                    {
                        '@type': 'Organization',
                        '@id': `${siteUrl}/#organization`,
                        url: `${siteUrl}/`,
                        name: 'CreaHistoria Studio',
                        description: 'Estudio de diseño e ilustración a medida para eventos, restaurantes y negocios.',
                        sameAs: [
                            'https://www.instagram.com/creahistoriastudio/'
                        ],
                        contactPoint: {
                            '@type': 'ContactPoint',
                            telephone: '+34-665-466-974',
                            contactType: 'customer service',
                            areaServed: 'ES',
                            availableLanguage: 'Spanish'
                        }
                    }
                ]
            })
        }
    ]
});
</script>

<template>
    <main>
        <HeroBanner/>
        <Portfolio/>
    </main>
</template>
