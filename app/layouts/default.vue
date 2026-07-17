<script setup lang="ts">
import Header from "../components/Header/Header.vue";

useHead({
  title: "CreaHistoria Studio",
  meta: [
    {
      name: "description",
      content: "CreaHistoria Studio, diseño e ilustración a medida."
    },
  ],
  htmlAttrs: {
    lang: "es"
  }
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <Header />
  <slot />
</template>

<style lang="scss" scoped>

</style>
