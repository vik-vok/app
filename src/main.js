import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import "./components/firebaseinit.js";

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
