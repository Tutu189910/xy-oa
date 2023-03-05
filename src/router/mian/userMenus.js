//首页
import technical from '@/views/main/cpns/content/index/technical.vue'
import data from '@/views/main/cpns/content/index/data.vue'
// 订单
import orderFrom from '@/views/main/cpns/content/orderForm/orderForm.vue'
// 会员
import info from '@/views/main/cpns/content/vipForm/info/info.vue'
import rights from '@/views/main/cpns/content/vipForm/rights/rights.vue'
//账号
import account from '@/views/main/cpns/content/account/account.vue'
// 通知
import allinform from '@/views/main/cpns/content/inform/allInform/allInform.vue'
import publish from '@/views/main/cpns/content/inform/publish/publish.vue'
// 设置
import setting from '@/views/main/cpns/content/setting/setting.vue'

const root = [
  //首页
  {
    path: 'index/technical',
    name: 'technical',
    component: technical
  },
  {
    path: 'index/data',
    name: 'index/data',
    component: data
  },
  // 订单
  {
    path: 'orderFrom',
    component: orderFrom
  },
  // 会员
  {
    path: 'vipFrom/info',
    component: info
  },
  {
    path: 'vipFrom/rights',
    component: rights
  },
  //账号
  {
    path: 'account',
    name: 'account',
    component: account
  },
  // 通知
  {
    path: 'inform/allinform',
    component: allinform
  },
  {
    path: 'inform/publish',
    component: publish
  },
  // 设置
  {
    path: 'setting',
    component: setting
  }
]
const storeManager = [
  {
    path: 'index/technical',
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
    path: 'orderFrom/info',
    component: info
  },
  {
    path: 'orderFrom/rights',
    component: rights
  },
  {
    path: 'setting',
    component: setting
  }
]
const employee = [
  {
    path: 'index/technical',
    component: technical
  },
  {
    path: 'index/data',
    component: data
  },
  {
    path: 'orderFrom/info',
    component: info
  },
  {
    path: 'orderFrom/rights',
    component: rights
  },
  {
    path: 'setting',
    component: setting
  }
]

export function getRouteMap(level) {
  switch (level) {
    case '0':
      return root;
    case '1':
      return storeManager;
    case '2':
      return employee;
  }
}
