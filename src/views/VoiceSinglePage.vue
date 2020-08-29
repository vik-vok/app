<template>
  <div>
    <div class="wrapper-main">
      <VoicePlayer v-if="voice" class="player" :voice="voice" />
      <VoiceComments
        :voiceComments="voiceComments"
        :recordedVoices="recordedVoices"
        v-on:addComment="addComment"
        v-on:delete-comment="deleteComment"
        v-on:delete-recorded-voice="deleteRecordedvoice"
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
      "deleteRecordedVoice",
      "deleteVoiceComment",
    ]),
    addComment(s) {
      if (this.user) {
        var voiceId = this.id;
        var userId = this.user.userId;
        var data = {
          text: s,
          voiceId: voiceId,
          userId: userId,
        };
        this.addVoiceComment({ data: data, user: this.user });
      }
    },
    deleteComment(id) {
      this.deleteVoiceComment(id);
    },
    deleteRecordedvoice(id) {
      this.deleteRecordedVoice(id);
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
