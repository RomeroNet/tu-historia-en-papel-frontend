<script setup lang="ts">

</script>

<template>
  <NuxtLink to="/" class="logo" aria-label="Tu Historia Creativa">
    <span class="logo__title">Tu Historia Creativa</span>
    <span class="logo__subtitle">DISEÑO · ILUSTRACION</span>
  </NuxtLink>
</template>

<style scoped>
.logo {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.logo__title {
  color: black;
  display: inline-flex;
  font-family: 'Caveat', cursive, system-ui;
  font-size: 2.5rem;
}

.logo__subtitle {
  font-family: 'Nunito Sans', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: rgb(var(--brand-pink))
}
</style>