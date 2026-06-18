<script setup lang="ts">

import Logo from "~/components/Header/Logo.vue";
import HeaderSocials from "~/components/Header/HeaderSocials.vue";
</script>

<template>
    <header>
        <Logo class="logo"/>

        <nav aria-label="Navegacion principal">
            <ul>
                <li>
                    <NuxtLink to="/">Inicio</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Sobre mí</NuxtLink>
                </li>
                <li>Servicios</li>
                <li>Plantillas</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <HeaderSocials class="socials"/>
    </header>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/vars.scss";

a {
    text-decoration: none;
}

header {
    display: flex;
    align-items: center;
    background: white;

    .logo {
        flex-basis: 20vw;
    }

    nav {
        flex-grow: 1;

        ul {
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            margin: 0 auto;
            padding: 5vh;

            li {
                flex: 1;
                max-width: 15%;
                color: black;
                text-transform: uppercase;
                font-weight: 600;
            }
        }
    }

    .socials {
        flex-basis: 20vw;
        text-align: center;
    }
}

@media (max-width: vars.$mobile-width) {
    header {
        > .logo {
            flex-basis: 100%;
            margin: 1.5vh 0;
        }

        > nav {
            display: none;
        }

        > .socials {
            display: none;
        }
    }
}
</style>
