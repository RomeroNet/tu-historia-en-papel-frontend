<script setup lang="ts">
import Header from "../components/Header/Header.vue";

useHead({
  title: "Tu Historia en Papel",
  meta: [
    {
      name: "description",
      content: "Tu Historia en Papel, diseños a medida."
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
