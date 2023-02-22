// @/views/main/cpns/content/index/technical.vue
let userMenus = [
  {
    name: 'technical',
    path: 'index/technical',
    component: () => import('@/views/main/cpns/content/index/technical.vue')
  },
  // {
  //   path: 'index/data',
  //   component: () => import('@/views/main/cpns/content/index/data.vue')
  // },
  // {
  //   path: 'orderForm',
  //   component: () => import('@/views/main/cpns/content/orderForm/orderForm.vue')
  // },
  // {
  //   path: 'vipForm',
  //   component: () => import('@/views/main/cpns/content/vipForm/vipForm.vue')
  // },
  // {
  //   path: 'account',
  //   component: () => import('@/views/main/cpns/content/account/account.vue')
  // },
  // {
  //   path: 'setting',
  //   component: () => import('@/views/main/cpns/content/setting/setting.vue'),
  //   redirect: '/main/setting/baseSet',
  //   children: [
  //     {
  //       path: 'baseSet',
  //       component: () => import('@/views/main/cpns/content/setting/main/baseSet.vue'),
  //     },
  //     {
  //       path: 'pasSet',
  //       component: () => import('@/views/main/cpns/content/setting/main/pasSet.vue'),
  //     },
  //   ]
  // }
]
// let useStore = store
// {
//   path: 'index/technical',
//   component: () => import('@/views/main/cpns/content/index/technical.vue')
// },
export default userMenus
