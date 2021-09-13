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
    meta: { title: "Notes - Dashboard" }
  },
  {
    path: "/edit/:id",
    name: "Editor",
    component: Editor,
    props: true,
    meta: { title: "Notes - Editor" }
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
    meta: { title: "Notes - Not Found" }
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const DEFAULT_TITLE = 'Notes - Dashboard';
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    // @ts-ignore
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
