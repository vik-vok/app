<template>
    <div>
    </div>
</template> 

<script>
export default {
    data(){
        return{
            id: this.$route.params.idk,
            voice: null
        }
    },
    created(){
        this.fetchVoices();
    }
}
</script>