import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Home from '../views/Home.vue'
import Index from "@/views/Index.vue";

const routes: Array<RouteRecordRaw> = [
  
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 };
  },
});

export default router;