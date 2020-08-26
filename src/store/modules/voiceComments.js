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
      {
        text: "test3",
        ID: voiceID,
      },
      {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in urna nunc. Etiam viverra rutrum dolor sed gravida. Aenean non ullamcorper turpis. Morbi sagittis vehicula metus, quis vehicula lacus vehicula quis. Duis at elementum felis. Pellentesque laoreet, velit a consectetur posuere, neque magna laoreet purus, in placerat mi leo ac diam. Donec rhoncus, orci eget sodales pellentesque, lorem dolor placerat",
        ID: voiceID,
      },
    ]);
  },
  async addVoiceComment({ commit }, data) {
    console.log(data);
    // const response = await Axios.post(api.path + "/comments/")
    commit("newVoiceComment", data);
  },
};

const mutations = {
  setVoiceComments: (state, voiceComments) => {
    state.voiceComments = voiceComments;
  },
  newVoiceComment: (state, voiceComment) => {
    state.voiceComments.unshift(voiceComment);
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
