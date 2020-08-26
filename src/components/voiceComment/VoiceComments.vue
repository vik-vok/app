<template>
  <div>
    <div v-bind:key="comment.id" v-for="comment in this.voiceComments">
      {{ comment }}
      <!-- <Comment :comment="comment" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "VoiceComments",
  props: {
    voiceComments: [Object],
  },
};
</script>

<style scoped></style>
