import Vue from 'vue'
import lodash from 'lodash'
import axios from 'axios'
import * as VueGoogleMaps from "vue2-google-maps";
import { ValidationObserver, ValidationProvider } from 'vee-validate';

Vue.use(VueGoogleMaps, {
    load: {
      key: "XXX",
      libraries: "places" // necessary for places input
    }
  });
  console.log('env', JSON.stringify(process.env.NODE_ENV))
  console.log(">>>>>>>>>>>>>>>>>>",process.env.CIS_GOOGLEMAP_API_KEY)
  console.log(">>>>>>>>>>>>>>>>>>",process.env.ACI_DATASOURCE_HOST)
  


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
