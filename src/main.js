import Vue from 'vue'
import lodash from 'lodash'
import axios from'axios'

import App from './App.vue'
import router from './router'
import {utils} from '@/mixins/utils'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype._= lodash
Vue.mixin(utils)

export const EventBus = new Vue({
  methods:{
    fromChild(m){
        this.$emit('fromChild',m)
    }
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
