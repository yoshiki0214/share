import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Profile from "../views/Profile.vue"
import Detail from "../views/Detail.vue"
import store from "../store/index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth:true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
    meta: {
      requireAuth:true,
    },
    props: true,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireAuth) && !store.state.requireAuth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router
