import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/login.js';
import order from './main/order';

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
    order
  }
})
export default store

export function setupStore() {
  store.dispatch('login/setupStore')
}
