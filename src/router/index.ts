import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";
import { firstMenu } from "@/utils/map-menus";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
    // children:[] 根据userMenus来决定
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue")
  }
];
const router = createRouter({
  routes,
  history: createWebHistory("/learning/vue3-ts-cms")
});

// 导航守卫，判断有没有登录
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }

  if (to.path === "/main" || to.path === "/main/") {
    return firstMenu.url;
  }
});

export default router;
