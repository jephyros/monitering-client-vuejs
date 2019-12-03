<template>
    
    <!--Grid column-->
    <div class="col-md-6 mb-4">

    <!--Card-->
    <div class="card">

        <!--Card image-->
        <div class="view overlay">
        
        </div>

        <!--Card content-->
        <div class="card-body">
            <!--Title-->
            <h4 class="card-title">회원목록({{count}})</h4>
            <h2 class="card-title">서울 유저 : {{scount}} ({{ percent }}%)</h2>
            
            <!--Text-->
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">아이디</th>
                        <th scope="col">이름</th>
                        <th scope="col">이메일</th>
                        <th scope="col">지역</th>
                    </tr>
                </thead>
                <tbody v-for="(user,index) in users"
                    :key="index"

                    >
                    <tr>                    
                        <th scope="row">{{index}}</th>
                        <td>{{user.userId}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.address}}</td>
                    </tr>                
                </tbody>
            </table>
        
    
        </div>

    </div>
    <!--/.Card-->

    </div>
    <!--Grid column-->

</template>

<script>
import {EventBus} from '@/main.js'
import {mapState,mapGetters} from 'vuex'
export default {    
    created(){

    },

    data(){
        return{
            
        }
    },
    computed :{
        ...mapGetters({
            count:'usersCount',
            scount : 'seoulCount',
            percent : 'seoulPercent'


        }),
        ...mapState({
            users:'users'
        })
        //...mapState(['users'])
            
        
        //...mapGetters(['usersCount','seoulCount','seoulPercent'])
    },
    mounted(){
        EventBus.$on('signUp',users => {
            this.$store.state.users.push(users)
        })
    },

    methods:{


    }
    
}
</script>