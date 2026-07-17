<script setup lang="ts">
import MailingForm from '~/components/Portfolio/MailingForm.vue';
import PortfolioBanner from '~/components/Portfolio/PortfolioBanner.vue';
</script>

<template>
    <main>
        <PortfolioBanner
            image="restaurant"
            title="Restaurantes"
            description="Creamos piezas visuales que hacen memorable la experiencia de tu restaurante."
        />
        <MailingForm />
    </main>
</template>
