import { getOrderInfo } from "@/server/main/order"

export default {
  namespaced: true,
  state() {
    return {
      orderList: ''
    }
  },
  getters: {

  },
  mutations: {
    changeOrderDate(state, data) {
      state.orderList = data
    }
  },
  actions: {
    async getOrderList({ commit }) {
      const list = await getOrderInfo()
      commit('changeOrderDate', list.data)
    }
  }
}
