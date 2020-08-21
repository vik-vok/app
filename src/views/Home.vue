<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Voices class="center" :isAll="false"/>
  </div>
</template>

<script>
import Voices from '@/components/Voices.vue'
export default {
  name: 'Home',
  components:{
      Voices
  }    
}
</script>

<style scoped>
.center{
  margin:0 auto;
}
</style>