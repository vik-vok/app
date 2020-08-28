<template>
  <div>
    <div class="card">
      <div
        class="card-avatar"
        :style="[
          voice.user && voice.user.photoUrl
            ? { backgroundImage: 'url(' + voice.user.photoUrl + ')' }
            : {},
        ]"
      ></div>
      <h5 class="user-name">{{ voice.user.username }}</h5>
      <div class="button-wrapper">
        <button class="play-button play" @click="play($event, voice)"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoiceMiniPlayer",
  props: {
    voice: Object,
  },
  data() {
    return {
      curPlaying: null,
    };
  },
  methods: {
    play: function (e, voice) {
      const button = e.target;
      if (this.curPlaying && this.curPlaying.audio) {
        this.curPlaying.audio.pause();
        this.curPlaying = null;
      } else {
        var audio = new Audio(voice.voiceUrl);
        this.curPlaying = { audio, voice };

        this.curPlaying.audio.play();
        this.curPlaying.audio.onended = () => {
          button.classList.toggle("stop");
          button.classList.toggle("play");

          this.curPlaying.audio.currentTime = 0;
          this.curPlaying = null;
        };
      }
      button.classList.toggle("stop");
      button.classList.toggle("play");
    },
  },
};
</script>

<style scoped>
.disabled {
  display: none !important;
}

.card {
  flex: 0 0 auto;
  margin: 0 40px;
  padding: 15px 0;
  width: 315px;
  height: 280px;
  border-radius: 30px;
}

.card-avatar {
  border-radius: 50%;
  height: 115px;
  width: 115px;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
  background-image: url("https://hezway.ipower.com/poolsafeinc/wp-content/uploads/2017/06/profile.png");
}

.user-name {
  margin: 30px 0;
}

.play-button {
  position: absolute;
  background: #f8bace;
  border-radius: 11px;
  width: 150px;
  height: 40px;
  color: #ffffff;
  display: inline-block;
  font: normal bold "Open Sans", sans-serif;
  text-align: center;
  border: none;
  bottom: 20px;
  left: 0;
  right: 0;
  outline: none;
  margin: auto;
}

.play-button:hover {
  background: #f8d4e0;
}
.stop {
  background: grey;
}

.stop:hover {
  background: black;
}
.stop::after {
  content: "Stop";
}
.play::after {
  content: "Play";
}

@media only screen and (max-width: 800px) {
  .card {
    margin: 0 20px;
  }
}
</style>
