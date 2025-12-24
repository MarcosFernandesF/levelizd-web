<template>
  <ul class="section-content">
    <li v-for="game in props.games" :key="game.id">
      <GameCard :game="game" />
    </li>
  </ul>
</template>

<script setup>
import GameCard from '../cards/GameCard.vue';

const props = defineProps({
  games: Array
})

</script>

<style scoped>

.section-content {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 10px;
  gap: 1em;
  list-style: none;
  padding: 0;
}

.section-content li {
  display: contents;
}

/* Desktops pequenos */
@media (max-width: 1200px) {
  .section-content {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>