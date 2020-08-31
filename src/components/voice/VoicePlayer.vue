<template>
  <div class="wrapper">
    <div class="first" v-bind:style="[backgroundAvatar]"></div>
    <div class="second">
      <div class="second-inner second-header">
        <router-link v-bind:to="'/voices/' + voice.originalVoiceId">
          <span>{{ voice.name }}</span>
        </router-link>
      </div>
      <div class="second-inner audio-container">
        <audio controls>
          <source :src="voice.path" />
        </audio>
        <VoiceRecorder :voice="voice" class="second-inner-voice" />
      </div>
      <div class="second-inner">
        <div class="inner-left">
          <span>Uploaded by Someone</span>
        </div>
        <div class="inner-right">
          <span>{{ voice.views }} views</span>
          <span style="margin: 0.6rem 0.6rem;">•</span>
          <span>15 ❤︎</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoiceRecorder from "./VoiceRecorder";
export default {
  name: "VoicePlayer",
  props: {
    voice: Object,
  },
  computed: {
    backgroundAvatar: function () {
      return { "background-image": "url(" + this.voice.avatar + ")" };
    },
  },
  components: {
    VoiceRecorder,
  },
};
</script>

<style scoped>
.wrapper {
  padding: 10px 30px;
  display: flex;
  height: 180px;
  align-items: center;
  background-color: #f8d4e0;

  border-radius: 30px;
}

.first {
  flex-shrink: 0;
  border-radius: 50%;
  height: 140px;
  width: 140px;
  background-size: cover;
  background-position: center center;
}

audio {
  width: 100%;
}

.second {
  margin: 20px;
  flex: 1;
}

.second-header {
  text-align: left;
  font-size: 23px;
  margin-bottom: 10px;
}

.second-header a {
  text-decoration: none;
  color: black;
}
.second-inner {
  margin: 10px 0;
}

.inner-left {
  float: left;
}

.inner-right {
  float: right;
}

.second-inner-voice {
  float: right;
}

@media only screen and (max-width: 800px) {
  .wrapper {
    padding: 10px 10px;
  }
  .first {
    height: 60px;
    width: 60px;
  }

  .second {
    margin: 5px;
  }

  .inner-right {
    float: left;
  }

  audio {
    width: 100%;
  }

  .audio-container {
    display: block !important;
  }
  .second-header {
    float: left;
    font-size: 20px;
  }
}

.audio-container {
  display: flex;
}

.audio-container div {
  margin: 0 10px;
}
</style>
