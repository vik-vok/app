import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import "./components/firebaseinit.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRecord from "@codekraft-studio/vue-record";

Vue.use(VueRecord);

import { ModalPlugin } from "bootstrap-vue";
Vue.use(ModalPlugin);

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged((user) => {
  if (user) store.dispatch("fetchUser", user.uid);
  else store.dispatch("fetchUser", null);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
