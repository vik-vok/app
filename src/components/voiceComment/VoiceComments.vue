<template>
  <div class="comments-wrapper">
    <h1>Comments</h1>
    <div v-bind:key="comment.id" v-for="comment in this.voiceComments">
      <Comment class="single-comment" :comment="comment" />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment";

export default {
  name: "VoiceComments",
  props: {
    voiceComments: [Object],
  },
  components: {
    Comment,
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
</style>
