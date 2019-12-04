export default {
    namespaced: true,
    state:{
        users:[
            {userId:'cis',name:'최인석',email:'cis@mail.com',address:"서울"},
            {userId:'lss',name:'이순신',email:'lss@mail.com',address:"부산"},
            {userId:'hgd',name:'홍길동',email:'hgd@mail.com',address:"서울"}

        ]

    },
    getters:{
        usersCount: function(state){
            return state.users.length
        },        
        seoulCount: state=>{
            return state.users.filter(v=>v.address=="서울").length
        },
        SEOUL_PERCENT: (state,getters) =>{
            return Math.round(getters.seoulCount / getters.usersCount * 10000) / 100.0
        },
        USER_LISTS: state=>{
            return state.users;

        }

    },
    mutations:{
        addUser: (state,payload) => {
            state.users.push(payload)
        }

    },
    actions:{
        addUser:({commit},payload)=>{
            commit('addUser',payload)
        }
        
    }
}