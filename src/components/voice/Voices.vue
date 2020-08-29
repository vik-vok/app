<template>
  <div class="player">
    <div v-bind:key="voice.originalVoiceId" v-for="voice in this.voices">
      <VoicePlayer :voice="voice" />
    </div>
  </div>
</template>

<script>
import VoicePlayer from "@/components/voice/VoicePlayer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Voices",
  methods: {
    ...mapActions(["fetchVoices"]),
  },
  computed: {
    ...mapGetters(["allVoices", "popularVoices"]),
    voices: function () {
      return this.isAll ? this.allVoices : this.popularVoices;
    },
  },
  created() {
    this.fetchVoices();
  },
  components: {
    VoicePlayer,
  },
  props: {
    isAll: { type: Boolean, default: true },
  },
};
</script>

<style scoped>
.player {
  margin: auto;
  width: 100%;
}
</style>
