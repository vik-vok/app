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
  padding: 5%;
}

@media only screen and (max-width: 800px) {
  .voices-page-wrapped {
    padding: 2%;
  }
}
</style>
