<template>
  <div class="summary-card" ref="el_card">
    <div v-if="direction === 'left'" class="summary-action">
      <button>
        <svg width="100%" height="100">
          <line x1="36" y1="7"  x2="11" y2="50" style="stroke:white; stroke-width:8"/>
          <line x1="36" y1="93" x2="11" y2="50" style="stroke:white; stroke-width:8"/>
          <circle cx="36" cy="7"  r="4" fill="white"/>
          <circle cx="11" cy="50" r="4" fill="white"/>
          <circle cx="36" cy="93" r="4" fill="white"/>
        </svg>
      </button>
    </div>
    <div class="boxart-box">
      <img :src="summary.Boxart">
    </div>
    <div class="summary-box">
      <div class="game-title">{{ summary.Title }} </div>
      <div class="game-country" :class="country_color[summary.Country]">
        {{ summary.Country }}
      </div>
    </div>
    <div v-if="direction === 'right'" class="summary-action">
      <button>
        <svg width="100%" height="100">
          <line x1="12" y1="7"  x2="39" y2="50"  style="stroke:white;stroke-width:8"/>
          <line x1="12" y1="93" x2="39" y2="50"  style="stroke:white;stroke-width:8"/>
          <circle cx="12" cy="7"  r="4" fill="white"/>
          <circle cx="39" cy="50" r="4" fill="white"/>
          <circle cx="12" cy="93" r="4" fill="white"/>
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

  }
}
</script>

<style scoped src="@/styles/SummaryCard.css"></style>