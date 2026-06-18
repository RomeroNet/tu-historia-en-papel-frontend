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

<style lang="scss" scoped>
@use "~/assets/scss/vars.scss";

.hero__container {
    --font-size: 1.8em;
    --handwritten-extra-size: 7em;
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
        font-size: calc(var(--font-size) + var(--handwritten-extra-size));
    }

    .pink {
        color: rgb(var(--brand-pink));
        font-size: var(--font-size);
        font-weight: 700;
    }

    .hero__subtitle {
        width: 50%;
    }
}

@media (max-width: vars.$mobile-width) {
    .hero__container {
        --font-size: 1.2em;
        --handwritten-extra-size: 3.5em;
        padding: 7.5vh 0;

        div {
            margin-right: 0;

            > .hero__subtitle {
                margin: 0 auto;
                width: 80%;
                text-align: center;
            }
        }

        > div > div {
            text-align: center;
        }
    }
}

</style>
