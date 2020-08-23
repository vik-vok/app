import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/voices",
    name: "Voices",
    component: () => import("../views/VoicesPage.vue"),
  },
  {
    path: "/voices/:id",
    component: () => import("../views/VoiceSinglePage.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
