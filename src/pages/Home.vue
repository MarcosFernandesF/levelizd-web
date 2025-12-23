<template>
  <div>
    <section id="trending-container" class="section-container">
      <h2>Trending Games</h2>
      <div class="section-content">
        <div v-for="game in trendingGames" :key="game.id" class="game-card">
          <img :src="game.coverUrl" :alt="game.title" class="game-image">
        </div>
      </div>
    </section>

    <section id="reviews-container" class="section-container">
      <h2>Popular Reviews</h2>
    </section>
  </div>
</template>

<script setup>
const trendingGames = [
  {
    id: 1,
    title: "Baldur's Gate 3",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg"
  },
  {
    id: 2,
    title: "Elden Ring",
    coverUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/Elden_Ring_capa.jpg/330px-Elden_Ring_capa.jpg"
  },
  {
    id: 3,
    title: "Zelda: Tears of the Kingdom",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/250px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg"
  },
  {
    id: 4,
    title: "God of War Ragnarök",
    coverUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg/330px-God_of_War_Ragnar%C3%B6k_capa.jpg"
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    coverUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f7/Cyberpunk_2077_capa.png/330px-Cyberpunk_2077_capa.png"
  }
];
</script>

<style scoped>
h2 {
  color: rgb(194, 60, 36);
  margin-bottom: 10px;
}

.section-container {
  margin: 50px 10%;
}

.section-content {
  display: flex;
  margin-top: 10px;
  gap: 1em;
}

.game-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  aspect-ratio: 2/3;
}

.game-image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform .2s;
}

.game-image:hover {
  transform: scale(1.1);
}

</style>