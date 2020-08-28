import axios from "axios";
import api from "./APIconfig";

const state = {
  recordedVoices: [],
};

const actions = {
  async fetchRecordedVoices({ commit }, parentId) {
    const response = await axios.get(
      api.path + `/originalvoices/${parentId}/voices`
    );
    commit("setRecordedVoices", response.data);
  },
};

const mutations = {
  setRecordedVoices: (state, recordedVoices) =>
    (state.recordedVoices = recordedVoices),
};

const getters = {
  recordedVoices: (state) => state.recordedVoices,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
