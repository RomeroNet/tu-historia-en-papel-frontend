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
        }
    });

    usePageSeo({
        title: `${props.title} | CreaHistoria Studio`,
        description: props.description,
        image: `/images/portfolio/portfolio_${props.image}.${props.format}`,
        imageAlt: `${props.title}: proyecto de CreaHistoria Studio`
    });
</script>

<template>
    <div class="portfolio-banner">
        <NuxtPicture
            class="portfolio-banner__image"
            :src="`/images/portfolio/portfolio_${image}.${format}`"
            format="webp"
            :legacy-format="format"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:1254px"
            densities="1x"
            alt=""
            preload
            loading="eager"
            />
        <div class="portfolio-banner__content">
            <h1 class="text-uppercase">{{ title }}</h1>
            <span>{{ description }}</span>
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

    &::after {
        position: absolute;
        inset: 0;
        z-index: 1;
        content: '';
        background: linear-gradient(
            90deg,
            rgb(0 0 0 / 75%),
            rgb(0 0 0 / 50%),
            rgb(0 0 0 / 15%)
        );
        pointer-events: none;
    }

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
        z-index: 2;
        margin: 0 auto;
        padding-left: 6em;
        width: calc(50% - 12em);

        h1 {
            display: block;
            color: vars.$brand-pink;
        }

        span {
            color: white;
            text-shadow: 0 1px 3px rgb(0 0 0 / 80%);
        }
    }
}

@media (max-width: vars.$mobile-width) {
    .portfolio-banner {
        height: calc(65vh - 20px);

        &::after {
            background: rgb(0 0 0 / 58%);
        }

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
