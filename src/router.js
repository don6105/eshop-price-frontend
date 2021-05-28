import { createWebHistory, createRouter } from "vue-router";
import GameList from "@/views/GameList.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "GameList",
    component: GameList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;