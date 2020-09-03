<template>
  <div>
    <trend-chart
      :ref="voice.originalVoiceId"
      :datasets="[
        {
          data: [0, ...scores[voice.originalVoiceId]['scores']],
          smooth: true,
          showPoints: true,
        },
      ]"
      :grid="grid"
      :labels="{
        xLabels: [
          'Date',
          scores[voice.originalVoiceId]['dates'].length > 2
            ? scores[voice.originalVoiceId]['dates'][
                Math.floor(scores[voice.originalVoiceId]['dates'].length / 2)
              ]
            : '',
          scores[voice.originalVoiceId]['dates'][
            scores[voice.originalVoiceId]['dates'].length - 1
          ],
        ],
        yLabels: 5,
      }"
      :height="height"
      :min="0"
      :max="100"
    >
    </trend-chart>
  </div>
</template>

<script>
export default {
  name: "ScoresChart",
  props: ["voice", "scores"],
  data() {
    return {
      grid: {
        verticalLines: true,
        verticalLinesNumber: 1,
        horizontalLines: true,
        horizontalLinesNumber: 1,
      },
      height: 200,
    };
  },

  mounted() {},
};
</script>

<style scoped></style>
