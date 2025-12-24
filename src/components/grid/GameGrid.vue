<template>
  <div class="section-content">
    <GameCard v-for="game in props.games" :key="game.id" :game="game" />
  </div>
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
}

</style>