import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c57eb514 = () => interopDefault(import('..\\pages\\fun.vue' /* webpackChunkName: "pages/fun" */))
const _2aba8e0a = () => interopDefault(import('..\\pages\\posts.vue' /* webpackChunkName: "pages/posts" */))
const _fbaab8ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fun",
    component: _c57eb514,
    name: "fun"
  }, {
    path: "/posts",
    component: _2aba8e0a,
    name: "posts"
  }, {
    path: "/",
    component: _fbaab8ee,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
