<template>
  <div class="comments-wrapper">
    <h1>Recorded Voices</h1>
    <div class="scrolling-wrapper-flexbox">
      <VoiceMiniPlayer
        :key="recordedVoice.id"
        v-for="recordedVoice in this.recordedVoices"
        :voice="recordedVoice"
      />
    </div>
    <hr />
    <h1>Comments</h1>
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
    voiceComments: Array,
    recordedVoices: Array,
  },
  components: {
    Comment,
    VoiceMiniPlayer,
  },
};
</script>

<style scoped>
.comments-wrapper {
  background-image: linear-gradient(to bottom, #feecf2, #fdf6f8);

  border-radius: 30px;
}

.single-comment {
  margin: 2% 8%;
}
h1 {
  padding: 50px 0;
}
/* Side Scroll */
.scrolling-wrapper-flexbox {
  margin: 0 25px 0 25px;
  display: flex;
  padding: 0 0 20px 0;
  flex-wrap: nowrap;
  overflow-x: auto;
}

@media only screen and (max-width: 800px) {
  .scrolling-wrapper-flexbox {
    margin: 0px;
  }

  .single-comment {
    margin: 1% 0% 1% 2%;
  }
}
</style>
