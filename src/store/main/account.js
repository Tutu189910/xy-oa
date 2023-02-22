import { queryAccount, getAccountInfo, deleteAccount, updateAccount, addAccount } from "@/server/main/account"

export default {
  namespaced: true,
  state() {
    return {
      accountList: ''
    }
  },
  getters: {

  },
  mutations: {
    changeAccountData(state, data) {
      state.accountList = data
    }
  },
  actions: {
    async getAccountList({ commit }) {
      const list = await getAccountInfo()
      console.log(list);
      commit('changeAccountData', list.data)
    },
    async setupStore({ commit }) {
      const list = await getAccountInfo()
      commit('changeAccountData', list.data)
    },
    async queryAccount({ commit }, payload) {
      const queryData = {}
      Object.keys(payload).forEach(e => {
        if (payload[e] !== '') queryData[e] = payload[e]
      })
      const list = await queryAccount(queryData)
      if (list.status) {
        commit('changeAccountData', { result: '', length: 0 })
      }
      console.log(queryData, list);
      commit('changeAccountData', { result: list.data, length: list.data.length })
    },
    async deleteAccount({ dispatch }, payload) {
      const list = await deleteAccount({ ...payload, clothes_outTime: Date.now })
      console.log(payload, list);
      dispatch('getAccountList')
      if (list.status) throw new Error('失败')
    },
    async updateAccount({ dispatch }, payload) {
      const list = await updateAccount(payload)
      console.log(payload, list);
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    },
    async addAccount({ dispatch }, payload) {
      const list = await addAccount(payload)
      console.log(payload, list);
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    }
  }
}
