<template>
  <AppHeader></AppHeader>

  <main>
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
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

html {
  overflow-y: scroll;
}

h1, h2, h3, .score {
  font-family: 'Oxanium', sans-serif;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  min-height: 100vh;
  color: #e0e0e0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
