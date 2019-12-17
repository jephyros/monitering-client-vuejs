export default {
    namespaced: true,

    state: {
        accessToken: null,
        logintourl: null,
    },
    getters: {
        GET_TOKEN: (state) => {
            return state.accessToken
        },
        GET_LOGINTOURL: (state) => {
            return state.logintourl
        }
    },

    mutations: {
        SET_TOKEN: (state, payload) => {
            state.accessToken = payload
            localStorage.accessToken = payload
        },
        LOGOUT_TOKEN: (state) => {
            state.accessToken = null
            delete localStorage.accessToken
        }
        ,
        SET_LOGINTOURL: (state,payload) => {
            state.logintourl = payload
            
        }

    },
    actions: {
        SET_TOKEN: ({ commit }, payload) => {
            commit('SET_TOKEN', payload)
        },
        LOGOUT_TOKEN: ({ commit }) => {
            commit('LOGOUT_TOKEN')
        },SET_LOGINTOURL: ({ commit }, payload) => {
            commit('SET_LOGINTOURL',payload)
        },


    }
}