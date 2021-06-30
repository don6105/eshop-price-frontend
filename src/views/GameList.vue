<template>

  <div class="search-box">
    <div class="page-title">Game List</div>
    <div class="search-input">
      <input v-model="query" @keyup.enter="searchGame" placeholder="Search game">
    </div>
    <div class="search-button">
      <button v-on:click="searchGame">Submit</button>
    </div>
    <div class="sort-selection">
      <select v-model="sort" v-on:change="searchGame">
        <option value="" hidden disabled selected>Sort</option>
        <option value="discount desc"> Discount </option>
        <option value="price asc"> Price 0 > 9 </option>
        <option value="price desc"> Price 9 > 0 </option>
        <option value="title asc"> Game A > Z </option>
        <option value="title desc"> Game Z > A </option>
        <option value="updatetime asc"> Older </option>
        <option value="updatetime desc"> Newer </option>
      </select>
    </div>
  </div>

  <div class="game-list">
    <GameCard v-for="game in games" :key="game" :game="game"/>
  </div>
  
</template>

<script src="@/scripts/GameList.js"></script>

<style scoped src="@/styles/GameList.css"></style>