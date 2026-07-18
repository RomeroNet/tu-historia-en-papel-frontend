<script setup lang="ts">
import InstagramLink from "~/components/InstagramLink.vue";
import WhatsAppLink from "~/components/WhatsAppLink.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="site-footer">
        <span>CreaHistoria Studio, {{ currentYear }}.</span>
        <span>Todos los derechos reservados.</span>
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
