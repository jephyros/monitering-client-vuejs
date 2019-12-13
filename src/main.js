import Vue from 'vue'
import lodash from 'lodash'
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate';



import App from './App.vue'
import router from './router'
import store from './stores/store'
import veeconfig from './config/veeValidateConfig' //vee-validate 설정 및 rules
import { utils } from '@/mixins/utils'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype._ = lodash
Vue.mixin(utils)

//--------------vee validate setting start---------------------
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

//--------------vee validate setting end ---------------------





new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
