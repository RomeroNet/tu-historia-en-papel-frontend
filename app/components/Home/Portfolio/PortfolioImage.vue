<script setup lang="ts">
    defineProps({
        image: String,
        format: {
            type: String,
            default: 'jpg'
        },
        title: String,
        description: String,
        destination: String
    });


</script>

<template>
    <h3>{{ title }}</h3>
    <div class="portfolio__card">
        <div class="portfolio__card__media">
            <div
                class="portfolio__card__background"
                :style="{ backgroundImage: `url(/images/portfolio/portfolio_${image}.${format})` }"
                aria-hidden="true"
            />
            <NuxtPicture
                class="portfolio__card__image"
                :src="`/images/portfolio/portfolio_${image}.${format}`"
                format="avif,webp"
                legacy-format="png"
                alt=""
                preload
                loading="eager"
            />
        </div>
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

        &__media {
            position: relative;
            display: block;
            width: 100%;
            aspect-ratio: 4 / 5;
            margin: auto 0;
            overflow: hidden;
            background-color: rgb(245 245 245);
        }

        &__background {
            position: absolute;
            inset: -1.5rem;
            background-position: center;
            background-size: cover;
            filter: blur(20px) brightness(80%);
            transform: scale(1.08);
        }

        &__image {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            height: 100%;

            :deep(img) {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
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

            &__media {
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
