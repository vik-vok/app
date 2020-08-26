import Vue from "vue";
import Vuex from "vuex";
import voices from "./modules/voices";
import voiceComments from "./modules/voiceComments";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    voices,
    users,
    voiceComments,
  },
});
