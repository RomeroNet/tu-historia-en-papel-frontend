<script setup lang="ts">

</script>

<template>
    <NuxtLink to="/" class="brand-logo" aria-label="Tu Historia Creativa">
        <span class="brand-logo__title font-handwritten">Tu Historia Creativa</span>
        <span class="brand-logo__subtitle font-subtitle">DISEÑO · ILUSTRACION</span>
    </NuxtLink>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/vars.scss";

.brand-logo {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    &__title {
        color: black;
        display: inline-flex;
        font-size: 2.5rem;
    }

    &__subtitle {
        color: vars.$brand-pink;
        font-size: 1rem;
        font-weight: 700;
    }
}
</style>
