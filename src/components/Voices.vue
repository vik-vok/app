<template>
    <div>
        <div v-bind:key="voice.id" v-for="voice in this.voices" >
            <VoicePlayer class="player" :voiceName="voice.name" :voicePath="voice.path" />
        </div>
    </div>
</template>

<script>
import VoicePlayer from '@/components/VoicePlayer.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Voices",
    methods: {
        ...mapActions(['fetchVoices'])
    },
    computed: {
        ...mapGetters(['allVoices', 'popularVoices']),
        voices: function () {
            console.log(this.isAll)
            return this.isAll ? this.allVoices : this.popularVoices;
        }
    },
    created(){
        this.fetchVoices();
    },
    components: {
        VoicePlayer
    },
    props: {
        isAll: {type:Boolean, default:true},   
    }
}
</script>

<style scoped>
.player{
    width: 1200px;
}
</style>