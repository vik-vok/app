import axios from "axios";
import api from "./APIconfig";

const state = {
  user: null,
  fetched: false,
  userRecordedVoices: [],
  userOriginalVoices: [],
  scores: {},
};

const actions = {
  async fetchUser({ commit }, uid) {
    // Change user value
    if (uid) {
      const response = await axios.get(api.path + "/users/" + uid);
      commit("setUser", response.data);
    } else {
      commit("setUser", null);
    }
  },
  async registerUser({ commit }, user) {
    var data = {
      id: user.uid,
      username: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      emailVerified: user.emailVerified,
    };
    await axios.post(api.path + "/users", data);
    commit;
  },
  async fetchUserRecordedVoices({ commit }, userId) {
    await axios
      .get(api.path + `/merger/user/${userId}/voices`)
      .then(function (response) {
        commit("setUserRecordedVoices", {
          ...response.data,
        });

        var data = response.data;
        var result = {};
        data.forEach((elem) => {
          var mp = {
            scores: [],
            dates: [],
          };
          elem.recordedVoices.forEach((recordedVoice) => {
            mp["scores"].push(recordedVoice.score * 100 || 0);

            // Date
            var dt = new Date();
            if (recordedVoice.created) {
              dt = new Date(recordedVoice.created);
            }
            var date = dt.toLocaleDateString("en-US");
            mp["dates"].push(date);
          });
          result[elem.originalVoiceId] = mp;
        });
        console.log(result);
        commit("setUserScores", {
          ...result,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  async fetchUserOriginalVoices({ commit }, userId) {
    await axios
      .get(api.path + `/users/${userId}/originalvoices`)
      .then(function (response) {
        commit("setUserOriginalVoices", {
          ...response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
    state.fetched = true;
  },
  setUserRecordedVoices: (state, userRecordedVoices) =>
    (state.userRecordedVoices = userRecordedVoices),
  setUserOriginalVoices: (state, userOriginalVoices) =>
    (state.userOriginalVoices = userOriginalVoices),
  setUserScores: (state, scores) => (state.scores = scores),
};

const getters = {
  user: (state) => state.user,
  fetched: (state) => state.fetched,
  userRecordedVoices: (state) => state.userRecordedVoices,
  userOriginalVoices: (state) => state.userOriginalVoices,
  scores: (state) => state.scores,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
