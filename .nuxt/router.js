import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05f63275 = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _0f5ae818 = () => interopDefault(import('../pages/hisleaf.vue' /* webpackChunkName: "pages/hisleaf" */))
const _742517bf = () => interopDefault(import('../pages/hispun.vue' /* webpackChunkName: "pages/hispun" */))
const _1c640315 = () => interopDefault(import('../pages/historyall.vue' /* webpackChunkName: "pages/historyall" */))
const _0c7e87fc = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _1dc9f077 = () => interopDefault(import('../pages/leafcoin.vue' /* webpackChunkName: "pages/leafcoin" */))
const _76aafd11 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a874a4dc = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _674845af = () => interopDefault(import('../pages/punpoint.vue' /* webpackChunkName: "pages/punpoint" */))
const _2e4d8cb7 = () => interopDefault(import('../pages/reward.vue' /* webpackChunkName: "pages/reward" */))
const _6a7d1d8c = () => interopDefault(import('../pages/rewardall.vue' /* webpackChunkName: "pages/rewardall" */))
const _29ef0d94 = () => interopDefault(import('../pages/scanpage.vue' /* webpackChunkName: "pages/scanpage" */))
const _a5f94c0c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _05f63275,
    name: "activities"
  }, {
    path: "/hisleaf",
    component: _0f5ae818,
    name: "hisleaf"
  }, {
    path: "/hispun",
    component: _742517bf,
    name: "hispun"
  }, {
    path: "/historyall",
    component: _1c640315,
    name: "historyall"
  }, {
    path: "/inspire",
    component: _0c7e87fc,
    name: "inspire"
  }, {
    path: "/leafcoin",
    component: _1dc9f077,
    name: "leafcoin"
  }, {
    path: "/login",
    component: _76aafd11,
    name: "login"
  }, {
    path: "/logout",
    component: _a874a4dc,
    name: "logout"
  }, {
    path: "/punpoint",
    component: _674845af,
    name: "punpoint"
  }, {
    path: "/reward",
    component: _2e4d8cb7,
    name: "reward"
  }, {
    path: "/rewardall",
    component: _6a7d1d8c,
    name: "rewardall"
  }, {
    path: "/scanpage",
    component: _29ef0d94,
    name: "scanpage"
  }, {
    path: "/",
    component: _a5f94c0c,
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
