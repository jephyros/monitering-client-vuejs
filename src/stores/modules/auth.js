export default {
    namespaced: true,

    state: {
        accessToken: null
    },
    getters: {
        GET_TOKEN: (state) => {
            return state.accessToken
        }
    },

    mutations: {
        SET_TOKEN : (state, payload) => {
            state.accessToken = payload            
            localStorage.accessToken = payload

            
        },
        LOGOUT_TOKEN : (state)  => {
            state.accessToken = null
            delete localStorage.accessToken
        }

    },
    actions: {
        SET_TOKEN: ({ commit }, payload ) => {
            commit('SET_TOKEN', payload)
        },
        LOGOUT_TOKEN: ({ commit }) => {
            commit('LOGOUT_TOKEN')
        }

    }
}