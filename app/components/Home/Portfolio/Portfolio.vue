<script setup lang="ts">

import PortfolioImage from "~/components/Home/Portfolio/PortfolioImage.vue";
</script>

<template>
    <h2>Mi portafolio</h2>
    <span>Aquí encontrarás una muestra de mis proyectos en diferentes áreas de diseño</span>
    <div class="portfolio__container">
        <PortfolioImage
            image="birthday"
            title="Invitaciones"
            description="Diseños personalizados para cada ocasión especial"
        />
        <PortfolioImage
            image="business"
            title="Carteles publicitarios"
            description="Impacta y comunica tu mensaje con diseños creativos"
        />
        <PortfolioImage
            image="restaurant"
            title="Restaurantes"
            description="Diseño de menús, pizarras, branding y más para tu negocio"
        />
    </div>
</template>

<style scoped lang="scss">
    @use "~/assets/scss/vars.scss";

    h2 {
        text-align: center;
        text-transform: uppercase;
        color: vars.$brand-pink;
    }

    span {
        display: block;
        text-align: center;
        margin-bottom: 5vh;
    }

    .portfolio {
        &__container {
            display: flex;
            align-items: stretch;
            gap: 12.5vw;
        }
    }
</style>
