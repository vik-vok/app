import axios from "axios";
import api from "./APIconfig";

const state = {
  user: null,
  fetched: false,
  userRecordedVoices: [],
  userOriginalVoices: [],
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
        console.log("shemodixar aqqq??", response);
        commit("setUserRecordedVoices", { ...response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  async fetchUserOriginalVoices({ commit }, userId) {
    await axios
      .get(api.path + `/users/${userId}/originalvoices`)
      .then(function (response) {
        commit("setUserOriginalVoices", { ...response.data });
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
};

const getters = {
  user: (state) => state.user,
  fetched: (state) => state.fetched,
  userRecordedVoices: (state) => state.userRecordedVoices,
  userOriginalVoices: (state) => state.userOriginalVoices,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
