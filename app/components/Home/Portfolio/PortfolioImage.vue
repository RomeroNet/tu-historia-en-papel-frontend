<script setup lang="ts">
    defineProps(['image', 'title', 'description'])
</script>

<template>
    <div class="portfolio__card">
        <NuxtPicture
            class="portfolio__card__image"
            :src="`/images/portfolio/portfolio_${image}.jpg`"
            format="avif,webp"
            legacy-format="png"
            alt=""
            preload
            loading="eager"
            />
        <div class="portfolio__card__content">
            <h3>{{ title }}</h3>
            <span>{{ description }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use "~/assets/scss/vars.scss";

    .portfolio__card {
        display: flex;
        flex: 1 1 0;
        flex-direction: column;
        align-items: center;
        min-width: 0;

        &:first-of-type {
            margin-left: 12.5vw;
        }

        &:last-of-type {
            margin-right: 12.5vw;
        }

        &__image {
            display: block;
            width: 100%;
            max-width: 20vw;
            margin: auto 0;

            :deep(img) {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        &__content {
            h3 {
                color: vars.$brand-pink;
                text-transform: uppercase;
                font-weight: 700;
            }
        }
    }
</style>
