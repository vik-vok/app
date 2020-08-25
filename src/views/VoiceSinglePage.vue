<template>
  <div>
    <div class="wrapper">
      <VoicePlayer v-if="voice" class="player" :voice="voice" />
    </div>
  </div>
</template>

<script>
import VoicePlayer from "@/components/voice/VoicePlayer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.fetchOneVoice(this.id);
  },
  methods: {
    ...mapActions(["fetchOneVoice"]),
  },
  computed: {
    ...mapGetters(["voice"]),
  },
  components: {
    VoicePlayer,
  },
};
</script>

<style scoped>
.wrapper {
  margin: 100px auto;
  width: 80%;
}
</style>
