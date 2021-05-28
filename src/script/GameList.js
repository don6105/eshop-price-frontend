import GameCard from '../components/GameCard.vue'
import { API } from './Config.js'
import axios from "axios"

export default {
  name: 'App',
  components: {
    GameCard
  },
  data() {
    return {
      games: [],
      page: 0,
      keyword: '',
      order: ''
    }
  },
  methods: {
    clearGameList() {
      this.games = [];
      this.page  = 0;
    },
    getGameList() {
      let api_url = `${API}/api/v1/game?page=${this.page}`;
      if(this.keyword != '') {
        api_url += `&keyword=${this.keyword}`;
      }
      if(this.order != '') {
        api_url += `&order=${this.order}`;
      }
      axios
        .get(api_url)
        .then((response) => { 
          this.games = this.games.concat(response.data);
          this.page += 1;
        })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    },
    isBottom() {
      let scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      return (scrollTop + windowHeight) == scrollHeight;
    },
    searchGame() {
      this.clearGameList();
      this.getGameList();
    }
  },
  mounted() {
    this.getGameList();
    // let _this = this;
    // window.onscroll = function(){
    //   _this.isBottom() && _this.getGameList();
    // }
  }
}