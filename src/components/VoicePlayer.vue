<template>
    <div>
        <h1>{{voiceName}}</h1>
        <audio controls>
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
