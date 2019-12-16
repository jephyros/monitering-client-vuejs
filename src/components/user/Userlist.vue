<template>
    <!--Grid column-->
    <div class="col-md-6 mb-4">
        <!--Card-->
        <div class="card">
            <!--Card image-->
            <div class="view overlay"></div>

            <!--Card content-->
            <div class="card-body">
                <!--Title-->

                <h4 class="card-title">회원목록</h4>
                <ToastMessage></ToastMessage>
                <button class="btn btn-primary" @click="userList()">조회</button>

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
                    <tbody v-for="(user,index) in users" :key="index">
                        <tr>
                            <th scope="row">{{index}}</th>
                            <td>{{user.userid}}</td>
                            <td>{{user.username}}</td>
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
import ToastMessage from "@/components/ToastMessage.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    created() {},

    data() {
        return {
            users: null
        };
    },
    computed: {
        ...mapGetters({
            token: "auth/GET_TOKEN"
        })
    },
    components: {
        ToastMessage
    },

    methods: {
        ...mapActions({
            SET_MESSAGE: "toastmessage/SET_MESSAGE"
        }),
        showmessage: function(msg, type) {
            let payload = {
                timeout: 1500,
                badgetype: type, //"badge-warning", //badge-warning , badge-success, badge-danger
                msg: msg,
                left: 0,
                top: -30
            };
            this.SET_MESSAGE(payload);
        },
        userList: function() {
            const url = "http://localhost:3000/api/v1/users";
            const params = {
                limit: 10
            };            
            this.$http
                .get(url, { params: params })
                .then(result => {
                    if (result.data.resultcode == "401") {
                        this.showmessage(
                            "권한이 없습니다. 재 로그인을 해주세요.",
                            "badge-warning"
                        );
                        this.$router.replace('login') 
                    }
                    this.users = result.data.resultdata
                })
                .catch(err => {
                    this.showmessage(
                        "조회시 에러가 발생하였습니다.",
                        "badge-danger"
                    );
                });
        }
    }
};
</script>