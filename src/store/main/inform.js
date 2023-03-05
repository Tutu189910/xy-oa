import { getInform, getBeforeInform, queryInform, deleteInform, updateInform } from "@/server/main/inform/inform"

export default {
  namespaced: true,
  state() {
    return {
      allInform: {},
      nowInform: {}
    }
  },
  getters: {
    getInform(state) {
      return state.allInform
    },
    getNowInform(state) {
      return state.nowInform
    }
  },
  mutations: {
    changeAllInform(state, data) {
      state.allInform = data
    },
    changeNowInform(state, data) {
      state.nowInform = data
    },
  },
  actions: {
    async getAllInform({ commit }) {
      const allInform = await getInform()
      commit('changeAllInform', allInform.data)
    },
    async getBeforeInform({ commit }) {
      const nowInform = await getBeforeInform()
      commit('changeNowInform', nowInform.data)
    },
    async queryInform({ commit }, payload) {
      const allInform = await queryInform(payload)
      commit('changeAllInform', allInform.data)
    },
    async deleteInform({ dispatch }, payload) {
      const list = await deleteInform(payload)
      if (list.status) throw new Error('删除失败')
      dispatch('getAllInform')
    },
    async updateInform({ dispatch }, payload) {
      console.log(payload);
      const list = await updateInform(payload)
      console.log(list);
      if (list.status) throw new Error('删除失败')
      dispatch('getAllInform')
    },
    setupStore({ dispatch }) {
      dispatch('getAllInform')
      dispatch('getBeforeInform')
    }
  }
}
