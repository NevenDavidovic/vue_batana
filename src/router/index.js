import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/kontakt",
    name: "kontakt",

    component: () => import("../views/KontaktView.vue"),
  },
  {
    path: "/ourteam",
    name: "ourteam",

    component: () => import("../views/OurTeam.vue"),
  },
  {
    path: "/login",
    name: "login",

    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/galerija",
    name: "galerija",

    component: () => import("../views/GalleryView.vue"),
  },
  {
    path: "/prijave",
    name: "prijave",

    component: () => import("../views/ApplyView.vue"),
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0, behavior: "smooth" };
  },
});

export default router;
