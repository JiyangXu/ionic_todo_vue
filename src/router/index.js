import { createRouter, createWebHistory } from "@ionic/vue-router";
import App from "../../src/App";
const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
