import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/login.js';
import order from './main/order';
import vipUser from './main/vipUser';
import account from './main/account';

Vue.use(Vuex)
const store = new Vuex.Store({
  state() {
    return {
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    order,
    vipUser,
    account
  }
})
export default store

export function setupStore() {
  store.dispatch('login/setupStore')
  store.dispatch('order/setupStore')
  store.dispatch('vipUser/setupStore')
  store.dispatch('account/setupStore')
}
