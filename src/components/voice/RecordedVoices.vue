<template>
  <div class="recorded-voices-content">
    <div :key="voice.id" v-for="voice in recordedVoices">
      <voice-mini-player :haveUser="false" :voice="voice"></voice-mini-player>
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

<style>
.recorded-voices-content {
  display: flex;
  overflow-x: scroll;
  padding: 2.5rem 0;
}
.recorded-voices-content .card {
  margin: 0 30px 0 0;
}
</style>
