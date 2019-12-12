import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/user'
import Toastmessage from './modules/toastmessage'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {        
        user: User,
        toastmessage: Toastmessage

      }
})