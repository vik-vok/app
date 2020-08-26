<template>
  <div class="comments-wrapper">
    <h1>Comments</h1>
    <div class="scrolling-wrapper-flexbox">
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
      <VoiceMiniPlayer />
    </div>
    <div v-bind:key="comment.id" v-for="comment in this.voiceComments">
      <Comment class="single-comment" :comment="comment" />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment";
import VoiceMiniPlayer from "./VoiceMiniPlayer";

export default {
  name: "VoiceComments",
  props: {
    voiceComments: [],
    recordedVoices: [],
  },
  components: {
    Comment,
    VoiceMiniPlayer,
  },
};
</script>

<style scoped>
.comments-wrapper {
  background-color: #eee6e6;
  border-radius: 30px;
}

.single-comment {
  margin: 2% 10%;
}

/* Side Scroll */
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
