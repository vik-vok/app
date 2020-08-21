<template>
    <div>
        <h1> List of All Voices </h1>
        <Voices class="left" />
    </div>
</template>

<script>
import Voices from '@/components/Voices.vue'

export default {
    components:{
        Voices
    }    
}
</script>

<style scoped>

.left {
  left: 0px;
}

</style>