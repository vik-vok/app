<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Voices :isAll="false"/>
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
