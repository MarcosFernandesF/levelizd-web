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
      <div class="section-header">
        <h2>Popular Reviews</h2>
        <RouterLink to="/">See all ></RouterLink>
      </div>
      <div>
        <ul class="review-container">
          <li v-for="review in popularReviews" :key="review.id">
            <p>{{ review.userName }} reviewed {{ review.gameName }} ({{ review.reviewDate }})</p>
            <div class="image-review-container">
              <img :src="review.gameCoverUrl" :alt="review.gameName" class="game-review-image">
              <div class="review-rating-container">
                <span>{{ review.reviewText }}</span>
                <span>{{ review.rating }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import GameGrid from '@/components/grid/GameGrid.vue';
import { trendingGames } from '@/data/gamesData.js';
import { popularReviews } from '@/data/reviewsData';

</script>

<style scoped>
.review-rating-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: top;
  margin-top: 10px;
  gap: 1rem;
}

.image-review-container {
  display: flex;
  justify-content: center;
  align-items: top;
  margin-top: 10px;
  gap: 1rem;
}

.review-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
  gap: 1.5em;
  list-style: none;
  padding: 0;
}

.game-review-image {
  width: 10%;
  height: 50%;
  border-radius: 10px;
  object-fit: cover;
}

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