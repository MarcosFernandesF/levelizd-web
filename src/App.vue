<template>
  <AppHeader></AppHeader>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import AppHeader from './components/header/AppHeader.vue';

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h1, h2, h3, .score {
  font-family: 'Oxanium', sans-serif;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #12f3;
}
</style>
