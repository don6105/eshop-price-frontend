<template>
  <router-link 
    :to="{name: 'GameInfo', params: {group_id: summary.GroupID}}" 
    draggable="false"
    class="game-info-link"
  >
    <div class="game-card">
      <div class="game-boxart">
        <img v-if="summary.Boxart" :src="summary.Boxart"/>
        <img v-else src="@/assets/error-img.jpeg"/>
      </div>

      <div class="game-data">
          <div class="game-title">{{ summary.Title }}</div>
          <div class="tag-group">
            <span class="all-chinese">全區中文</span>
            <span v-if="summary.IsLowestPrice == 1" class="lowest-price">史低</span>
          </div>
          <div class="price-group">
            <span class="price">{{ summary.MinPrice }}</span> 
            <s 
              v-if="summary.MinPrice != summary.MinMSRP" 
              class="msrp"
            >
              {{ summary.MinMSRP }}
            </s>
            <span class="country">({{ summary.MinCountry }})</span>
          </div>
          <div v-if="summary.MinDiscount > 0" class="discount-box">
            {{ summary.MinDiscount }}% 
            <span>off</span>
          </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'GameList',
  props: {
    summary: Object
  }
}
</script>

<style scoped src="@/styles/GameCard.css"></style>