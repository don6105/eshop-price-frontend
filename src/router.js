import { createWebHistory, createRouter } from "vue-router";
import GameList  from "@/views/GameList.vue";
import GameInfo  from "@/views/GameInfo.vue";
import GameGroup from "@/views/GameGroup.vue";
import Login     from "@/views/Login.vue";
import NotFound  from "@/views/NotFound.vue";

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
    path: '/admin/game/group',
    name: 'GameGroup',
    component: GameGroup
  },
  {
    path: "/login",
    name: "Login",
    component: Login
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