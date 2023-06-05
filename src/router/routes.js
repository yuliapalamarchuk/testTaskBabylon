const routes = [
  {
    path: "/",
    component: () => import("pages/WelcomePage"),
    children: [],
  },

  {
    path: "/app",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/scene", component: () => import("pages/IndexPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
