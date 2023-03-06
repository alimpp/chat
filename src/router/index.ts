import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    name: "base",
    redirect:"/chat",
    component: () => import("@/layout/base/index.vue"),
    children: [
      {
        path:"/chat",
        name: "chat page",
        component: () => import("@/pages/chat.vue"),
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name : "error",
    component: () => import("@/layout/error/index.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
