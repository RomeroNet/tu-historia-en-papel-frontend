<script setup lang="ts">
import MailingForm from '~/components/Portfolio/MailingForm.vue';
import PortfolioBanner from '~/components/Portfolio/PortfolioBanner.vue';
</script>

<template>
    <main>
        <PortfolioBanner
            image="menu"
            format="png"
            title="Menús"
            description="Diseñamos menús claros y atractivos que reflejan la personalidad de tu negocio."
        />
        <MailingForm />
    </main>
</template>
