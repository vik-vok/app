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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in urna nunc. Etiam viverra rutrum dolor sed gravida. Aenean non ullamcorper turpis. Morbi sagittis vehicula metus, quis vehicula lacus vehicula quis. Duis at elementum felis. Pellentesque laoreet, velit a consectetur posuere, neque magna laoreet purus, in placerat mi leo ac diam. Donec rhoncus, orci eget sodales pellentesque, lorem dolor placerat dui, id finibus ipsum orci sed nibh. In dapibus vel ante id viverra. Aliquam maximus lobortis nisi, vitae dapibus quam ultrices non. Vivamus imperdiet mauris nunc. Donec leo lectus, accumsan et rutrum at, aliquam vitae risus. Duis hendrerit hendrerit elit et varius. ",
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
