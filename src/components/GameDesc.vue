<template>
  <div 
    class="desc-container"
    :class="{ expand: showDesc }"  
    v-on:click="showDesc = !showDesc">
    <div class="desc-text">
      {{ desc }}
    </div>
    <div class="desc-mask" />
  </div>
</template>

<script>
export default {
  name: 'GameDesc',
  props: ["desc"],
  data() {
    return {
      showDesc: false
    }
  }
}
</script>

<style scroped>
.desc-container {
  @apply relative overflow-hidden h-20 cursor-pointer;
}
.expand.desc-container {
  @apply h-auto overflow-visible;
}
.desc-text {
  @apply text-justify max-h-12 overflow-hidden text-gray-600 text-base;
  @apply transition-all ease-in-out duration-1000;
  @apply lg:max-h-16 lg:text-lg;
}
.expand .desc-text {
  max-height: 100rem;
  @apply transition-all ease-in-out duration-1000;
}
.desc-mask {
  @apply w-full h-full absolute left-0 bottom-0 bg-gradient-to-t from-white;
}
.expand .desc-mask {
  @apply invisible;
}
</style>