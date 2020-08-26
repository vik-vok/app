<template>
  <div>
    <h1>Comments</h1>
    <div v-bind:key="comment.id" v-for="comment in this.voiceComments">
      <Comment :comment="comment" />
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

<style scoped></style>
