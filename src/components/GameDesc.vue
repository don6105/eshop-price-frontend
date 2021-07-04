<template>
  <div 
    class="desc-container"
    :class="{ expand: showDesc }"  
    v-on:click="showDesc = !showDesc">
    <div class="desc-text" v-html="desc"> </div>
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

<style scroped src="@/styles/GameDesc.css"></style>