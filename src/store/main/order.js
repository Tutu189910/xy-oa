import { deleteOrder, getOrderInfo, queryOrder } from "@/server/main/order"

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
    },
    async setupStore({ commit }) {
      const list = await getOrderInfo()
      commit('changeOrderDate', list.data)
    },
    async queryOrder({ commit }, payload) {

      const list = await queryOrder(payload)
      console.log(payload, list);
      commit('changeOrderDate', list.data)
    },
    async deleteOrder({ dispatch }, payload) {
      const list = await deleteOrder(payload)
      console.log(payload, list);
      dispatch('getOrderList')
    }
  }
}
