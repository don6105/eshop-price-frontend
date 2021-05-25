<template>
  <a class="flex-grow hover:bg-gray-100" href="#">
    <div class="flex flex-row game-card">
      <div class="game-boxart">
        <img  v-bind:src="game.Boxart"/>
      </div>
      <div class="game-data">
        <div class="game-title">{{ game.Title }}</div>
        <div>
          <span class="all-chinese">全區中文</span>
          <span class="lowest-price">史低</span>
        </div>
        <div class="price-group">
          <span class="sale-price">{{ game.Price }}</span> 
          <s class="msrp">{{ game.MSRP }}</s>
          <span class="country">(美國)</span>
        </div>
        <div class="discount-box">{{ game.Discount }}% 折扣</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'GameList',
  props: {
    game: Object
  },
  mounted() {
    console.log(this.game);
  }
}
</script>

<style scoped>
.game-card {
  @apply my-1 divide-y divide-gray-400;
}
.game-boxart {
  @applt w-3/12 md:w-5/12;
}
.game-boxart > img {
  @apply float-right h-20 w-20 md:h-36 md:w-36;
}
.game-data {
  @apply flex flex-col pl-2 h-20 w-9/12 md:h-36 md:w-7/12 relative;
}
.game-title {
  @apply md:text-2xl font-bold;
}
.all-chinese {
  @apply bg-gray-200 text-red-600 px-1 mr-1 rounded;
}
.lowest-price {
  @apply bg-gray-200 text-blue-600 px-1 mr-1 rounded;
}
.price-group {
  @apply absolute bottom-0 left-2;
}
.sale-price {
  @apply text-base mr-1 text-red-600;
}
.msrp {
  @apply text-xs mr-1 text-gray-400;
}
.country {
  @apply text-sm text-gray-400;
}
.discount-box {
  @apply bg-red-500 text-white pl-2 pr-1 md:pl-3 md:pr-2 rounded-tl-xl absolute bottom-0 right-0 md:right-2;
}
</style>