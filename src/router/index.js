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

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/KontaktView.vue"),
  },
  {
    path: "/ourteam",
    name: "ourteam",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OurTeam.vue"),
  },
  {
    path: "/login",
    name: "login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/galerija",
    name: "galerija",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GalleryView.vue"),
  },
  {
    path: "/prijave",
    name: "prijave",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ApplyView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
