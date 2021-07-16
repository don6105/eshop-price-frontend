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
            <span v-if="summary.IsFullChinese == 1" class="all-chinese">全區中文</span>
            <span v-if="summary.IsLowestPrice == 1" class="lowest-price">史低</span>
          </div>
          <div class="price-group">
            <span class="price">{{ summary.GroupPrice }}</span> 
            <s 
              v-if="summary.GroupPrice != summary.GroupMSRP" 
              class="msrp"
            >
              {{ summary.GroupMSRP }}
            </s>
            <span class="country">({{ summary.GroupCountry }})</span>
          </div>
          <div v-if="summary.GroupDiscount > 0" class="discount-box">
            {{ summary.GroupDiscount }}% 
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