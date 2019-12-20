import Vue from 'vue'
import lodash from 'lodash'
import moment from 'moment'
import axios from 'axios'
import * as VueGoogleMaps from "vue2-google-maps";
import { ValidationObserver, ValidationProvider } from 'vee-validate';

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_MAP_KEY,
        libraries: "places" // necessary for places input
    }
});




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
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

//--------------vee validate setting end ---------------------



Vue.filter('formatDate', function (value) {
    if (value) {        
        return moment(value).format('YYYY/MM/DD HH:mm:ss')
    }
})
 
  



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

