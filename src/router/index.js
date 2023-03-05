import store, { setupStore } from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/main/index/technical'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/main/main.vue'),
    children: [
      {
        path: 'index/technical',
        component: () => import('@/views/main/cpns/content/index/technical.vue')
      },
      {
        path: 'index/data',
        component: () => import('@/views/main/cpns/content/index/data.vue')
      },
      {
        path: 'orderForm',
        component: () => import('@/views/main/cpns/content/orderForm/orderForm.vue')
      },
      {
        path: 'vipForm/info',
        component: () => import('@/views/main/cpns/content/vipForm/info/info.vue'),
      },
      {
        path: 'vipForm/rights',
        component: () => import('@/views/main/cpns/content/vipForm/rights/rights.vue'),
      },
      {
        path: 'account',
        component: () => import('@/views/main/cpns/content/account/account.vue')
      },
      {
        path: 'inform/allinform',
        component: () => import('@/views/main/cpns/content/inform/allInform/allInform.vue')
      },
      {
        path: 'inform/publish',
        component: () => import('@/views/main/cpns/content/inform/publish/publish.vue')
      },
      {
        path: 'setting',
        component: () => import('@/views/main/cpns/content/setting/setting.vue'),
        redirect: '/main/setting/baseSet',
        children: [
          {
            path: 'baseSet',
            component: () => import('@/views/main/cpns/content/setting/main/baseSet.vue'),
          },
          {
            path: 'pasSet',
            component: () => import('@/views/main/cpns/content/setting/main/pasSet.vue'),
          },
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log(to.path);
  if (to.path !== '/login' && !window.localStorage.getItem('token')) {
    next({ name: 'login' })
  } else {
    if (to.path !== '/login') {
      const hasGetRoute = store.getters['login/hasGetRoute']
      const routeMap = JSON.parse(sessionStorage.getItem('routeMap'))
      if (!hasGetRoute && routeMap) {
        // 刷新页面且有route记录数据，可再次追加动态路由
        store.dispatch('login/updateRouteOfUser', routeMap)
        next({ ...to, replace: true })
      }
    }
    if (!store.getters['userInfo']) setupStore()
    next()
  }
})
router.reloadRouter = function () {
  router.matcher = new VueRouter({
    mode: "history",
    routes
  }).matcher
}


export default router


