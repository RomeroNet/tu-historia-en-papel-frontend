<script setup lang="ts">

</script>

<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
  a {
    color: white;
    text-decoration: none;
  }

  nav {
    background: black;

    ul {
      display: flex;
      width: 60%;
      list-style-type: none;
      margin: 0;
      padding: 5vh;

      li {
        flex: 1;
        max-width: 15%;
        color: white;
      }
    }
  }
</style>