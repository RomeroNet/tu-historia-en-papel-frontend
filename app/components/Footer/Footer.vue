<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="site-footer">
        CreaHistoria Studio, {{ currentYear }}, todos los derechos reservados.
    </footer>
</template>

<style scoped lang="scss">
@use "~/assets/scss/vars.scss";

.site-footer {
    margin-top: 5vh;
    padding: 1.5rem;
    color: white;
    background-color: vars.$brand-pink;
    text-align: center;
}

@media (max-width: vars.$mobile-width) {
    .site-footer {
        margin-top: 3vh;
    }
}
</style>
