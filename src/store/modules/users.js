import axios from "axios";
import api from "./APIconfig";

const state = {
  user: null,
  fetched: false,
  userRecordedVoices: [],
  userOriginalVoices: [],
  scores: {},
  allUsers: {},
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
          console.log(
            elem.recordedVoices.sort(function (rec1, rec2) {
              return new Date(rec1.created) - new Date(rec2.created);
            })
          );

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
  async fetchAllUsers({ commit }) {
    const response = await axios.get(api.path + "/users");
    commit("setAllUsers", response.data);
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
  setAllUsers: (state, allUsers) => (state.allUsers = allUsers),
};

const getters = {
  user: (state) => state.user,
  fetched: (state) => state.fetched,
  userRecordedVoices: (state) => state.userRecordedVoices,
  userOriginalVoices: (state) => state.userOriginalVoices,
  scores: (state) => state.scores,
  allUsers: (state) => state.allUsers,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
