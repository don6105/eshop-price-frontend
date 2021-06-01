<template>
  <video :id="video_id" controls muted>
    <source :src="video_src"/>
    <audio :id="audoi_id" controls>
      <source :src="audio_src"/>
    </audio>
  </video>
</template>

<script>
export default {
  name: 'GameVideo',
  props: ["video_src", "audio_src"],
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