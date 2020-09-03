<template>
  <div>
    <div class="card">
      <div
        v-if="haveUser && voice.user.photoUrl"
        class="card-avatar"
        :style="[
          voice.user && voice.user.photoUrl
            ? { backgroundImage: 'url(' + voice.user.photoUrl + ')' }
            : {},
        ]"
      ></div>
      <div
        class="close-container"
        v-if="
          (haveUser && user && fetched && user.userId == voice.user.userId) ||
          (!haveUser && user && fetched && user.userId == voice.userId)
        "
      >
        <!-- <div> -->
        <button
          class="btn open-modal trigger-modal-button"
          v-b-modal="'modal-' + voice.recordedVoiceId"
        >
          <i class="fa fa-trash"></i>
        </button>
        <DeleteConfirmation
          :id="voice.recordedVoiceId"
          toDelete="recorded voice"
          v-on:delete="$emit('delete-voice')"
        />
      </div>
      <p class="user-name" v-if="voice.username">
        {{ voice.username }}
      </p>
      <p class="user-name" v-if="voice.created">
        {{ date }}
      </p>
      <p class="user-name" v-if="voice.score">
        {{ (voice.score * 100).toString().slice(0, 5) }}%
      </p>
      <h5 class="user-name" v-if="haveUser">{{ voice.user.username }}</h5>
      <div class="button-wrapper" v-if="voice.voiceUrl">
        <button class="play-button play" @click="play($event, voice)"></button>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteConfirmation from "@/components/layout/DeleteConfirmation";
import { mapGetters } from "vuex";

export default {
  name: "VoiceMiniPlayer",
  props: {
    voice: Object,
    haveUser: Boolean,
  },
  data() {
    return {
      curPlaying: null,
      currentVoice: null,
      date: null,
    };
  },
  created() {
    this.date = this.voice.created
      ? new Date(this.voice.created).toLocaleString("en-GB")
      : null;
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
  components: {
    DeleteConfirmation,
  },
  computed: {
    ...mapGetters({ user: "user", fetched: "fetched" }),
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.disabled {
  display: none !important;
}

.card {
  flex: 0 0 auto;
  margin: 0 40px;
  padding: 15px 0;
  width: 280px;
  /* height: 280px; */
  border-radius: 30px;
}

.card-avatar {
  border-radius: 50%;
  height: 90px;
  width: 90px;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
  background-image: url("https://hezway.ipower.com/poolsafeinc/wp-content/uploads/2017/06/profile.png");
}

.user-name {
  margin: 15px 0;
}

.play-button {
  /*position: absolute;*/
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
  /*margin: auto;*/
  margin: 15px 0;
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

.close-container {
  position: absolute;
  top: 20px;
  right: 20px;
}

/* Style buttons */
.btn {
  background-color: salmon; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  /*position: absolute;*/
  /*top: 10%;*/
  /*right: 10%;*/
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #af4444;
}

@media only screen and (max-width: 1440px) {
  .btn {
    font-size: 12px;
    padding: 0.175rem 0.65rem;
  }

  .user-name {
    margin: 10px 0;
  }

  .card[data-v-093f1398] {
    padding: 25px 0 15px;
    width: 260px;
  }

  .play-button {
    margin: 5px 0 15px;
  }

  .close-container {
    top: 13px;
    right: 13px;
  }
}
</style>
