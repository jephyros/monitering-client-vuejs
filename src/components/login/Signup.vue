<template>
    <!--Grid column-->
    <div class="col-md-8 mb-4">
        <!--Card-->
        <div class="card">
            <!--Card image-->
            <div class="view overlay"></div>

            <!--Card content-->
            <div class="card-body">
                <!--Title-->
                <h4 class="card-title">회원가입</h4>

                <!--Text-->
                <ToastMessage></ToastMessage>
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(signUP)">
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
                        <ValidationProvider name="username" rules="required|min:2" v-slot="{ classes,errors }">
                            <div class="md-form form-sm">
                                <input
                                    type="text"
                                    id="username"
                                    class="form-control form-control-sm"
                                    :class="classes"
                                    v-model="username"
                                />
                                <label for="username">이름</label>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="email" rules="required|email" v-slot="{ classes,errors }">
                            <div class="md-form form-sm">
                                <input
                                    type="text"
                                    id="email"
                                    class="form-control form-control-sm"
                                    :class="classes"
                                    v-model="email"
                                />
                                <label for="email">이메일</label>
                            </div>
                        </ValidationProvider>
                        <button type="submit" class="btn btn-primary" >가입</button>                
                    </form>
                </ValidationObserver>
                
            </div>
        </div>
        <!--/.Card-->
    </div>
    <!--Grid column-->
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";

import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
extend("required",required)
extend("email",email)
extend("min",min)

import { mapActions } from "vuex";
export default {
    created() {},

    components: {
        ToastMessage
    },

    data() {
        return {
            msgstatus: true,
            userid: null,
            username: null,
            email: null,
            password: null,
            inputRules: [
                v => v.length >= 3 || "Minimum length is 3 characters."
            ]
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

        signUP: function() {
            let userObj = {
                userid: this.userid,
                username: this.username,
                email: this.email,
                password: this.password
            };
            
            this.saveUser(userObj);
            
        },
        clearForm: function() {
            (this.userid = null),
                (this.username = null),
                (this.email = null),
                (this.password = null);
        },
        saveUser: function(user) {
            //console.log(user)
            const url = "http://localhost:3000/api/v1/login/signup";
            this.$http
                .post(url, user)
                .then(result => {
                    if (result.status == 200) {                        
                        if(result.data.resultcode =="200"){
                            this.showmessage("저장되었습니다.","badge-success")
                            this.clearForm();

                        }else if(result.data.resultcode =="D01"){
                            this.showmessage("이미 존재하는 아이디입니다.","badge-warning")
                            
                        }else{
                            this.showmessage("저장실패.","badge-warning")
                        }
                        
                    } else {
                        this.showmessage("저장실패.","badge-danger")
                    }
                })
                .catch();
        }
    }
};
</script>
