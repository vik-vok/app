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
          <div :key="user.id" v-for="user in stats.users">
            {{ user }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoiceStatistics",
  props: { stats: Object },
};
</script>

<style scoped>
.stats-wrapper {
  background-image: linear-gradient(to bottom, #feecf2, #feecf2);
  padding: 10px 10px;
  background-color: #f8d4e0;
  border-radius: 30px;
}

.info-wrapper {
  display: flex;
  flex-direction: row;
}

.f {
  width: 50%;
}

.s {
  flex: 1;
}
</style>
