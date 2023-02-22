import technical from '@/views/main/cpns/content/index/technical.vue'
const data = () => import('@/views/main/cpns/content/index/data.vue')
const account = () => import('@/views/main/cpns/content/account/account.vue')
const orderFrom = () => import('@/views/main/cpns/content/orderForm/orderForm.vue')
const vipFrom = () => import('@/views/main/cpns/content/vipForm/vipForm.vue')
import setting from '@/views/main/cpns/content/setting/setting.vue'

const root = [
  {
    path: 'index/rechinical',
    component: technical
  },
  {
    path: 'index/data',
    component: data
  },
  {
    path: 'account',
    component: account
  },
  {
    path: 'orderFrom',
    component: orderFrom
  },
  {
    path: 'vipFrom',
    component: vipFrom
  },
  {
    path: 'setting',
    component: setting
  }
]
const storeManager = [
  {
    path: 'index/rechinical',
    component: technical
  },
  {
    path: 'index/data',
    component: data
  },
  {
    path: 'account',
    component: account
  },
  {
    path: 'orderFrom',
    component: orderFrom
  },
  {
    path: 'vipFrom',
    component: vipFrom
  },
  {
    path: 'setting',
    component: setting
  }
]
const employee = [
  {
    path: 'index/rechinical',
    component: technical
  },
  {
    path: 'index/data',
    component: data
  },
  {
    path: 'orderFrom',
    component: orderFrom
  },
  {
    path: 'vipFrom',
    component: vipFrom
  },
  {
    path: 'setting',
    component: setting
  }
]

export function getRouters(level) {
  switch (level) {
    case 0:
      return root;
    case 1:
      return storeManager;
    case 2:
      return employee;
  }
}
