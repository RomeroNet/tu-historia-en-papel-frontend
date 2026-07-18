<script setup lang="ts">

import InstagramLink from "~/components/InstagramLink.vue";
import Logo from "~/components/Header/Logo.vue";
import WhatsAppLink from "~/components/WhatsAppLink.vue";
</script>

<template>
    <header class="site-header">
        <Logo class="site-header__logo"/>
        <div class="site-header__social-links">
            <WhatsAppLink />
            <InstagramLink />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/vars.scss";

.site-header {
    $side-column-width: 20vw;

    display: flex;
    min-height: 12.5vh;
    align-items: center;
    background: white;

    &__logo {
        flex-basis: $side-column-width;
    }

    &__social-links {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-right: 5vw;
        margin-left: auto;
    }

    @media (max-width: vars.$mobile-width) {
        &__logo {
            flex-basis: 100%;
            margin: 1.5vh 0;
        }

        &__social-links {
            display: none;
        }

    }
}
</style>
