import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Home.vue";
import Editor from "../views/Editor.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/edit/:id",
    name: "Editor",
    component: Editor,
    props: true,
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
