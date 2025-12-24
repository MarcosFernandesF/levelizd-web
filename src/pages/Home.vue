<template>
  <div>
    <section id="trending-container" class="section-container">
      <div class="section-header">
        <h2>Trending Games</h2>
        <RouterLink to="/games">See all ></RouterLink>
      </div>
      <GameGrid :games="trendingGames"/>  
    </section>

    <section id="reviews-container" class="section-container">
      <h2>Popular Reviews</h2>
    </section>
  </div>
</template>

<script setup>
import GameGrid from '@/components/grid/GameGrid.vue';
              import { trendingGames } from '@/data/gamesData.js';

</script>

<style scoped>
h2 {
  color: #fff;
  margin-bottom: 15px;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-container {
  margin: 50px 10%;
}

a {
  color: inherit;
  text-decoration: none;
  font-size: 1.0rem;
}


</style>