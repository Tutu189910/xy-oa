import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/login.js';
import order from './main/order';
import vipUser from './main/vipUser';
import account from './main/account';
import data from './main/data';
import inform from './main/inform';

Vue.use(Vuex)
const store = new Vuex.Store({
  state() {
    return {
      datas: {}
    }
  },
  getters: {
    getNickname(state) {
      return state.login.userInfo.nickname
    },
    getUserInfo(state) {
      return state.login.userInfo
    },
    getUserMenu(state) {
      return state.login.userMenu
    },
    getSum(state) {
      const obj = {
        // vipSum: state.vipSum,
        // orderSum: state.orderSum,
        // goingOrder: state.goingOrder,
        // newOrderSum: state.newOrderSum
        '会员数': state.data.vipSum,
        '总订单数': state.data.orderSum,
        '进行中': state.data.goingOrder,
        '今日新增订单数': state.data.newOrderSum
      }
      return obj
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    order,
    vipUser,
    account,
    data,
    inform
  }
})
export default store

export function setupStore() {
  store.dispatch('login/setupStore')
  store.dispatch('order/setupStore')
  store.dispatch('vipUser/setupStore')
  store.dispatch('account/setupStore')
  store.dispatch('data/setupStore')
  store.dispatch('inform/setupStore')
}
