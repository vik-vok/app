import axios from "axios";
import api from "./APIconfig";

const state = {
  challenges: [],
};

const actions = {
  async addChallenge(
    { commit },
    { originalVoiceId, senderUserId, receiverUserId, score }
  ) {
    var data = { originalVoiceId, senderUserId, receiverUserId, score };
    await axios.post(api.path + "/merger/voice/original", data);
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
