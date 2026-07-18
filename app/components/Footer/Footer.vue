<script setup lang="ts">
import InstagramLink from "~/components/InstagramLink.vue";
import WhatsAppLink from "~/components/WhatsAppLink.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="site-footer">
        <span>CreaHistoria Studio, {{ currentYear }}.</span>
        <span>Todos los derechos reservados.</span>
        <nav class="site-footer__legal" aria-label="Información legal">
            <NuxtLink to="/politica-de-privacidad">Política de privacidad</NuxtLink>
        </nav>
        <div class="site-footer__social-links">
            <WhatsAppLink />
            <InstagramLink />
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "~/assets/scss/vars.scss";

.site-footer {
    margin-top: 5vh;
    padding: 1.5rem;
    color: white;
    background-color: vars.$brand-pink;
    text-align: center;

    span {
        display: block;

        & + span {
            margin-top: 0.25rem;
        }
    }

    &__social-links {
        display: none;
    }

    &__legal {
        margin-top: 0.5rem;

        a {
            color: inherit;
            text-underline-offset: 0.2em;

            &:hover {
                text-decoration-thickness: 2px;
            }
        }
    }
}

@media (max-width: vars.$mobile-width) {
    .site-footer {
        margin-top: 3vh;

        &__social-links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 0.25rem;
        }
    }
}
</style>
