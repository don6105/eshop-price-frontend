<template>
  <div class="page-title">Admin: GameGroup</div>
  
  <div class="row-box">
    <div class="h-full">
      <div class="h-1/2 pb-2">
        <div class="data-box h-full border-blue-300">
          <input type="text" class="search-input">

        </div>
      </div>
      <div class="h-1/2 pt-2">
        <div class="border-yellow-300 data-box h-full ">
          <input type="text" class="search-input">

        </div>
      </div>
    </div>
  </div>
  <div class="row-box">
    <div class="data-box h-full border-blue-300">
      <input type="text" class="search-input">
      <div class="w-full overflow-y-auto">
        <SummaryCard 
          v-for="summary in summarys"
          :key="summary"
          direction='left'
          :summary="summary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SummaryCard from '@/components/SummaryCard.vue'
import { API } from '@/scripts/Config.js'
import axios from "axios"

export default {
  components: {
    SummaryCard
  },
  data() {
    return {
      groups   : [],
      summarys : [
        {
          ID: 7,
          Boxart: 'https://store.nintendo.com.hk/media/catalog/product/cache/559013652f8c31ac036888adc145c37f/1/1/110.jpg',
          Title: '薩爾達傳說 曠野之息',
          Country: 'hk'
        },
        {
          ID: 558,
          Boxart: 'https://assets.nintendo.com/image/upload/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero',
          Title: 'The Legend of Zelda™: Breath of the Wild',
          Country: 'us'
        },
        {
          ID: 256,
          Boxart: 'https://store.nintendo.com.hk/media/catalog/product/cache/559013652f8c31ac036888adc145c37f/b/e/be754ef587d726f5337f294382e7411183e3785edd723d8c17fa7149d4582dde.jpg',
          Title: '泰拉瑞亞',
          Country: 'hk'
        },
        {
          ID: 3378,
          Boxart: 'https://assets.nintendo.com/image/upload/ncom/en_US/games/switch/t/terraria-switch/hero',
          Title: 'Terraria',
          Country: 'us'
        },
      ],
      wiki_data: []
    }
  },
  methods: {
    getGameList() {
      let api_url = `${API}/api/v1/game?page=${this.page}`;
      if(this.query != '') {
        api_url += `&q=${this.query}`;
      }
      if(this.sort != '') {
        api_url += `&sort=${this.sort}`;
      }
      axios
        .get(api_url)
        .then((response) => { 
          this.games = this.games.concat(response.data);
          this.page += 1;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    
  }
}
</script>

<style>
.container {
  height: calc(100% - 5rem);
}
</style>
<style scoped src="@/styles/GameGroup.css"></style>