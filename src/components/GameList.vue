<template>
  <div class="page-title">{{ title }}</div>
</template>

<script>
export default {
  name: 'GameList',
  props: {
    title: String
  }
}
</script>

<style scoped>
.page-title {
  @apply text-4xl font-bold text-center my-6;
}
</style>