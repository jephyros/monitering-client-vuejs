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
            <h4 class="card-title">회원가입</h4>
            <!--Text-->
      
            <div class="md-form form-sm">
                <input type="text" id="userid" class="form-control form-control-sm" v-model="userid">
                <label for="userid" >아이디</label>
            </div>
            <div class="md-form form-sm">
                <input type="text" id="username" class="form-control form-control-sm" v-model="username">
                <label for="username">이름</label>
            </div>
            <div class="md-form form-sm">
                <input type="text" id="email" class="form-control form-control-sm" v-model="email">
                <label for="email">이메일</label>
            </div>
            <button type="button" class="btn btn-primary" @click="signUP">가입</button>
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
        return {
            userid:null,
            username:null,
            email:null
            
        }
    },

    methods:{
        signUP(){
            let userObj ={
                userId:this.userid,
                name: this.username,
                email : this.email
            }
            EventBus.$emit('signUp',userObj)
            this.clearForm()
        },
        clearForm(){
            this.userid=null,
            this.username=null,
            this.email=null
        }
    }
    
}
</script>