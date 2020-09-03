<template>
  <div>
    <div class="stats-wrapper">
      <h1>Statistics</h1>
      <div class="info-wrapper">
        <div class="f">
          <p>Numbers Tried: {{ stats.numberTried }}</p>
          <p>Average Score: {{ (stats.avgScore * 100).toFixed(2) }}%</p>
        </div>
        <div class="s">
          <div :key="user.id" v-for="user in stats.maxScorers">
            <!--{{ user }}-->
            <voice-mini-player
              :voice="user"
              :have-user="true"
            ></voice-mini-player>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoiceMiniPlayer from "../voiceComment/VoiceMiniPlayer";
export default {
  name: "VoiceStatistics",
  components: { VoiceMiniPlayer },
  props: { stats: Object },
  data() {
    return {
      maxScorers: null,
    };
  },
  mounted() {
    // this.maxScorers = this.stats.maxScorers.
    // console.log("MAX SCORES", this.stats.maxScorers);
  },
};
</script>

<style scoped>
.stats-wrapper {
  background-image: linear-gradient(to bottom, #feecf2, #feecf2);
  padding: 30px 10px;
  background-color: #f8d4e0;
  border-radius: 30px;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
}

.f {
  /*width: 50%;*/
}

.s {
  flex: 1;
  display: flex;
}
</style>
