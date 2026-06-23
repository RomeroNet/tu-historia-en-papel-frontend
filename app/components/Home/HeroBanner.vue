<script setup lang="ts">

</script>

<template>
    <div class="hero-banner">
        <NuxtPicture
            class="hero-banner__media"
            src="/images/hero_banner_desktop.png"
            format="avif,webp"
            legacy-format="png"
            width="2172"
            height="724"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
            alt=""
            preload
            loading="eager"
            />
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

    position: relative;
    overflow: hidden;
    padding: 10vh 0;
    text-align: center;

    &__media {
        display: block;
        position: absolute;
        inset: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;

        :deep(img) {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    &__content {
        position: relative;
        z-index: 1;
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
