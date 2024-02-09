import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37376fec = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _5c05c2a3 = () => interopDefault(import('../pages/hisleaf.vue' /* webpackChunkName: "pages/hisleaf" */))
const _0a818058 = () => interopDefault(import('../pages/hispun.vue' /* webpackChunkName: "pages/hispun" */))
const _0a5bceac = () => interopDefault(import('../pages/historyall.vue' /* webpackChunkName: "pages/historyall" */))
const _466b968d = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _667a674c = () => interopDefault(import('../pages/leafcoin.vue' /* webpackChunkName: "pages/leafcoin" */))
const _965e0348 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _325fd5a7 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _a00e86f8 = () => interopDefault(import('../pages/punpoint.vue' /* webpackChunkName: "pages/punpoint" */))
const _96309668 = () => interopDefault(import('../pages/reward.vue' /* webpackChunkName: "pages/reward" */))
const _cfc055f6 = () => interopDefault(import('../pages/rewardall.vue' /* webpackChunkName: "pages/rewardall" */))
const _729f8469 = () => interopDefault(import('../pages/scanpage.vue' /* webpackChunkName: "pages/scanpage" */))
const _29ad4976 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activities",
    component: _37376fec,
    name: "activities"
  }, {
    path: "/hisleaf",
    component: _5c05c2a3,
    name: "hisleaf"
  }, {
    path: "/hispun",
    component: _0a818058,
    name: "hispun"
  }, {
    path: "/historyall",
    component: _0a5bceac,
    name: "historyall"
  }, {
    path: "/inspire",
    component: _466b968d,
    name: "inspire"
  }, {
    path: "/leafcoin",
    component: _667a674c,
    name: "leafcoin"
  }, {
    path: "/login",
    component: _965e0348,
    name: "login"
  }, {
    path: "/logout",
    component: _325fd5a7,
    name: "logout"
  }, {
    path: "/punpoint",
    component: _a00e86f8,
    name: "punpoint"
  }, {
    path: "/reward",
    component: _96309668,
    name: "reward"
  }, {
    path: "/rewardall",
    component: _cfc055f6,
    name: "rewardall"
  }, {
    path: "/scanpage",
    component: _729f8469,
    name: "scanpage"
  }, {
    path: "/",
    component: _29ad4976,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
