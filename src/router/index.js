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
        path: 'vipForm',
        component: () => import('@/views/main/cpns/content/vipForm/vipForm.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/main/cpns/content/account/account.vue')
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

router.reloadRouter = function () {
  router.matcher = new VueRouter({
    mode: "history",
    routes
  }).matcher
}

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !window.localStorage.getItem('token')) {

    next({ name: 'login' })
  } else {
    next()
  }
})



export default router


