<template>
  <div class="container mx-auto px-2 md:px-8">
    <GameList title="Game List"/>
    <div class="grid md:grid-cols-3">
      <GameCard v-bind:key="game" v-bind:game="game" v-for="game in games"/>
    </div>
  </div>
</template>

<script>
import GameList from './components/GameList.vue'
import GameCard from './components/GameCard.vue'
import axios from "axios"

export default {
  name: 'App',
  components: {
    GameList,
    GameCard
  },
  data() {
    return {
      games: ''
    }
  },
  mounted() {
    axios
    .get('http://127.0.0.1/eshop-price/index.php/api/v1/game')
    .then((response) => { this.games = response.data; })
    .catch(function (error) { // 请求失败处理
      console.log(error);
    });
  }
}
</script>

<style>
#app {
  @apply mt-5;
}
</style>
