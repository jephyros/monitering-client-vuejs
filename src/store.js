import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        users:[
            {userId:'cis',name:'최인석',email:'cis@mail.com'},
            {userId:'lss',name:'이순신',email:'lss@mail.com'},
            {userId:'hgd',name:'홍길동',email:'hgd@mail.com'}

        ]

    },
    mutations:{

    },
    actions:{
        
    }
})