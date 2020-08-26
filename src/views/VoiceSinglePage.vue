<template>
  <div>
    <div class="wrapper">
      <VoicePlayer v-if="voice" class="player" :voice="voice" />
      <VoiceComments
        :voiceComments="voiceComments"
        :recordedVoices="recordedVoices"
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
    this.fetchRecordedVoices();
  },
  methods: {
    ...mapActions([
      "fetchOneVoice",
      "fetchVoiceComments",
      "fetchRecordedVoices",
    ]),
  },
  computed: {
    ...mapGetters(["voice", "voiceComments", "recordedVoices"]),
  },
  components: {
    VoicePlayer,
    VoiceComments,
  },
};
</script>

<style scoped>
.wrapper {
  margin: 100px auto;
  width: 85%;
}
</style>
