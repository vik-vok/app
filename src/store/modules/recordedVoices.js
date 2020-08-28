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
  async addRecordedVoice({ commit }, fd) {
    const response = await axios.post(api.path + "/recordedvoices", fd);

    commit;
    response;
    // ToDo: Auto Add
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
      (voice) => voice.id != recordedVoiceID
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
