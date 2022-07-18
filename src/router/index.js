import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/:cathchAll(.*)',
    name: '404',
    component: () => import('../views/404')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
NProgress.configure({
  showSpinner: true,
  easing: 'ease',
  speed: 2000,
  minimum: 0
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
export default router
