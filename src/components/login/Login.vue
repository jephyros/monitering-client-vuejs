<template>
    
        <!--Card-->
        <div class="card">
            <!--Card image-->
            <div class="view overlay"></div>

            <!--Card content-->
            <div class="card-body">
                <!--Title-->
                <h4 class="card-title">LOGIN</h4>

                <!--Text-->
                <ToastMessage></ToastMessage>
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(loginProc)">
                        <ValidationProvider name="userid" rules="required|min:3" v-slot="{ classes,errors }">
                            <div class="md-form form-sm">
                                <input
                                    type="text"
                                    id="userid"
                                    class="form-control form-control-sm"
                                    :class="classes"
                                    v-model="userid"
                                />
                                <label for="userid">아이디</label>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="password" rules="required|min:4" v-slot="{ classes,errors }">
                            <div class="md-form form-sm">
                                <input
                                    type="password"
                                    id="password"
                                    class="form-control form-control-sm"
                                    :class="classes"
                                    v-model="password"
                                />
                                <label for="password">비밀번호</label>
                            </div>
                        </ValidationProvider>
                        
                        <button type="submit" class="btn btn-primary" >LOGIN</button>                
                    </form>
                </ValidationObserver>
                
            </div>
        </div>
        <!--/.Card-->
  
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";



import { mapActions } from "vuex";
export default {
    created() {},

    components: {
        ToastMessage
    },

    data() {
        return {            
            userid: null,            
            password: null
            
        };
    },
    computed: {
        
    },

    methods: {
        ...mapActions({
            setMessage: "toastmessage/setMessage"
        }),
        showmessage: function(msg,type, left, top) {
            
            let payload = {
                timeout: 1500,
                badgetype: type,//"badge-warning", //badge-warning , badge-success, badge-danger
                msg: msg,
                left: left,
                top: top
            };
            this.setMessage(payload);
        },

        loginProc : function() {
            let userObj = {
                userid: this.userid,                
                password: this.password
            };
            
            this.loginUser(userObj);
            
        },
        loginUser: function(user) {
            //console.log(user)
            const url = "http://localhost:3000/api/v1/login/auth";
            this.$http
                .post(url, user)
                .then(result => {
                    let token = result.data.token
                    //this.showmessage("로그인성공:"+ token,"badge-danger")
                    //토큰처리
                        
                    
                })
                .catch(err =>{
                    console.log(err)
                    this.showmessage("아이디와 비밀번호를 다시확인하세요.","badge-danger")
                });
        }
    }
};
</script>
