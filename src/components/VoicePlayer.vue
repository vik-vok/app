<template>
    <div class="wrapper">
        <div class="first" v-bind:style="[backgroundAvatar]" >
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
                    <span>{{voice.views}} views</span>
                    <span style="margin:0.6rem 0.6rem;">•</span>
                    <span>15 ❤︎</span>
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
    },
    computed: {
      backgroundAvatar: function () {
        return {'background-image' : 'url('+this.voice.avatar+')',};
      }
    },
}
</script>

<style scoped>
.wrapper {
    padding: 10px 30px;
    margin: 25px 0px;
    display: flex;
    height: 200px;
    align-items: center;
    background-color: white;
    border-radius: 30px;
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
}

audio{
    width: 100%;
}

.second-header{
    float: left;
    font-size: 30px;
}
.second-header a {
    text-decoration: none; 
    color: black;
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

@media only screen and (max-width: 800px) {
    .wrapper{
        padding: 10px 10px;

    }
    .first {
        height: 60px;
        width: 60px;
    }

    .inner-right{
        float: left;
    }

    audio{
        width: 100%;
    }

    .second-header{
        float: left;
        font-size: 20px;
    }
}
</style>