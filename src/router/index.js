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
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/city/:cityid",
    component: City,
  },
  {
    path: "/msite",
    component: Msite,
  },
  {
    path: "/food",
    component: Food,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forget",
    component: Forget,
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
  routes
})

export default router
