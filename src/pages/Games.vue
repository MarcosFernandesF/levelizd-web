<template>
  <section class="section-container">
    <h2>All Games</h2>
    <GameGrid :games="allGames"/>
  </section>

</template>

<script setup>
import GameGrid from '@/components/grid/GameGrid.vue';
import { allGames } from '@/data/gamesData.js';

</script>

<style scoped>
h2 {
  color: #fff;
  margin-bottom: 15px;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.section-container {
  margin: 50px 10%;
}
</style>