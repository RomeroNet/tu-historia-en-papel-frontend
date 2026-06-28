<script setup lang="ts">
    defineProps(['image'])
</script>

<template>
    <div class="portfolio-banner">
        <NuxtPicture
            class="portfolio-banner__image"
            :src="`/images/portfolio/portfolio_${image}.jpg`"
            format="avif,webp"
            legacy-format="jpg"
            alt=""
            preload
            loading="eager"
            />
        <div class="portfolio-banner__content">
            <h1 class="hero-banner__label text-uppercase">Invitaciones</h1>
            <span class="hero-banner__label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla tincidunt aliquam. Aenean hendrerit tempor dolor, in blandit ligula molestie vitae.</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/vars.scss";

.portfolio-banner {
    display: flex;
    position: relative;
    width: 100%;
    height: 45vh;
    overflow: hidden;
    align-items: center;

    &__image {
        position: absolute;
        inset: -20px;
        z-index: 0;

        :deep(img) {
            display: block;
            height: auto;
            width: calc(100% + 40px);
            margin: 0 auto;
            transform: translateY(-50%);
            filter: blur(10px);
        }
    }

    &__content {
        position: relative;
        z-index: 1;
        margin: 0 auto;
        padding-left: 6em;
        width: calc(50% - 12em);

        h1 {
            display: block;
            color: vars.$brand-pink;
        }

        span {
            color: white;
        }
    }
}

@media (max-width: vars.$mobile-width) {
    .portfolio-banner {
        height: calc(65vh - 20px);

        &__image {
            :deep(img) {
                display: block;
                height: 250%;
            }
        }

        &__content {
            width: 80%;
            padding-left: 0;

            h1 {
                text-align: center;
            }

            span {
                display: block;
                text-align: center;
            }
        }

    }
}
</style>
