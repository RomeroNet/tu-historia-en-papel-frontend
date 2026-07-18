<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue';
import Header from '~/components/Header/Header.vue';

useHead({
    title: 'CreaHistoria Studio',
    htmlAttrs: {
        lang: 'es'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }
    ]
});
</script>

<template>
    <NuxtRouteAnnouncer />
    <Header />
    <slot />
    <Footer />
</template>
