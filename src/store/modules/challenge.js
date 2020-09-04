import axios from "axios";
import api from "./APIconfig";

const state = {
  challenges: {
    complete: [
      {
        challengeId: 1,
        sender: "saba",
        score: 90,
      },
      {
        challengeId: 1,
        sender: "saba",
        score: 90,
      },
      {
        challengeId: 1,
        sender: "saba",
        score: 90,
      },
      {
        challengeId: 1,
        sender: "saba",
        score: 90,
      },
      {
        challengeId: 1,
        sender: "saba",
        score: 90,
      },
    ],
    incomplete: [],
  },
};

const actions = {
  async addChallenge(
    { commit },
    { originalVoiceId, senderUserId, receiverUserId, score }
  ) {
    var data = { originalVoiceId, senderUserId, receiverUserId, score };
    await axios.post(api.path + "/challenges", data);
    commit;
  },
  async fetchChallengeByUserId({ commit }, userId) {
    await axios
      .post(api.path + `/merger/challenges/${userId}`)
      .then((response) => {
        console.log(response);
        commit;
      });
  },
};

const mutations = {};

const getters = {
  challenges: (state) => state.challenges,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
