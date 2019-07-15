import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import moment from 'moment'

Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
