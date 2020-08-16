<template>
    <div>
        <div v-bind:key="voice.id" v-for="voice in voices" >
            <VoicePlayer :voiceName="voice.name" :voicePath="voice.path" />
        </div>
    </div>
</template>

<script>
import VoicePlayer from '@/components/VoicePlayer.vue'

export default {
    name: "VoicesTop",
    components: {
        VoicePlayer
    },
    data() {
        return {
            voices: [
                {
                    id: 1,
                    name: "voice1",
                    path: "path1"
                },
                {
                    id: 2,
                    name: "voice2",
                    path: "path2"

                },
                {
                    id: 3,
                    name: "voice3",
                    path: "path3"
                }
            ]
        }
    }
}
</script>