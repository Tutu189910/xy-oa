import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'

import '@/assets/css/index.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles'
import '@/assets/css/element-loading.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueParticles)
setupStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
