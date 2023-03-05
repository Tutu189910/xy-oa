import { getUserInfo, login } from "@/server/login"
import { setLocal, getLocal } from "@/tool/localTool"
import router from "@/router"
import { getMenu } from "./menu.config"
import { getRouteMap } from "@/router/mian/userMenus"

export default {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: {},
      routeMap: JSON.parse(sessionStorage.getItem('routeMap')) || [],
      hasGetRoute: false
    }
  },
  getters: {
    hasGetRoute: state => state.hasGetRoute,
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu) {
      state.userMenu = userMenu
    },
    setRouteMap(state, routers) {
      state.routeMap = routers
      // 为了防止用户刷新页面导致动态创建的路由失效，将其存储在本地中
      sessionStorage.setItem('routeMap', JSON.stringify(routers));
    },
    setDynamicRouteMap(state, routers) {
      state.hasGetRoute = true
      let routerMaps = routers
      // 追加路由
      // 这块是重点，如果直接使用addRoute是无效的
      routerMaps.forEach(item => {
        router.addRoute('main', item);
      })
    }
  },
  actions: {
    async yLogin({ commit, state }, payload) {
      const res = await login(payload)
      if (res.token) {
        setLocal('token', res.token)
        commit('changeToken', res.token)
        const { data } = await getUserInfo()
        commit('changeUserInfo', data)
        console.log(getMenu(state.userInfo.level), state.userInfo.level);
        commit('changeUserMenu', getMenu(state.userInfo.level))

        const menus = getRouteMap(state.userInfo.level)
        commit('setRouteMap', menus)
        commit('setDynamicRouteMap', menus)

        router.push('/')
        console.log(router.getRoutes());
      } else {
        throw new Error('失败')
      }
    },
    async setupStore({ commit, state }) {
      const token = getLocal('token')
      commit('changeToken', token)
      const { data } = await getUserInfo()
      commit('changeUserInfo', data)
      if (token) {
        commit('changeUserMenu', getMenu(state.userInfo.level))
      }
    },
    updateRouteOfUser({ commit }, routerMap) {
      commit('setDynamicRouteMap', routerMap)
    },
  },
  modules: {
  }
}

