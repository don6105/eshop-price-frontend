import { createWebHistory, createRouter } from "vue-router";
import GameList from "@/views/GameList.vue";
import GameInfo from "@/views/GameInfo.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "GameList",
    component: GameList,
  },
  {
    path: "/info/:summary_id",
    name: "GameInfo",
    component: GameInfo,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;