import axios from "axios";
import api from "./APIconfig";
// import { filter } from "core-js/fn/array";

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
    const response = await axios.post(api.path + "/comments", data.data);
    var newData = {
      ...response.data,
      user: {
        ...data.user,
      },
    };
    commit("newVoiceComment", newData);
  },
  deleteVoiceComment({ commit }, id) {
    console.log("delete");
    console.log(id);
    axios
      .delete(api.path + `/comments/${id}`)
      .then(() => commit("removeCommentByID", id))
      .catch((err) => console.log(err));
  },
};

const mutations = {
  setVoiceComments: (state, voiceComments) => {
    state.voiceComments = voiceComments;
  },
  newVoiceComment: (state, voiceComment) => {
    state.voiceComments.push(voiceComment);
  },
  removeCommentByID: (state, commentID) => {
    state.voiceComments = state.voiceComments.filter(
      (comment) => comment.ID != commentID
    );
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
