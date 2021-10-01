import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Home.vue";
import Editor from "../views/Editor.vue";
import Settings from "../views/Settings.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Notes - Dashboard" },
  },
  {
    path: "/edit/:id",
    name: "Editor",
    component: Editor,
    props: true,
    meta: { title: "Notes - Editor" },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    props: true,
    meta: { title: "Notes - Settings" },
  },
  {
    path: "/",
    redirect: { name: "Dashboard" },
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
    meta: { title: "Notes - Not Found" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const DEFAULT_TITLE = "Notes - Dashboard";
router.afterEach((to) => {
  Vue.nextTick(() => {
    if (to.meta) document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
