import { queryVipUser, getVipUserInfo, deleteVipUser, updateVipUser, addVipUser } from "@/server/main/vipUser"

export default {
  namespaced: true,
  state() {
    return {
      vipUserList: { result: [], length: 0 }
    }
  },
  getters: {

  },
  mutations: {
    changeVipDate(state, data) {
      state.vipUserList = data
    }
  },
  actions: {
    async getvipUserList({ commit }) {
      const list = await getVipUserInfo()
      commit('changeVipDate', list.data)
    },
    async queryVipUser({ commit }, payload) {
      const queryData = {}
      Object.keys(payload).forEach(e => {
        if (payload[e] !== '') queryData[e] = payload[e]
      })
      const list = await queryVipUser(queryData)
      if (list.status) {
        commit('changeVipDate', { result: '', length: 0 })
      }
      commit('changeVipDate', { result: list.data, length: list.data.length })
    },
    async deleteVipUser({ dispatch }, payload) {
      const list = await deleteVipUser({ ...payload, clothes_outTime: Date.now })
      dispatch('getvipUserList')
      if (list.status) throw new Error('失败')
    },
    async updateVipUser({ dispatch }, payload) {
      const list = await updateVipUser(payload)
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    },
    async addVipUser({ dispatch }, payload) {
      const list = await addVipUser(payload)
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    },
    setupStore({ dispatch }) {
      dispatch('getvipUserList')
    },
  }
}
