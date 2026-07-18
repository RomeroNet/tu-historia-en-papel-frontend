<script setup lang="ts">
import { useId } from 'vue';

const gradientId = useId();
</script>

<template>
    <a
        class="instagram-link"
        href="https://www.instagram.com/creahistoriastudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Seguir a CreaHistoria Studio en Instagram"
    >
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <defs>
                <linearGradient :id="gradientId" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#feda75" />
                    <stop offset="25%" stop-color="#fa7e1e" />
                    <stop offset="50%" stop-color="#d62976" />
                    <stop offset="75%" stop-color="#962fbf" />
                    <stop offset="100%" stop-color="#4f5bd5" />
                </linearGradient>
            </defs>
            <path
                :fill="`url(#${gradientId})`"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849C2.381 3.924 3.896 2.38 7.151 2.232 8.417 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
            />
        </svg>
    </a>
</template>

<style scoped lang="scss">
.instagram-link {
    display: inline-flex;
    width: 3rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    color: #d62976;
    transition: filter 0.25s ease, transform 0.25s ease;

    svg {
        width: 1.75rem;
        height: 1.75rem;
    }

    &:hover {
        filter: brightness(90%);
        transform: scale(1.05);
    }

    &:focus-visible {
        outline: 3px solid currentColor;
        outline-offset: 3px;
    }
}
</style>
