import axios from "axios";
import api from "./APIconfig";

const state = {
  recordedVoices: [],
};

const actions = {
  async fetchRecordedVoices({ commit }, originalVoiceId) {
    const response = await axios.get(
      api.path + `/originalvoices/${originalVoiceId}/voices`
    );
    commit("setRecordedVoices", response.data);
    console.log(response.data);
  },
  async addRecordedVoice({ commit }, { fd, user }) {
    await axios
      .post(api.path + "/recordedvoices", fd)
      .then(function (response) {
        commit("appendRecordedVoices", { ...response.data, user });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  deleteRecordedVoice({ commit }, id) {
    axios
      .delete(api.path + `/recordedvoices/${id}`)
      .then(() => commit("removeRecordedVoiceByID", id))
      .catch((err) => console.log(err));
  },
};

const mutations = {
  setRecordedVoices: (state, recordedVoices) =>
    (state.recordedVoices = recordedVoices),
  appendRecordedVoices: (state, newVoices) =>
    state.recordedVoices.push(newVoices),
  removeRecordedVoiceByID: (state, recordedVoiceID) =>
    (state.recordedVoices = state.recordedVoices.filter(
      (voice) => voice.recordedVoiceId != recordedVoiceID
    )),
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
