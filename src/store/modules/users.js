import axios from "axios";
import api from "./APIconfig";

const state = {
  user: null,
  fetched: false,
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
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
    state.fetched = true;
  },
};

const getters = {
  user: (state) => state.user,
  fetched: (state) => state.fetched,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
