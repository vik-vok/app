<template>
  <div>
    <h1>List of All Voices</h1>
    <Voices class="voices-page-wrapped" />
  </div>
</template>

<script>
import Voices from "@/components/voice/Voices";

export default {
  components: {
    Voices,
  },
};
</script>

<style scoped>
.voices-page-wrapped {
  /*padding: 5%;*/
  margin: 0 100px;
  padding: 4% 0;
  width: calc(100% - 200px);
}

@media only screen and (max-width: 800px) {
  .voices-page-wrapped {
    padding: 2% 0;
  }
}
</style>
