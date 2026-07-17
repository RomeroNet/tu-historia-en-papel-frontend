<script setup lang="ts">
import MailingForm from '~/components/Portfolio/MailingForm.vue';
import PortfolioBanner from '~/components/Portfolio/PortfolioBanner.vue';
</script>

<template>
    <main>
        <PortfolioBanner
            image="business"
            format="png"
            title="Carteles publicitarios"
            description="Diseñamos carteles creativos que comunican tu mensaje y hacen destacar tu negocio."
        />
        <MailingForm />
    </main>
</template>
