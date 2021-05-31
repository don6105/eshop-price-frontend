<template>
  <div class="container mx-auto px-1 lg:px-2 lg:px-4">
    <div class="px-3 py-2 lg:px-1">

      <swiper 
        :slidesPerView="1" 
        :spaceBetween="30" 
        :loop="true" 
        :centeredSlides="true" 
        :pagination="{'clickable': true}"
        :navigation="true"
        :keyboard="true"
      >
        <swiper-slide v-for="slide in gallery" :key="slide">
          <img v-if="slide.image" :src="slide.image" />
          <GameVideo v-else />
        </swiper-slide>
      </swiper>
    </div>

    <div> {{ info.Title }} </div>
  </div>
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

<style>
.swiper-container {
  @apply w-full h-full;
}
.swiper-slide {
  @apply text-center text-lg bg-white;
  @apply flex justify-center items-center;
}
.swiper-slide > * {
  @apply block w-full h-full object-cover;
}
.swiper-container {
  @apply mx-auto;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  @apply text-xl font-black text-white;
  @apply lg:text-5xl;
}
.swiper-button-prev {
  @apply left-0;
  @apply lg:left-3;
}
.swiper-button-next {
  @apply right-0;
  @apply lg:right-3;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  @apply bg-white w-3 h-2 mx-0.5 rounded;
  @apply lg:w-5 lg:h-3 lg:mx-1.5;
}
.swiper-pagination-bullet {
  @apply opacity-40;
}
.swiper-pagination-bullet-active {
  @apply opacity-100;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  @apply bottom-0;
  @apply lg:bottom-6;
}
</style>