<template>
    <div>
        <div v-bind:key="voice.id" v-for="voice in allVoices" >
            <VoicePlayer :voiceName="voice.name" :voicePath="voice.path" />
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
    computed: mapGetters(['allVoices']),
    created(){
        this.fetchVoices();
    },
    components: {
        VoicePlayer
    }
}
</script>