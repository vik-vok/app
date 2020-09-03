<template>
  <div>
    <button class="btn btn-danger" v-b-modal="'modal-challenge-user'">
      Discover New Feautures of VikVok And Challenge Friends
    </button>
    <b-modal
      :id="'modal-challenge-user'"
      :hide-footer="true"
      title="Challenge User"
    >
      <label for="">Choose Score</label>
      <input
        v-model="challengeScore"
        type="range"
        class="custom-range"
        min="0"
        max="100"
        step="0.5"
        id="customRange3"
      />
      {{ challengeScore }}

      <select v-model="challengeUserId" class="custom-select custom-select-sm">
        <option
          v-bind:key="user.userId"
          v-for="user in allUsers"
          :value="user.userId"
          >{{ user.username }}</option
        >
      </select>
      <button class="custom-btnn btn btn-danger" @click="doChallenge">
        Challenge!
      </button>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "VoiceChallenge",
  data() {
    return {
      challengeScore: 0,
      challengeUserId: null,
    };
  },
  props: {
    voice: Object,
  },
  methods: {
    ...mapActions(["fetchAllUsers", "addChallenge", "fetchUser"]),
    doChallenge() {
      var originalVoiceId = this.voice.originalVoiceId;
      var senderUserId = this.user.userId;
      var receiverUserId = this.challengeUserId;
      var score = parseInt(this.challengeScore);
      this.addChallenge({
        originalVoiceId,
        senderUserId,
        receiverUserId,
        score,
      });
    },
  },
  created() {
    this.fetchAllUsers();
  },
  computed: {
    ...mapGetters(["allUsers", "user"]),
  },
};
</script>

<style scoped>
.custom-btnn {
  margin: 20px 0;
}
</style>
