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
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
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
          <recorded-voices
            :recordedVoices="voice.recordedVoices"
          ></recorded-voices>
        </div>

        <div class="recorded-voices-chart">
          <trend-chart
            :datasets="data"
            :grid="grid"
            :labels="labels"
            :height="height"
          >
          </trend-chart>
        </div>
      </div>
    </div>
    <div class="author-original-voices-container">
      <div
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

export default {
  name: "Profile",
  components: { RecordedVoices, VoicePlayer },
  data() {
    return {
      userId: this.$route.params.id,
      recordedVoices: [],
      authorOriginalVoices: [],
      FavouriteVoices: [],
      labels: {
        xLabels: ["03/13", "04/13", "05/13", "06/13", "07/13"],
        yLabels: 10,
      },
      data: [
        {
          data: [10, 50, 20, 100, 40, 60, 80],
          smooth: true,
          showPoints: true,
        },
      ],
      grid: {
        verticalLines: true,
        verticalLinesNumber: 1,
        horizontalLines: true,
        horizontalLinesNumber: 1,
      },
      height: 500,
    };
  },
  methods: {
    ...mapActions(["fetchUserRecordedVoices", "fetchUserOriginalVoices"]),
    changeProfilePicture() {},
  },
  created() {
    this.fetchUserRecordedVoices(this.userId).then(() => {});
    this.fetchUserOriginalVoices(this.userId);
    // this.height = document.getElementsByClassName('recorded-voices-data').offsetHeight
    // console.log("height", this.height)
  },
  computed: {
    ...mapGetters({
      user: "user",
      userRecordedVoices: "userRecordedVoices",
      userOriginalVoices: "userOriginalVoices",
    }),
  },
};
</script>

<style scoped>
.profile-page-container {
  margin: 0 100px;
  padding: 2.5rem 1rem 3.5;
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.profile-picture-container {
  width: 200px;
  height: 200px;
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
  align-items: flex-start;
}

.profile-picture-container {
  width: 200px;
  height: 200px;
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.3s ease;
  cursor: pointer;
}

.profile-picture-container img {
  width: 100%;
  height: auto;
}

.profile-info-container {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin: 30px 0;
}

.recorded-voices-data {
  width: 60%;
}

.recorded-voices-chart {
  width: 40%;
  padding: 20px;
}
</style>
