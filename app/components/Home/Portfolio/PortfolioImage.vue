<script setup lang="ts">
    const props = defineProps({
        image: {
            type: String,
            required: true
        },
        format: {
            type: String,
            default: 'jpg'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        }
    });

    const source = computed(
        () => `/images/portfolio/portfolio_${props.image}.${props.format}`
    );
    const image = useImage();
    const backgroundImage = computed(() => `url("${image(source.value, {
        width: 384,
        format: 'webp',
        quality: 80
    })}")`);

</script>

<template>
    <div class="portfolio__card">
        <h3 class="portfolio__card__title">{{ title }}</h3>
        <NuxtLink
            class="portfolio__card__media-link"
            :to="`/portfolio/${destination}`"
            :aria-label="`Ver ${title}`"
        >
            <div class="portfolio__card__media">
                <div
                    class="portfolio__card__background"
                    :style="{ backgroundImage }"
                    aria-hidden="true"
                />
                <NuxtPicture
                    class="portfolio__card__image"
                    :src="source"
                    format="webp"
                    :legacy-format="format"
                    sizes="xs:80vw sm:30vw md:30vw lg:30vw xl:480px"
                    densities="1x 2x"
                    alt=""
                    loading="lazy"
                />
            </div>
        </NuxtLink>
        <div class="portfolio__card__content">
            <span>{{ description }}</span>
        </div>

        <NuxtLink class="portfolio__card__button" :to="`/portfolio/${destination}`">
            <span>Más información</span>
        </NuxtLink>
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

        &__title {
            display: flex;
            min-height: 3em;
            margin: 0 0 1rem;
            align-items: center;
            justify-content: center;
            color: vars.$brand-pink;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
        }

        &__media-link {
            display: block;
            width: 100%;

            &:focus-visible {
                outline: 3px solid vars.$brand-pink;
                outline-offset: 3px;
            }
        }

        &__media {
            position: relative;
            display: block;
            width: 100%;
            aspect-ratio: 4 / 5;
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
            display: flex;
            flex: 1 1 auto;
            width: 100%;

            span {
                display: block;
                max-width: 90%;
                margin: 2.5vh auto 0;
                text-align: center;
            }
        }

        &__button {
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
        .portfolio__card {
            margin-bottom: 3.5vh;

            &__title {
                min-height: 0;
            }

            &__media-link {
                max-width: 80vw;
            }

            &__content {
                span {
                    max-width: 80%;
                }
            }
        }
    }
</style>
