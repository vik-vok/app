<template>
    <div class="wrapper">
        <div class="first">
        </div>
        <div class="second">
            <div class="second-inner second-header">
                <router-link v-bind:to="'/voices/' + voice.id">
                <span>{{voice.name}}</span>
                </router-link>
                
            </div>
            <audio controls class="second-inner">
                <source :src="voice.path" type="audio/ogg">
            </audio>
            <div class="second-inner">
                <div class="inner-left">
                    <span>Uploaded by Someone</span>
                </div>
                <div class="inner-right">
                    <span>481 views *</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VoicePlayer",
    props: {
        voice: Object
    }
}
</script>

<style scoped>
.wrapper {
    padding: 10px 10px;
    margin: 25px 0px;
    display: flex;
    height: 200px;
    align-items: center;
    border: black;
    border-style: solid;
}

.second{
    margin: 20px;
    flex: 1;
    height: 180px;
}

.first {
    flex-shrink: 0;
    border-radius: 50%;
    height: 140px;
    width: 140px;
    background-size: cover;
    background-position: center center;
    background-image: url("https://avatarfiles.alphacoders.com/121/121989.png");
}


audio{
    width: 100%;
}


.second-header{
    float: left;
    font-size: 30px;
}

.second-inner{
    height: 33%;
}
.inner-left{
    float: left;
}

.inner-right{
    float: right;
}
</style>