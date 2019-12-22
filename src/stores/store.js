import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import User from './modules/user'
import Toastmessage from './modules/toastmessage'
import Auth from './modules/auth'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {        
        user: User,
        toastmessage: Toastmessage,
        auth: Auth 

      }
})
//Refresh 시 토큰 Store 저장 및 axios 에 저장 
Auth.state.accessToken = localStorage.accessToken
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Auth.state.accessToken


