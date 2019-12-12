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

                <div class="md-form form-sm">
                    <input
                        type="text"
                        id="userid"
                        class="form-control form-control-sm"
                        :class="idValid"
                        v-model="userid"
                        :rules="inputRules"
                    />
                    <label for="userid">아이디</label>
                </div>
                <div class="md-form form-sm">
                    <input
                        type="password"
                        id="password"
                        class="form-control form-control-sm"
                        :class="passwordValid"
                        v-model="password"
                    />
                    <label for="password">비밀번호</label>
                </div>
                <div class="md-form form-sm">
                    <input
                        type="text"
                        id="username"
                        class="form-control form-control-sm"
                        :class="userNameValid"
                        v-model="username"
                    />
                    <label for="username">이름</label>
                </div>
                <div class="md-form form-sm">
                    <input
                        type="text"
                        id="email"
                        class="form-control form-control-sm"
                        :class="emailValid"
                        v-model="email"
                    />
                    <label for="email">이메일</label>
                </div>

                <button type="button" class="btn btn-primary" @click="signUP">가입</button>
                <button @click="showmessage('메세지보여주기!!!!!!!ABCDEFGHI가나다라마바사',0,0)">show</button>
            </div>
        </div>
        <!--/.Card-->
    </div>
    <!--Grid column-->
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
        idValid: function() {
            if (this.userid) {
                return "is-valid";
            }
            return "";
        },
        passwordValid: function() {
            if (this.password) {
                return "is-valid";
            }
            return "";
        },
        userNameValid: function() {
            if (this.username) {
                return "is-valid";
            }
            return "";
        },
        emailValid: function() {
            let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if (this.email) {
                let mailstr = this.email;

                if (mailstr.match(regExp) != null) {
                    return "is-valid";
                } else {
                    return "is-invalid";
                }
            }
            return "";
        }
    },

    methods: {
        ...mapActions({
            setMessage: "toastmessage/setMessage"
        }),
        showmessage: function(msg, left, top) {
            let payload = {
                timeout: 1500,
                badgetype: "badge-warning", //badge-warning , badge-success, badge-danger
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
            this.clearForm();
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
                        alert("저장되었습니다.");
                    } else {
                        alert("저장실패");
                    }
                })
                .catch();
        }
    }
};
</script>
