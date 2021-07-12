<template>

  <div class="search-box">
    <div class="container">
      <div class="page-title">Game List</div>
      <div class="search-input">
        <input v-model="query" @keyup.enter="searchSummary" placeholder="Search game">
      </div>
      <div class="search-button">
        <button v-on:click="searchSummary">Submit</button>
      </div>
      <div class="sort-selection">
        <select v-model="sort" v-on:change="searchSummary">
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
  </div>

  <div class="summary-list">
    <GameCard v-for="summary in summarys" :key="summary" :summary="summary"/>
  </div>
  
</template>

<script src="@/scripts/GameList.js"></script>

<style scoped src="@/styles/GameList.css"></style>