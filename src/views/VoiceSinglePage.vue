<template>
    <div>
        <div class="player">
            <VoicePlayer :voice=voice />
        </div>
    </div>
</template> 

<script>
import VoicePlayer from '@/components/VoicePlayer.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            id: this.$route.params.id,
        }
    },
    created(){
        this.fetchOneVoice(this.id);
    },
    methods: {
    ...mapActions(['fetchOneVoice'])
    },
    computed: {
        ...mapGetters(['voice']),
    },
    components: {
        VoicePlayer
    },
}
</script>


<style scoped>
.player{
    width: 800px;
}
</style>