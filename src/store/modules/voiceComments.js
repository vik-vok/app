import axios from "axios";
import api from "./APIconfig";

const state = {
  voiceComments: [],
};

const actions = {
  async fetchVoiceComments({ commit }, voiceID) {
    const response = await axios.get(
      api.path + `/originalvoices/${voiceID}/comments`
    );
    commit("setVoiceComments", response.data);
  },
  async addVoiceComment({ commit }, data) {
    console.log(data);
    const response = await axios.post(api.path + "/comments", data);
    commit("newVoiceComment", response.data);
  },
};

const mutations = {
  setVoiceComments: (state, voiceComments) => {
    state.voiceComments = voiceComments;
  },
  newVoiceComment: (state, voiceComment) => {
    state.voiceComments.push(voiceComment);
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
