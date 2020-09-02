import axios from "axios";
import api from "./APIconfig";

const state = {
  allStats: [],
  singleStats: null,
};

const actions = {
  async fetchAllStats({ commit }) {
    var data = {};
    commit("setStats", data);
  },
  async fetchStatsById({ commit }, originalVoiceId) {
    await axios
      .get(api.path + "/merger/statistics/voice/" + originalVoiceId)
      .then(function (response) {
        commit("setSingleStats", response.data);
      });
  },
};

const mutations = {
  setStats: (state, allStats) => (state.allStats = allStats),
  setSingleStats: (state, singleStats) => (state.singleStats = singleStats),
};

const getters = {
  allStats: (state) => state.allStats,
  singleStats: (state) => state.singleStats,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
