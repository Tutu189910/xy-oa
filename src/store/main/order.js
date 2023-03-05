import { deleteOrder, getOrderInfo, queryOrder, updateOrder, addOrder } from "@/server/main/order"

export default {
  namespaced: true,
  state() {
    return {
      orderList: { result: [], length: 0 }
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
      const queryData = {}
      Object.keys(payload).forEach(e => {
        if (payload[e] !== '') queryData[e] = payload[e]
      })
      const list = await queryOrder(queryData)
      if (list.status) {
        commit('changeOrderDate', { result: '', length: 0 })
      }
      console.log(queryData, list);
      commit('changeOrderDate', { result: list.data, length: list.data.length })
    },
    async deleteOrder({ dispatch }, payload) {
      const list = await deleteOrder({ ...payload, clothes_outTime: Date.now })
      console.log(payload, list);
      dispatch('getOrderList')
      if (list.status) throw new Error('失败')
    },
    async updateOrder({ dispatch }, payload) {
      const list = await updateOrder(payload)
      console.log(payload, list);
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    },
    async addOrder({ dispatch }, payload) {
      const list = await addOrder(payload)
      console.log(payload, list);
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    }
  }
}
