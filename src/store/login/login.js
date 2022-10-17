import { getUesrInfo, login } from "@/server/login"
import { setLocal, getLocal } from "@/tool/localTool"
import router from "@/router"
import { getMenu } from "./menu.config"
import { Message } from "element-ui"
// import { getRouters } from "@/router/mian/userMenus"

export default {
  namespaced: true,
  state() {
    return {
      token: '',
      uesrInfo: '',
      uesrMenu: ''
    }
  },
  getters: {
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUesrInfo(state, uesrInfo) {
      state.uesrInfo = uesrInfo
    },
    changeUesrMenu(state, uesrMenu) {
      state.uesrMenu = uesrMenu
    }

  },
  actions: {
    async yLogin({ commit, state }, payload) {
      const { token } = await login(payload)
      if (token) {
        setLocal('token', token)
        commit('changeToken', token)
        const { data } = await getUesrInfo()
        commit('changeUesrInfo', data)
        commit('changeUesrMenu', getMenu(state.uesrInfo.level))
        // 动态注册路由  ###（有问题）
        // getRouters(state.uesrInfo.level).forEach(item => {
        //   router.addRoute('main', item)
        // });
        router.push('/')
        Message({
          type: 'success',
          message: '登录成功'
        })
      } else {
        Message({
          type: 'error',
          message: '账号或密码错误'
        })
      }
    },
    async setupStore({ commit, state }) {
      const token = getLocal('token')
      commit('changeToken', token)
      const { data } = await getUesrInfo()
      commit('changeUesrInfo', data)
      if (token) {
        commit('changeUesrMenu', getMenu(state.uesrInfo.level))
      }
    }
  },
  modules: {
  }
}
