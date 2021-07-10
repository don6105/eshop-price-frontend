<template>
  <div class="summary-card" ref="el_card">
    <div v-if="direction === 'left'" class="summary-action">
      <button @click="removeFromSummarys">
        <svg width="50" height="100" viewBox="0 0 50 135" preserveAspectRatio="xMidYMid meet">
          <line x1="36" y1="13" x2="11" y2="50" style="stroke:white; stroke-width:8"/>
          <line x1="36" y1="87" x2="11" y2="50" style="stroke:white; stroke-width:8"/>
          <circle cx="36" cy="13" r="4" fill="white"/>
          <circle cx="11" cy="50" r="4" fill="white"/>
          <circle cx="36" cy="87" r="4" fill="white"/>
        </svg>
      </button>
    </div>
    <div class="boxart-box">
      <img :src="summary.Boxart">
    </div>
    <div class="summary-box">
      <div class="game-title">{{ summary.Title }} </div>
      <div class="mt-1">
        <div class="game-country" :class="country_color[summary.Country]">
          {{ summary.Country }}
        </div>
        <div class="game-group" :class="{ active: (summary.GroupID > 0) }">
          {{ summary.GroupID }}
        </div>
      </div>
    </div>
    <div v-if="direction === 'right'" class="summary-action">
      <button @click="removeFromGroups">
        <svg width="50" height="100" viewBox="0 0 50 135" preserveAspectRatio="xMidYMid meet">
          <line x1="12" y1="13" x2="39" y2="50"  style="stroke:white;stroke-width:8"/>
          <line x1="12" y1="87" x2="39" y2="50"  style="stroke:white;stroke-width:8"/>
          <circle cx="12" cy="13" r="4" fill="white"/>
          <circle cx="39" cy="50" r="4" fill="white"/>
          <circle cx="12" cy="87" r="4" fill="white"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SummaryCard',
  props: {
    direction: String,
    summary: Object,
    index: Number
  },
  data() {
    return {
      country_color: {
        us: 'bg-yellow-200',
        hk: 'bg-red-200',
        jp: 'bg-purple-300',
      },
    };
  },
  methods: {
    removeFromSummarys(event) {
      this.$refs.el_card.classList.add('left-out');
      setTimeout(() => {
        this.$refs.el_card.classList.remove('left-out');
        this.$parent.removeFromSummarys(this.index);
      }, 200);
    },
    removeFromGroups() {
      this.$refs.el_card.classList.add('right-out');
      setTimeout(() => {
        this.$refs.el_card.classList.remove('right-out');
        this.$parent.removeFromGroups(this.index);
      }, 200);
    }
  }
}
</script>

<style scoped src="@/styles/SummaryCard.css"></style>