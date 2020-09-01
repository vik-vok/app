<template>
  <div class="player">
    <div v-bind:key="voice.originalVoiceId" v-for="voice in pageOfItems">
      <VoicePlayer class="single-player" :voice="voice" />
    </div>
    <jw-pagination
      :items="this.voices"
      @changePage="onChangePage"
      :pageSize="3"
    ></jw-pagination>
  </div>
</template>

<script>
import VoicePlayer from "@/components/voice/VoicePlayer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Voices",
  methods: {
    ...mapActions(["fetchVoices"]),
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
  data() {
    return {
      pageOfItems: [],
    };
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

.single-player {
  margin: 20px 0;
}
</style>
