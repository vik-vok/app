<template>
  <div>
    <div class="wrapper-main">
      <VoicePlayer v-if="voice" class="player" :voice="voice" />
      <VoiceComments
        :voiceComments="voiceComments"
        :recordedVoices="recordedVoices"
        v-on:addComment="addComment"
      />
    </div>
  </div>
</template>

<script>
import VoicePlayer from "@/components/voice/VoicePlayer.vue";
import VoiceComments from "@/components/voiceComment/VoiceComments";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.fetchOneVoice(this.id);
    this.fetchVoiceComments(this.id);
    this.fetchRecordedVoices(this.id);
  },
  methods: {
    ...mapActions([
      "fetchOneVoice",
      "fetchVoiceComments",
      "fetchRecordedVoices",
      "addVoiceComment",
    ]),
    addComment(s) {
      if (this.user) {
        var voiceID = this.id;
        var userID = this.user.id;
        var data = {
          text: s,
          voiceID: voiceID,
          userID: userID,
        };
        this.addVoiceComment({ data: data, user: this.user });
      }
    },
  },
  computed: {
    ...mapGetters([
      "user",
      "fetched",
      "voice",
      "voiceComments",
      "recordedVoices",
    ]),
  },
  components: {
    VoicePlayer,
    VoiceComments,
  },
};
</script>

<style scoped>
.wrapper-main {
  margin: 100px auto;
  width: 75%;
}

@media only screen and (max-width: 800px) {
  .wrapper-main {
    width: 95%;
  }
}
</style>

<style>
.modal-header {
  display: none;
}
</style>
