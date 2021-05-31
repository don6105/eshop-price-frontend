<template>
  <div class="container mx-auto px-1 lg:px-2 lg:px-4">

    <div class="page-title">Game List</div>
    <div class="w-full lg:mb-4">
      <div class="search-input">
        <input v-model="keyword" @keyup.enter="searchGame" placeholder="Search game">
      </div>
      <div class="search-button">
       <button v-on:click="searchGame">Submit</button>
      </div>
      <div class="sort-selection">
        <select v-model="order" v-on:change="searchGame">
          <option value="" hidden disabled selected>Sort</option>
          <option value="price asc"> Price Asc </option>
          <option value="price desc"> Price Desc </option>
          <option value="title asc"> Game A > Z </option>
          <option value="title desc"> Game Z > A </option>
          <option value="updatetime asc"> Older </option>
          <option value="updatetime desc"> Newer </option>
        </select>
      </div>
    </div>

    <div class="grid w-full lg:grid-cols-3">
      <GameCard v-for="game in games" :key="game" :game="game"/>
    </div>

  </div>
</template>

<script src="@/scripts/GameList.js"></script>

<style scoped src="@/styles/GameList.css"></style>