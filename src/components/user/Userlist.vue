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
            <h4 class="card-title">회원목록</h4>
            <!--Text-->
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">아이디</th>
                        <th scope="col">이름</th>
                        <th scope="col">이메일</th>
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
export default {    
    created(){

    },

    data(){
        return{
            users:[
                {userId:'cis',name:'최인석',email:'cis@mail.com'},
                {userId:'lss',name:'이순신',email:'lss@mail.com'},
                {userId:'hgd',name:'홍길동',email:'hgd@mail.com'}

            ]
        }
    },
    mounted(){
        EventBus.$on('signUp',users => {
            this.users.push(users)
        })
    },

    methods:{


    }
    
}
</script>