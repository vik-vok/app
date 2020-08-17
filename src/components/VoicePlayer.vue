<template>
    <div class="voice">
        <h3>{{voiceName}}</h3>
        <audio controls class="player">
            <source :src="voicePath" type="audio/ogg">
        </audio>
    </div>
</template>

<script>
export default {
    name: "VoicePlayer",
    props: {
        voiceName: String,
        voicePath: String   
    }
}
</script>

<style scoped>
.voice{
    margin: 20px 30px;
}

.player{
    width: 100%;
}
</style>