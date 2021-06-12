<template>
  <video controls playsinline ref="video">
    <source :src="video_src" type="video/mp4"/>
    <audio controls ref="audio">
      <source :src="audio_src"/>
    </audio>
  </video>
</template>

<script>
export default {
  name: 'GameVideo',
  props: ["video_src", "audio_src"],
  methods: {
    combineVideoAndAudio() {
      let video = this.$refs.video;
      let audio = this.$refs.audio;
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