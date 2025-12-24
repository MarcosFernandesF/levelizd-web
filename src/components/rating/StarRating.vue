<template>
  <div class="star-rating">
    <div
      v-for="i in maxStars"
      :key="i"
      class="star"
      :class="{ 
        'filled': i <= Math.floor(value), 
        'half-filled': i === Math.ceil(value) && value % 1 !== 0 
      }"
    >
      ★
    </div>
  </div>
</template>

<script setup>

defineProps({
  value: {
    type: Number,
    default: 0,
  },
  maxStars: {
    type: Number,
    default: 5,
  },
});

</script>

<style scoped>
.star-rating {
  display: inline-flex;
  gap: 2px;
}

.star {
  font-size: 20px;
  color: rgb(222, 222, 222);
  user-select: none;
}

.filled {
  color: gold;
}

.half-filled {
  background: linear-gradient(90deg, gold 50%, rgb(222, 222, 222) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>