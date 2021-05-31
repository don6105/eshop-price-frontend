<template>
  <video :id="video_id" controls muted>
    <source src="https://assets.nintendo.com/video/upload/br_5500k,c_limit,h_720,vc_vp9,w_1280/v1619473421/ncom/en_US/games/switch/s/sparkle-2-evo-switch/Video/Sparkle_2_Trailer.webmdv"/>
    <audio :id="audoi_id" controls>
      <source src="https://assets.nintendo.com/video/upload/br_5500k,c_limit,h_720,vc_vp9,w_1280/v1619473421/ncom/en_US/games/switch/s/sparkle-2-evo-switch/Video/Sparkle_2_Trailer.mp4da"/>
    </audio>
  </video>
</template>

<script>
export default {
  name: 'GameVideo',
  props: {},
  data() {
    return {
      video_id: Math.random().toString(36).slice(-10),
      audoi_id: Math.random().toString(36).slice(-10)
    }
  },
  methods: {
    combineVideoAndAudio() {
      let video = document.getElementById(this.video_id);
      let audio = document.getElementById(this.audoi_id);
      video.onplay   = function() { audio.play();  }
      video.onpause  = function() { audio.pause(); }
      video.onseeked = function() { audio.currentTime = video.currentTime; }
    }
  },
  mounted() {
    this.combineVideoAndAudio();
  }
}
</script>