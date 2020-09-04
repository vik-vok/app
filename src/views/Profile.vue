<template>
  <div class="profile-page-container">
    <div class="profile-container">
      <div class="profile-picture-container" @click="changeProfilePicture()">
        <div class="profile-picture-hover">
          <svg
            class="gb_tb"
            enable-background="new 0 0 24 24"
            focusable="false"
            height="26"
            viewBox="0 0 24 24"
            width="18"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
            ></path>
          </svg>
        </div>
        <img
          :src="
            user.photoUrl
              ? user.photoUrl
              : 'https://hezway.ipower.com/poolsafeinc/wp-content/uploads/2017/06/profile.png'
          "
          alt=""
        />
      </div>

      <div class="profile-info-container">
        <h1>{{ user.username }}</h1>
        <h5>{{ user.email }}</h5>
      </div>
    </div>

    <div class="user-challenges">
      <h1>User Challenges</h1>
      <div class="challenge-wrapper">
        <div class="challenge-completed">
          <h3>Accomplished</h3>
          <div
            :key="challenge.challengeId"
            v-for="challenge in challenges.incomplete"
            class="single-challenge"
          >
            <p>
              <strong>{{ challenge.senderUser.username }}</strong>
              Challenged you to score at least
              <strong>{{ challenge.score }}%</strong>
              For the voice:
              <strong>
                <a href=""> {{ challenge.voice }} </a></strong
              >
            </p>
          </div>
        </div>
        <div class="challenge-icomplete">
          <h3>In Progress</h3>
          <div
            :key="challenge.challengeId"
            v-for="challenge in challenges.complete"
            class="single-challenge"
          >
            <p>
              You have completed challenge by
              <strong> {{ challenge.senderUser.username }} </strong>
              for the voice:
              <!-- <strong> <a href=""> Wubalubadubdub </a></strong> -->
              with minimum of
              <strong>{{ challenge.score }}%!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="recorded-voices-container">
      <h1>My Voices</h1>

      <div
        class="recorded-voice"
        :key="voice.originalVoiceId"
        v-for="voice in userRecordedVoices"
      >
        <div class="recorded-voices-data">
          <!-- {{userRecordedVoices}} -->
          <VoicePlayer :voice="voice"></VoicePlayer>
          <ScoresChart :voice="voice" :scores="scores"></ScoresChart>
        </div>
        <div class="recorded-voices">
          <recorded-voices
            :recordedVoices="voice.recordedVoices"
            v-on:delete-recorded-voice="deleteRecordedvoice"
          ></recorded-voices>
        </div>
      </div>
    </div>
    <div class="author-original-voices-container">
      <h1>User Original Voices</h1>
      <div
        class="user-original-voices"
        v-bind:key="voice.originalVoiceId"
        v-for="voice in userOriginalVoices"
      >
        <voice-player :voice="voice"></voice-player>
      </div>
    </div>
    <div class="favorite-voices-container">
      <div v-bind:key="voice.id" v-for="voice in FavouriteVoices">
        <voice-player :voice="voice"></voice-player>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VoicePlayer from "../components/voice/VoicePlayer";
import RecordedVoices from "../components/voice/RecordedVoices";
import ScoresChart from "../components/voice/ScoresChart";

export default {
  name: "Profile",
  components: { ScoresChart, RecordedVoices, VoicePlayer },
  data() {
    return {
      userId: this.$route.params.id,
      recordedVoices: [],
      authorOriginalVoices: [],
      FavouriteVoices: [],
      grid: {
        verticalLines: true,
        verticalLinesNumber: 1,
        horizontalLines: true,
        horizontalLinesNumber: 1,
      },
      height: 400,
    };
  },
  methods: {
    ...mapActions([
      "fetchUserRecordedVoices",
      "deleteRecordedVoice",
      "fetchUserOriginalVoices",
      "fetchChallengeByUserId",
    ]),
    changeProfilePicture() {},
    deleteRecordedvoice(id) {
      this.deleteRecordedVoice(id);
    },
  },
  created() {
    this.fetchUserRecordedVoices(this.userId).then(() => {});
    this.fetchUserOriginalVoices(this.userId);
    this.fetchChallengeByUserId(this.userId);
  },
  computed: {
    ...mapGetters({
      user: "user",
      userRecordedVoices: "userRecordedVoices",
      userOriginalVoices: "userOriginalVoices",
      scores: "scores",
      challenges: "challenges",
    }),
  },
};
</script>

<style scoped>
.user-challenges {
  margin: 20px;
}
.challenge-wrapper {
  display: flex;
}
.challenge-completed {
  flex: 1;
}
.challenge-icomplete {
  flex: 1;
}
.profile-page-container {
  margin: 100px;
  padding: 2.5rem 1rem 3.5rem;
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-picture-container {
  width: 200px;
  height: 200px;
}

.recorded-voices {
  width: 100%;
}

.recorded-voices-data .wrapper {
  width: 68%;
  margin-right: 30px;
}

.profile-picture-container img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
}

.profile-info-container {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture-container {
  width: 300px;
  height: 300px;
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.3s ease;
  cursor: pointer;
}

.profile-picture-container img {
  width: 100%;
  height: auto;
}

.profile-picture-hover {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}

.profile-picture-container:hover:before {
  background-color: rgba(255, 255, 255, 0.6);
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 100;
  border-radius: 50%;
}

.profile-picture-container:hover .profile-picture-hover {
  display: inline-block;
}

.recorded-voices-container {
  padding: 5.5rem 1rem;
}

.recorded-voices-container h1 {
  text-align: left;
}

.recorded-voice {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 30px 0;
}

.recorded-voices-data {
  display: flex;
  width: 100%;
}

.recorded-voices-chart {
  width: 40%;
  padding: 20px;
}

.user-original-voices {
  margin: 20px 0;
}

.author-original-voices-container h1 {
  text-align: left;
}

@media only screen and (max-width: 1440px) {
  .profile-page-container {
    padding: 0 1rem 3.5rem;
  }
}
</style>
