<template>
  <router-link :to="{name: 'GameInfo', params: {summary_id: game.ID}}" draggable="false">
    <div class="flex flex-row game-card">
      <div class="game-boxart">
        <img v-if="game.Boxart" v-bind:src="game.Boxart"/>
        <img v-else src="@/assets/error-img.jpeg"/>
      </div>

      <div class="game-data">
          <div class="game-title">{{ game.Title }}</div>
          <div class="w-8/12">
            <span class="all-chinese">全區中文</span>
            <span v-if="game.IsLowestPrice == 1" class="lowest-price">史低</span>
          </div>
          <div class="price-group">
            <span class="sale-price">{{ game.Price }}</span> 
            <s v-if="game.Price != game.MSRP" class="msrp">{{ game.MSRP }}</s>
            <span class="country">(美國)</span>
          </div>
          <div v-if="game.Discount > 0" class="discount-box">
            {{ game.Discount }}% 折扣
          </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'GameList',
  props: {
    game: Object
  }
}
</script>

<style scoped src="@/styles/GameCard.css"></style>