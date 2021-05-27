<template>
  <div class="container mx-auto px-1 md:px-2 md:px-4">
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
  methods: {
    getGameList() {
      axios
      .get(`http://10.1.1.12/eshop-price/index.php/api/v1/game?page=${this.page}`)
      .then((response) => { 
        this.games = this.games.concat(response.data);
        this.page += 1;
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
    }
  },
  data() {
    return {
      games: [],
      page: 0
    }
  },
  mounted() {
    this.getGameList();
    let _this = this;
    window.onscroll = function(){
      let scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if((scrollTop + windowHeight) == scrollHeight){
        _this.getGameList();
      }
    }
  }
}
</script>

<style>
#app {
  @apply mt-5;
}
</style>
