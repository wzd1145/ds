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
    path: '/home',
    name: 'layout',
    component: () => import('../layout'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/index')
      },
      {
        path: '/goods/list',
        name: 'goods/list',
        component: () => import('../views/goods/list')
      },
      {
        path: '/category/list',
        name: 'category/list',
        component: () => import('../views/category/list')
      },
      {
        path: '/skus/list',
        name: 'skus/list',
        component: () => import('../views/skus/list')
      },
      {
        path: '/coupon/list',
        name: 'coupon/list',
        component: () => import('../views/coupon/list')
      },
      {
        path: '/user/list',
        name: 'user/list',
        component: () => import('../views/user/list')
      },
      {
        path: '/level/list',
        name: 'level/list',
        component: () => import('../views/level/list')
      },
      {
        path: '/order/list',
        name: 'order/list',
        component: () => import('../views/order/list')
      },
      {
        path: '/comment/list',
        name: 'comment/list',
        component: () => import('../views/comment/list')
      },
      {
        path: '/manager/list',
        name: 'manager/list',
        component: () => import('../views/manager/list')
      },
      {
        path: '/access/list',
        name: 'access/list',
        component: () => import('../views/access/list')
      },
      {
        path: '/role/list',
        name: 'role/list',
        component: () => import('../views/role/list')
      },
      {
        path: '/setting/base',
        name: 'setting/base',
        component: () => import('../views/setting/base')
      },
      {
        path: '/image/list',
        name: 'image/list',
        component: () => import('../views/image/list')
      },
      {
        path: '/notice/list',
        name: 'notice/list',
        component: () => import('../views/notice/list')
      }
    ]
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
