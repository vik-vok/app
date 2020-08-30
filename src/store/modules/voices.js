import axios from "axios";
import api from "./APIconfig";

const state = {
  voices: [],
  voice: null,
};

const actions = {
  async fetchVoices({ commit }) {
    const response = await axios.get(api.path + "/originalvoices");
    commit("setVoices", response.data);
  },

  async fetchOneVoice({ commit }, id) {
    const response = await axios.get(api.path + "/originalvoices/" + id);
    commit("setOneVoice", response.data);
  },

  async addVoice({ commit }, data) {
    console.log(data);
    await axios.post(api.path + "/originalVoices", data);
    commit;
  },
};

const mutations = {
  setVoices: (state, voices) => (state.voices = voices),
  setOneVoice: (state, voice) => (state.voice = voice),
};

const getters = {
  allVoices: (state) => state.voices,
  popularVoices: (state) => state.voices.slice(0, 3),
  voice: (state) => state.voice,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
