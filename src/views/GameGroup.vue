<template>
  <div class="page-title">Admin: GameGroup</div>
  
  <div class="row-box">
    <div class="h-full">
      <div class="h-3/5 pb-2">
        <div class="data-box h-full border-blue-300">
          <input 
            type="text" 
            class="search-input"
            v-model="grouped_query"
            @keydown.right="jumpToGroupIDInput"
            @keyup.enter="getGroupedSummary"
          >
          <input
            type="text"
            class="groupid-input"
            placeholder="GroupID"
            v-model="group_id"
            @keydown.left="jumpToSearchInput"
            @keyup.enter="getGroupedSummary"
          >
          <button class="search-btn" @click="getGroupedSummary">Search</button>
          <div class="float-right mt-0.5">
            <input 
              type="text"
              class="group-apply-input"
              placeholder="GroupID"
              v-model="apply_group_id"
              @keyup.enter="applySummaryGroup"
            >
            <button 
              class="group-apply-btn"
              @click="applySummaryGroup"
              :disabled="!enable_apply_btn"
            >
              Apply
            </button>
          </div>
          <div class="card-container">
            <SummaryCard 
              v-for="(summary, index) in grouped_list"
              :key="summary"
              :index="index"
              direction='right'
              :summary="summary"
            />
          </div>
        </div>
      </div>
      <div class="h-2/5 pt-2">
        <div class="border-yellow-300 data-box h-full">
          <table class="wikigame-table" v-if="Object.keys(wiki_data).length > 0">
            <tr>
              <th width="20%">GroupID</th> <th width="80%">Title</th>
            </tr>
            <template v-for="(group, group_id) in wiki_data" :key="group_id">
              <tr 
                v-for="(title, index) in group"
                :key="index" 
                :class="{odd: (group_id % 2 === 0)}"
              >
                <td :rowspan="group.length" v-if="index === 0"> 
                  {{ group_id + 1 }} 
                </td> 
                <td> {{ title }} </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="row-box">
    <div class="data-box h-full border-blue-300">
      <input 
        type="text"
        class="search-input"
        v-model="pending_query"
        @keyup.enter="getPendingSummary"
      >
      <button class="search-btn" @click="getPendingSummary">Search</button>
      <div class="card-container">
        <SummaryCard 
          v-for="(summary, index) in pending_list"
          :key="summary"
          :index="index"
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
import { useRoute } from "vue-router";
import axios from "axios"

export default {
  components: {
    SummaryCard
  },
  data() {
    return {
      group_id         : '',
      apply_group_id   : '',
      enable_apply_btn : true,
      pending_query    : '',
      grouped_query    : '',
      pending_list     : [],
      grouped_list     : [],
      wiki_data        : {}
    }
  },
  methods: {
    jumpToGroupIDInput(e) {
      if(e.target.selectionStart === e.target.value.length) {
        e.target.nextElementSibling.focus();
      }
    },
    jumpToSearchInput(e) {
      if(e.target.selectionStart === 0) {
        e.target.previousElementSibling.focus();
      }
    },
    getPendingSummary() {
      if(this.pending_query.length === 0) {
        this.pending_list = [];
        return;
      }
      let api_url = `${API}/api/v1/summary?grouped=2&query=${this.pending_query}`;
      axios
        .get(api_url)
        .then((response) => { 
          this.pending_list = response.data;
        });
    },
    getGroupedSummary() {
      this.enable_apply_btn = true;
      this.getWikiGameList();
      if(this.grouped_query.length === 0 && this.group_id.length === 0) {
        this.grouped_list = [];
        return;
      }

      let api_url = `${API}/api/v1/summary?grouped=1`;
      api_url += `&query=${this.grouped_query}`;
      api_url += `&group_id=${this.group_id}`;
      axios
        .get(api_url)
        .then((response) => { 
          this.grouped_list = response.data;
        });
    },
    getWikiGameList() {
      if(this.grouped_query.length === 0) {
        this.wiki_data = {};
        return;
      }
      let api_url = `${API}/api/v1/wikigame?query=${this.grouped_query}`;
      axios
        .get(api_url)
        .then((response) => {
          this.wiki_data = response.data;
        });
    },
    applySummaryGroup() {
      let group_id = parseInt(this.apply_group_id);
      if(group_id === 0) { return; }
      if(this.grouped_list.length === 0) { return; }

      const order = ['au', 'us', 'hk'];
      this.grouped_list.sort((a, b) => {
        return order.indexOf(b.Country) - order.indexOf(a.Country);
      });
      let data    = this.grouped_list.map(item => item.ID);
      let api_url = `${API}/api/v1/summary/${group_id}`;
      let token   = this.$cookies.get('token');
      let headers = {
        "Accept"       : "application/json",
        "Authorization": `Bearer ${token}`
      };
      axios
        .put(api_url, {'summary_ids': data}, {headers: headers})
        .then((response) => {
          this.enable_apply_btn = false;
        })
        .catch((error) => {
          if(error.response.status == 403) {
            this.$router.push({name: 'Login'});
          }
        });
    },
    removeFromSummarys(index) {
      this.grouped_list.unshift(this.pending_list[index]);
      this.pending_list.splice(index, 1);
    },
    removeFromGroups(index) {
      this.pending_list.unshift(this.grouped_list[index]);
      this.grouped_list.splice(index, 1);
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