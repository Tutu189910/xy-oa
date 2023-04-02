import { queryAccount, getAccountInfo, changeAccountStatus, updateAccount, addAccount } from "@/server/main/account"

export default {
  namespaced: true,
  state() {
    return {
      accountList: { result: [], length: 0 }
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
      commit('changeAccountData', { result: list.data, length: list.data.length })
    },
    async changeAccountStatus({ dispatch }, payload) {
      const list = await changeAccountStatus(payload)
      dispatch('getAccountList')
      if (list.status) throw new Error('失败')
    },
    async updateAccount({ dispatch }, payload) {
      const list = await updateAccount(filteredObj(payload))
      console.log(payload, list);
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    },
    async addAccount({ dispatch }, payload) {
      payload = { ...payload, password: payload.password ?? 'xy123456', status: 1 }
      const list = await addAccount(payload)
      console.log(payload, list);
      dispatch('setupStore')
      if (list.status) throw new Error('失败')
    },
    setupStore({ dispatch }) {
      dispatch('getAccountList')
    },
  }
}


// 过滤对象中值为空的项
function filteredObj(obj) {
  return Object.keys(obj)
    .filter(key => obj[key])
    .reduce((acc, key) => {
      acc[key] = obj[key]; return acc;
    }, {});
}
