import Vue from 'vue'
import App from './App.vue'
import { createHead } from '@unhead/vue'
import { UnheadPlugin } from '@unhead/vue/vue2'

Vue.config.productionTip = false

const head = createHead()
Vue.use(UnheadPlugin)

new Vue({
  unhead: head,
  render: h => h(App),
}).$mount('#app')
