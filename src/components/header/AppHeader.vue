<template>
  <header class="top-bar">
    <h1>Levelizd</h1>

    <nav>
      <ul class="navigation-list">
        <li>
          <RouterLink to="/">Reviews</RouterLink>
        </li>
        <li>
          <RouterLink to="/">Games</RouterLink>
        </li>
        <li>
          <RouterLink to="/">Genres</RouterLink>
        </li>
        <li>
          <RouterLink to="/">Genres</RouterLink>
        </li>
      </ul>
    </nav>

    <div class="search-user-container">
      <search>
        <form class="search-form">
          <input class="input-search" id="game" type="search" placeholder="Find a game" />
          
          <button type="submit" class="search-btn">
            <MagnifyingGlassIcon class="search-icon" />
          </button>
        </form>
      </search>
      <UserCircleIcon class="user-icon"></UserCircleIcon>
    </div>

  </header>
</template>

<script setup>
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>

h1, span {
  margin: 0;
  color: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

.top-bar {
  display: flex;
  align-items: center;
  padding: 15px 0px;
  background: rgba(30, 20, 60, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  justify-content: space-around;
}

.navigation-list {
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
  font-weight: bold;
}

.search-form {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.input-search {
  border: none;
  outline: none;
  padding: 5px;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #8b5cf6;
  transition: color 0.2s;
}

.search-btn:hover {
  color: #6d28d9;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.user-icon {
  width: 30px;
  height: 30px;
  color: #fff;
}

.search-user-container {
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
}

</style>