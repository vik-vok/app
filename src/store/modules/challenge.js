import axios from "axios";
import api from "./APIconfig";

const state = {
  challenges: {
    complete: [],
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
      .get(api.path + `/merger/challenges/${userId}`)
      .then((response) => {
        console.log(response);

        var challenges = {
          complete: [],
          incomplete: [],
        };
        response.data.forEach((element) => {
          if (element.accomplished) {
            challenges.complete.push(element);
          } else {
            challenges.incomplete.push(element);
          }
        });
        commit("setChallenges", challenges);
      });
  },
};

const mutations = {
  setChallenges: (state, challenges) => (state.challenges = challenges),
};

const getters = {
  challenges: (state) => state.challenges,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
