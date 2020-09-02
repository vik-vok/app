<template>
  <div>
    <div class="profile-container">
      <div class="profile-picture-container">
        <img
          class="dropdown-profile-picture"
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
      <div class="recorded-voices-data">
        <!-- {{userRecordedVoices}} -->
        <VoicePlayer></VoicePlayer>
        <RecordedVoices :recordedVoices="recordedVoices"></RecordedVoices>
      </div>

      <div class="recorded-voices-chart">
        <trend
          :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
          :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
          auto-draw
          smooth
        >
        </trend>
      </div>
    </div>
    <div class="author-original-voices-container">
      <div v-bind:key="voice.id" v-for="voice in authorOriginalVoices">
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

export default {
  name: "Profile",
  components: { VoicePlayer },
  data() {
    return {
      userId: this.$route.params.id,
      recordedVoices: [],
      authorOriginalVoices: [],
      FavouriteVoices: [],
    };
  },
  methods: {
    ...mapActions(["fetchUserRecordedVoices"]),
  },
  created() {
    this.fetchUserRecordedVoices(this.userId);
  },
  computed: {
    ...mapGetters({ user: "user", userRecordedVoices: "userRecordedVoices" }),
  },
};
</script>

<style scoped></style>
