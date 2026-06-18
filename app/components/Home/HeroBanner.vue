<script setup lang="ts">

</script>

<template>
    <div class="hero-banner">
        <div class="hero-banner__content">
            <div class="hero-banner__title">
                <span class="hero-banner__label text-uppercase">¡Hola! Soy</span>
                <span class="hero-banner__name font-handwritten">Patricia</span>
                <span class="hero-banner__label text-uppercase">Diseñadora e ilustradora</span>
            </div>

            <span class="hero-banner__subtitle">Me encanta transformar ideas en diseños únicos y llenos de color.</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/vars.scss";

.hero-banner {
    --hero-banner-label-size: 1.8em;
    --hero-banner-name-extra-size: 7em;

    background: url("~/assets/images/hero_banner_desktop.png") center / cover no-repeat;
    padding: 10vh 0;
    text-align: center;

    &__content {
        display: inline-flex;
        flex-direction: column;
        margin-right: 12em;
        text-align: left;
    }

    &__title {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5em;
    }

    &__label {
        color: vars.$brand-pink;
        font-size: var(--hero-banner-label-size);
        font-weight: 700;
    }

    &__name {
        font-size: calc(var(--hero-banner-label-size) + var(--hero-banner-name-extra-size));
    }

    &__subtitle {
        width: 75%;
    }

    @media (max-width: vars.$mobile-width) {
        --hero-banner-label-size: 1.2em;
        --hero-banner-name-extra-size: 3.5em;

        padding: 7.5vh 0;

        &__content {
            margin-right: 0;
            text-align: center;
        }

        &__subtitle {
            margin: 0 auto;
            width: 80%;
        }
    }
}
</style>
