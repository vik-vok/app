<template>
  <div class="recorded-voices-container">
    <div :key="voice.id" v-for="voice in recordedVoices">
      <voice-mini-player :voice="voice"></voice-mini-player>
    </div>
  </div>
</template>

<script>
import VoiceMiniPlayer from "../voiceComment/VoiceMiniPlayer";

export default {
  name: "RecordedVoices",
  components: { VoiceMiniPlayer },
  props: { recordedVoices: Array },
};
</script>

<style scoped></style>
