<template>
    <div>
        <div v-bind:key="voice.id" v-for="voice in allVoices" >
            VUEX TEST
            <VoicePlayer :voiceName="voice.name" :voicePath="voice.path" />
        </div>
    </div>
</template>

<script>
import VoicePlayer from '@/components/VoicePlayer.vue'
import { mapGetters } from 'vuex'

export default {
    name: "VoicesTop",
    computed: mapGetters(['allVoices']),
    components: {
        VoicePlayer
    }
}
</script>