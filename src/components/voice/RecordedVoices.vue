<template>
  <div class="recorded-voices-content">
    <div :key="voice.recordedVoiceId" v-for="voice in recordedVoices">
      <voice-mini-player
        :haveUser="false"
        :voice="voice"
        v-on:delete-voice="
          $emit('delete-recorded-voice', voice.recordedVoiceId)
        "
      ></voice-mini-player>
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
