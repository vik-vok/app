// import axios from "axios";
// import api from "./APIconfig";

const state = {
  allStats: [],
  singleStats: null,
};

const actions = {
  async fetchAllStats({ commit }) {
    var data = {};
    commit("setStats", data);
  },
  async fetchStatsById({ commit }) {
    var data = {
      numberTried: 2,
      avgScore: 0.7894396743735501,
      users: [
        {
          UserId: "CV5cSwmz2JMBrbfPYH9hCPzQceE2",
          Score: 0.9231822562357122,
        },
        {
          UserId: "CV5cSwmz2JMBrbfPYH9hCPzQceE2",
          Score: 0.8680831507303111,
        },
        {
          UserId: "k70ambh1NLWa3uF3hGuBVeOf9zZ2",
          Score: 0.5770536161546271,
        },
      ],
    };
    commit("setSingleStats", data);
  },
};

const mutations = {
  setStats: (state, allStats) => (state.allStats = allStats),
  setSingleStats: (state, singleStats) => (state.singleStats = singleStats),
};

const getters = {
  allStats: (state) => state.allStats,
  singleStats: (state) => state.singleStats,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
