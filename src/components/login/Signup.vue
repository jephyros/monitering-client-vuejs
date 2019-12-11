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
        <h4 class="card-title">회원가입</h4>
        <!--Text-->

        <div class="md-form form-sm">
          <input type="text" id="userid" class="form-control form-control-sm" v-model="userid" />
          <label for="userid">아이디</label>
        </div>
        <div class="md-form form-sm">
          <input
            type="password"
            id="password"
            class="form-control form-control-sm"
            v-model="password"
          />
          <label for="password">비밀번호</label>
        </div>
        <div class="md-form form-sm">
          <input type="text" id="username" class="form-control form-control-sm" v-model="username" />
          <label for="username">이름</label>
        </div>
        <div class="md-form form-sm">
          <input type="text" id="email" class="form-control form-control-sm" v-model="email" />
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
export default {
  created() {},

  data() {
    return {
      userid: null,
      username: null,
      email: null,
      password: null
    };
  },

  methods: {
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
            if(result.status==200){
                alert("저장되었습니다.")
            }else{
                alert("저장실패")
            }
          
        })
        .catch();
    }
  }
};
</script>