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

<!--        <nav class="site-header__nav" aria-label="Navegacion principal">-->
<!--            <ul class="site-header__nav-list">-->
<!--                <li class="site-header__nav-item">-->
<!--                    <NuxtLink to="/" class="site-header__nav-link">Inicio</NuxtLink>-->
<!--                </li>-->
<!--                <li class="site-header__nav-item">-->
<!--                    <NuxtLink to="/contact" class="site-header__nav-link">Sobre mí</NuxtLink>-->
<!--                </li>-->
<!--                <li class="site-header__nav-item">Servicios</li>-->
<!--                <li class="site-header__nav-item">Plantillas</li>-->
<!--                <li class="site-header__nav-item">Contacto</li>-->
<!--            </ul>-->
<!--        </nav>-->

<!--        <HeaderSocials class="site-header__socials"/>-->
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

    &__nav-link {
        text-decoration: none;
    }

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

    &__nav {
        flex-grow: 1;
    }

    &__nav-list {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        margin: 0 auto;
        padding: 5vh;
    }

    &__nav-item {
        flex: 1;
        max-width: 15%;
        color: black;
        text-transform: uppercase;
        font-weight: 600;
    }

    &__socials {
        flex-basis: $side-column-width;
        text-align: center;
    }

    @media (max-width: vars.$mobile-width) {
        &__logo {
            flex-basis: 100%;
            margin: 1.5vh 0;
        }

        &__social-links {
            display: none;
        }

        &__nav,
        &__socials {
            display: none;
        }
    }
}
</style>
