<template>
  <div class="container mx-auto px-1 md:px-2 md:px-4">

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
          <option value="" disabled selected>Sort</option>
          <option value="price asc">Price Asc</option>
          <option value="price desc">Price Desc</option>
          <option value="title asc">Game A > Z</option>
          <option value="title desc">Game Z > A</option>
          <option value="updatetime asc">Older</option>
          <option value="updatetime desc">Newer</option>
        </select>
      </div>
    </div>

    <div class="grid md:grid-cols-3">
      <GameCard v-bind:key="game" v-bind:game="game" v-for="game in games"/>
    </div>

  </div>
</template>

<script src="./script/GameList.js"></script>

<style scoped src="./style/GameList.css"></style>