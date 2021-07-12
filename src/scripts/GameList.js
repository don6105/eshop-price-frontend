import GameCard from '@/components/GameCard.vue'
import { API } from '@/scripts/Config.js'
import axios from "axios"

export default {
  components: {
    GameCard
  },
  data() {
    return {
      summarys: [],
      page: 0,
      query: '',
      sort: '',
      end_of_data: false
    }
  },
  methods: {
    setPersistPageData() {
      for(let k in this.$data) {
        localStorage.setItem(k, JSON.stringify(this.$data[k]));
      }
    },
    getPersistPageData() {
      for(let k in this.$data) {
        let value = JSON.parse(localStorage.getItem(k));
        if(value !== null) {
          this.$data[k] = value;
        }
        localStorage.removeItem(k);
      }
    },
    clearSummaryList() {
      this.summarys    = [];
      this.page        = 0;
      this.end_of_data = false;
    },
    getSummaryList() {
      let api_url = `${API}/api/v1/summary?page=${this.page}`;
      if(this.query != '') {
        api_url += `&query=${this.query}`;
      }
      if(this.sort != '') {
        api_url += `&sort=${this.sort}`;
      }
      axios
      .get(api_url)
      .then((response) => {
        if(response.data.length === 0) {
          this.end_of_data = true;
        }
        this.summarys = this.summarys.concat(response.data);
        this.page     += 1;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    isBottom() {
      let scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      return (scrollTop + windowHeight) == scrollHeight;
    },
    searchSummary() {
      this.clearSummaryList();
      this.getSummaryList();
    }
  },
  mounted() {
    this.getPersistPageData();
    if(this.summarys === null || this.summarys.length === 0) {
      this.getSummaryList();
    }
    let _this = this;
    window.onscroll = function() {
      (_this.summarys.length > 0) 
        && !this.end_of_data 
        && _this.isBottom() 
        && _this.getSummaryList();
    }
  },
  beforeRouteLeave() {
    this.setPersistPageData();
  }
}