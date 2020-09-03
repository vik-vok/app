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
        v-model="chllangeScore"
        type="range"
        class="custom-range"
        min="0"
        max="100"
        step="0.5"
        id="customRange3"
      />
      {{ chllangeScore }}

      <select class="custom-select custom-select-sm">
        <option selected>Open this select menu</option>
        <option
          v-bind:key="user.userId"
          v-for="user in allUsers"
          :value="userId"
          >{{ user.username }}</option
        >
        <!-- <option value="2">Two</option>
            <option value="3">Three</option> -->
      </select>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "VoiceChallenge",
  data() {
    return {
      chllangeScore: 0,
    };
  },
  methods: {
    ...mapActions(["fetchAllUsers"]),
  },
  created() {
    this.fetchAllUsers();
  },
  computed: {
    ...mapGetters(["allUsers"]),
  },
};
</script>
