import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import { FontAwesomeIcon } from './fontAwesome'
import { PiniaVuePlugin, createPinia } from 'pinia'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')
