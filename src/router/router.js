import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
Vue.use(Router);

import About from "../views/About";

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    }
  ]
});
