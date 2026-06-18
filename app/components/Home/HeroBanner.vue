<script setup lang="ts">

</script>

<template>
    <div class="hero__container">
        <div>
            <div class="hero__title">
                <span class="pink uppercase">¡Hola! Soy</span>
                <span class="handwritten">Patricia</span>
                <span class="pink uppercase">Diseñadora e ilustradora</span>
            </div>

            <span class="hero__subtitle">Me encanta transformar ideas en diseños únicos y llenos de color.</span>
        </div>
    </div>
</template>

<style scoped>
.hero__container {
    --font-size: 1.8em;
    background-image: url("~/assets/images/hero_banner_desktop.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 10vh 0;
    text-align: center;

    .hero__title {
        margin-bottom: 1.5em;
    }

    div {
        display: inline-flex;
        flex-direction: column;
        text-align: left;
        margin-right: 12em;
    }

    .handwritten {
        font-size: calc(var(--font-size) + 7em);
    }

    .pink {
        color: rgb(var(--brand-pink));
        font-size: var(--font-size);
        font-weight: 800;
    }

    .hero__subtitle {
        width: 50%;
    }
}

</style>
