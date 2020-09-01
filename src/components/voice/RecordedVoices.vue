<template>
  <div v-for="voice in recordedVoices">
    <voice-mini-player :key="voice.id" :voice="voice"></voice-mini-player>
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
