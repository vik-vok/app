// import axios from 'axios';
// import api from "./APIconfig";

const state = {
  voiceComments: [],
};

const actions = {
  async fetchVoiceComments({ commit }, voiceID) {
    // const response = await axios.get(api.path + "/originalvoices/" + voiceID + "/comments")
    commit("setVoiceComments", [
      {
        text: "test1",
        ID: voiceID,
      },
      {
        text: "test2",
        ID: voiceID,
      },
    ]);
  },
};

const mutations = {
  setVoiceComments: (state, voiceComments) => {
    state.voiceComments = voiceComments;
  },
};

const getters = {
  voiceComments: (state) => state.voiceComments,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
