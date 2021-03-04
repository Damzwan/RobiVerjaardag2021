import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'

import VueCompositionAPI from '@vue/composition-api'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueTypedJs)
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
