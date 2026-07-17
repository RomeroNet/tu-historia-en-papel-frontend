<script setup lang="ts">
import {computed, nextTick, onBeforeUnmount, onMounted, ref} from 'vue';
import PortfolioImage from '~/components/Home/Portfolio/PortfolioImage.vue';

const portfolioItems = [
    {
        image: 'birthday',
        title: 'Invitaciones',
        description: 'Diseños personalizados para cada ocasión especial',
        destination: 'birthday'
    },
    {
        image: 'business',
        format: 'png',
        title: 'Carteles publicitarios',
        description: 'Impacta y comunica tu mensaje con diseños creativos',
        destination: 'business'
    },
    {
        image: 'restaurant',
        title: 'Restaurantes',
        description: 'Diseño de menús, pizarras, branding y más para tu negocio',
        destination: 'restaurant'
    },
    {
        image: 'menu',
        format: 'png',
        title: 'Menús',
        description: 'Diseños de menús personalizados que reflejan la esencia de tu negocio',
        destination: 'menu'
    }
];

const carouselViewport = ref<HTMLElement | null>(null);
const currentIndex = ref(0);
const visibleSlides = ref(3);
const maxIndex = computed(() => Math.max(portfolioItems.length - visibleSlides.value, 0));

const getSlideStep = () => {
    const viewport = carouselViewport.value;
    const slide = viewport?.querySelector<HTMLElement>('.portfolio__slide');

    if (!viewport || !slide) {
        return 0;
    }

    const gap = Number.parseFloat(window.getComputedStyle(viewport).columnGap) || 0;

    return slide.offsetWidth + gap;
};

const goToSlide = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const viewport = carouselViewport.value;
    const slideStep = getSlideStep();
    const targetIndex = Math.min(Math.max(index, 0), maxIndex.value);

    currentIndex.value = targetIndex;

    if (viewport && slideStep) {
        viewport.scrollTo({
            left: targetIndex * slideStep,
            behavior
        });
    }
};

const syncCurrentIndex = () => {
    const viewport = carouselViewport.value;
    const slideStep = getSlideStep();

    if (!viewport || !slideStep) {
        return;
    }

    currentIndex.value = Math.min(
        Math.max(Math.round(viewport.scrollLeft / slideStep), 0),
        maxIndex.value
    );
};

const updateCarouselSize = () => {
    visibleSlides.value = window.matchMedia('(max-width: 450px)').matches ? 1 : 3;

    nextTick(() => goToSlide(Math.min(currentIndex.value, maxIndex.value), 'auto'));
};

onMounted(() => {
    updateCarouselSize();
    window.addEventListener('resize', updateCarouselSize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateCarouselSize);
});
</script>

<template>
    <section class="portfolio" aria-labelledby="portfolio-title">
        <h2 id="portfolio-title">Mi portafolio</h2>
        <span class="portfolio__intro">
            Aquí encontrarás una muestra de mis proyectos en diferentes áreas de diseño
        </span>
        <div class="portfolio__carousel">
            <button
                class="portfolio__control"
                type="button"
                aria-label="Ver proyecto anterior"
                :disabled="currentIndex === 0"
                @click="goToSlide(currentIndex - 1)"
            >
                <span aria-hidden="true">‹</span>
            </button>

            <div
                ref="carouselViewport"
                class="portfolio__viewport"
                role="region"
                aria-label="Proyectos del portafolio"
                @scroll.passive="syncCurrentIndex"
            >
                <div
                    v-for="item in portfolioItems"
                    :key="item.image"
                    class="portfolio__slide"
                >
                    <PortfolioImage v-bind="item" />
                </div>
            </div>

            <button
                class="portfolio__control"
                type="button"
                aria-label="Ver proyecto siguiente"
                :disabled="currentIndex === maxIndex"
                @click="goToSlide(currentIndex + 1)"
            >
                <span aria-hidden="true">›</span>
            </button>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use "~/assets/scss/vars.scss";

    .portfolio {
        h2 {
            text-align: center;
            text-transform: uppercase;
            color: vars.$brand-pink;
        }

        &__intro {
            display: block;
            text-align: center;
            margin-bottom: 5vh;
        }

        &__carousel {
            width: min(96vw, 1600px);
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto minmax(0, 1fr) auto;
            align-items: center;
            gap: clamp(0.5rem, 1.5vw, 1.5rem);
        }

        &__viewport {
            --portfolio-gap: clamp(1rem, 2vw, 2rem);

            display: flex;
            align-items: stretch;
            gap: var(--portfolio-gap);
            min-width: 0;
            overflow-x: auto;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            overscroll-behavior-inline: contain;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        &__slide {
            display: flex;
            flex: 0 0 calc((100% - (2 * var(--portfolio-gap))) / 3);
            flex-direction: column;
            min-width: 0;
            scroll-snap-align: start;
        }

        &__control {
            display: grid;
            width: clamp(2.25rem, 4vw, 3rem);
            aspect-ratio: 1;
            padding: 0;
            place-items: center;
            border: 0;
            border-radius: 50%;
            color: white;
            background-color: vars.$brand-pink;
            cursor: pointer;
            transition: filter 0.25s ease;

            span {
                font-size: 2rem;
                line-height: 1;
                transform: translateY(-0.08em);
            }

            &:hover:not(:disabled) {
                filter: brightness(75%);
            }

            &:focus-visible {
                outline: 3px solid currentColor;
                outline-offset: 3px;
            }

            &:disabled {
                opacity: 0.35;
                cursor: default;
            }
        }
    }

    @media (max-width: vars.$mobile-width) {
        .portfolio {
            &__intro {
                max-width: 80%;
                margin: 0 auto 2.5vh;
            }

            &__carousel {
                width: 95vw;
                gap: 0.25rem;
            }

            &__viewport {
                --portfolio-gap: 1rem;

                -webkit-overflow-scrolling: touch;
            }

            &__slide {
                flex-basis: 100%;
            }

            &__control {
                width: 2rem;

                span {
                    font-size: 1.65rem;
                }
            }
        }
    }
</style>
