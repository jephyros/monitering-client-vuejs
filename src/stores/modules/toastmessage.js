export default {
    namespaced: true,

    state: {
        msgstatus: false,
        badgetype : "badge-warning", //badge-warning , badge-success, badge-danger
        msg: "",
        left:0,
        top:0


    },
    getters: {
        getMsgstatus: function (state) {
            return state.msgstatus
        },
        getMsg: function (state) {
            return state.msg
        },
        getLeft: function (state) {
            return state.left
        },
        getTop: function (state) {
            return state.top
        },
        getBadgetype: function (state) {
            return state.badgetype
        }




    },
    mutations: {
        setVisible: (state, payload) => {
            state.msgstatus = true
            state.msg = payload.msg
            state.left = payload.left
            state.top = payload.top
            if(payload.badgetype){
                state.badgetype = payload.badgetype
            }else{
                state.badgetype = "badge-warning"
            }
            
        },
        setInvisible: (state, payload) => {
            state.msgstatus = false
            state.msg = ""

        }

    },
    actions: {
        
        setMessage: ({ commit }, payload) => {
            commit('setVisible', payload)
            setTimeout(()=>{
                commit('setInvisible', false)
            },payload.timeout)
            

        }

    }
}