import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home";
import City from '../views/city';
import Msite from "../views/msite";
import Food from "../views/food";
import Search from "../views/search";
import Order from "../views/order";
import Profile from "../views/profile";
import Login from "../views/login";
import Forget from "../views/forget";
import Shop from "../views/shop";
Vue.use(VueRouter);

const routes = [
  {
    name: "/",
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    name: "homename",
  },
  {
    name: "cityname",
    path: "/city/:cityid",
    component: City,
    props: true,
  },
  {
    name: "msitename",
    path: "/msite",
    component: Msite,
  },
  {
    name: "foodname",
    path: "/food",
    component: Food,
    props: (route) => ({ query: route.query, title: route.query.title }),
  },
  {
    name: "searchname",
    path: "/search",
    component: Search,
  },
  {
    name: "ordername",
    path: "/order",
    component: Order,
  },
  {
    name: "profilename",
    path: "/profile",
    component: Profile,
  },
  {
    name: "loginname",
    path: "/login",
    component: Login,
  },
  {
    name: "forgetname",
    path: "/forget",
    component: Forget,
  },
  {
    name: "shop",
    path: "/shop",
    component: Shop,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeResolve((to, from, next) => {
  // to and from are both route objects. must call `next`.

  next();
});
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.

  next();
});

router.afterEach((to, from) => {
  // to and from are both route objects.
});
export default router
