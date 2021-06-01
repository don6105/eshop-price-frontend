<template>

  <div class="px-3 py-2 lg:px-1">

    <swiper 
      :slidesPerView="1" 
      :spaceBetween="30" 
      :loop="true" 
      :centeredSlides="true" 
      :pagination="{'clickable': true}"
      :navigation="true"
      :keyboard="true"
      :initialSlide="1"
    >
      <swiper-slide v-for="slide in gallery" :key="slide">
        <img v-if="slide.image" :src="slide.image" />
        <GameVideo v-else :video_src="slide.video" :audio_src="slide.audio"/>
      </swiper-slide>
    </swiper>
  </div>

  <div class="game-title">
    <a :href="info.URL" target="_blank">
    {{ info.Title }} 
    </a>
  </div>

  <div class="game-desc">{{ info.Description }}</div>

</template>

<script>
import GameVideo from '@/components/GameVideo.vue'
import { API } from '@/scripts/Config.js'
import axios from "axios"

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import SwiperCore, { Pagination,Navigation } from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);

export default {
  components: {
    GameVideo,
    Swiper,
    SwiperSlide
  },
  props: ["summary_id"],
  data() {
    return {
      info: {},
      gallery: []
    }
  },
  methods: {
    getGallery(info) {
      let imgs_url = info.GalleryImage.split(';;');
      let gallery  = imgs_url.map((u) => { return {image: u}; });
      if(info.GalleryVideo != '') {
        let urls  = info.GalleryVideo.split(';;');
        let video = {};
        urls.forEach(row => {
          if(row.indexOf('.webmdv') > -1) {
            video.video = row;
          } else if(row.indexOf('.mp4da') > -1) {
            video.audio = row;
          }
        });
        gallery.unshift(video);
      }
      return gallery;
    },
    getGameList() {
      let api_url = `${API}/api/v1/game/${this.summary_id}`;
      axios
        .get(api_url)
        .then((response) => { 
          this.info    = response.data;
          this.gallery = this.getGallery(this.info);
        })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    }
  },
  mounted() {
    this.getGameList();
  }
};
</script>

<style src="@/styles/Swiper.css"></style>
<style scoped>
.game-title {
  @apply text-3xl;
}
.game-desc {
  @apply text-justify;
  @apply lg:text-lg;
}
</style>