<script setup lang="ts">
    defineProps(['image', 'title', 'description', 'destination'])
</script>

<template>
    <h3>{{ title }}</h3>
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

        <NuxtLink :to="`/portfolio/${destination}`">
            <span>Ver más</span>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
    @use "~/assets/scss/vars.scss";

    h3 {
        display: none;
        color: vars.$brand-pink;
        text-transform: uppercase;
        font-weight: 700;
        text-align: center;
    }

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
                display: inherit;
                color: vars.$brand-pink;
                text-transform: uppercase;
                font-weight: 700;
            }
        }

        & > a{
            width: 60%;
            text-align: center;
            text-decoration: none;
            color: white;
            background-color: vars.$brand-pink;
            padding: 0.5em;
            border-radius: 10px;
            margin: 2.5vh 0;
            transition: filter 0.5s ease;

            &:hover {
                filter: brightness(75%);
            }
        }
    }

    @media (max-width: vars.$mobile-width) {
        h3 {
            display: block;
        }

        .portfolio__card {
            margin-bottom: 3.5vh;

            &:first-of-type {
                margin-left: inherit;
            }

            &:last-of-type {
                margin-right: inherit;
            }

            &__image {
                max-width: 80vw;
            }

            &__content {
                h3 {
                    display: none;
                }

                span {
                    display: block;
                    max-width: 80%;
                    margin: 2.5vh auto;
                    text-align: center;
                }
            }
        }
    }
</style>
