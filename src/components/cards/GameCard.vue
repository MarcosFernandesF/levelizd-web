<template>
  <div class="game-card">
    <img :src="props.game.coverUrl" :alt="props.game.title" class="game-image">
  </div>
</template>

<script setup>

const props = defineProps({
  game: Object
})

</script>

<style scoped>

.game-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  aspect-ratio: 2/3;
  cursor: pointer;
}

.game-image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.game-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(139, 92, 246, 0.4);
}

</style>
