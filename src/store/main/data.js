import { getWeekData, getYearData } from "@/server/main/data/data"
import { queryOrder } from "@/server/main/order"
import { queryVipUser } from "@/server/main/vipUser"

export default {
  namespaced: true,
  state() {
    return {
      vipSum: 0,
      orderSum: 0,
      goingOrder: 0,
      newOrderSum: 0,
      weekData: {},
      yearData: {}
    }
  },
  getters: {

  },
  mutations: {
    changeVipSum(state, data) {
      state.vipSum = data
    },
    changeOrderSum(state, data) {
      state.orderSum = data
    },
    changeGoingOrder(state, data) {
      state.goingOrder = data
    },
    changeNewOrderSum(state, data) {
      state.newOrderSum = data
    },
    changeWeekData(state, data) {
      state.weekData = data
    },
    changeYearData(state, data) {
      state.yearData = data
    }
  },
  actions: {
    async getVipData({ commit }) {
      const vipSum = await queryVipUser({ vip_status: 0 })
      commit('changeVipSum', vipSum.data.length)
    },
    async getOrderData({ commit }) {
      const goingOrder = await queryOrder({ clothes_status: 0 })
      commit('changeGoingOrder', goingOrder.data.length)
      const orderSum = await queryOrder()
      commit('changeOrderSum', orderSum.data.length)
      const newOrderSum = await queryOrder({ nowOrder: 1 })
      commit('changeNewOrderSum', newOrderSum.data.length)
    },
    async getWeekData({ commit }) {
      const weekData = await getWeekData()
      commit('changeWeekData', weekData.data.result)
    },
    async getYearData({ commit }) {
      const yearData = await getYearData()
      commit('changeYearData', yearData.data.result)
    },
    setupStore({ dispatch }) {
      dispatch('getVipData')
      dispatch('getOrderData')
      dispatch('getWeekData')
      dispatch('getYearData')
    }
  }
}
