import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/stores/store'
import adminRouter from '@/router/modules/admin';
import loginRouter from '@/router/modules/login';
import userRouter from '@/router/modules/user';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    ...adminRouter,
    ...loginRouter,
    ...userRouter,

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'active',
    routes
})


router.beforeEach(function (to, from, next) {
    // to: 이동할 url에 해당하는 라우팅 객체

    if (to.matched.some(function (routeInfo) {
        return routeInfo.meta.authRequired;
    })) {
        // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음

        if (store.state.auth.accessToken) {
            //store.state.auth.accessToken
            let token = store.state.auth.accessToken
            let base64Url = token.split('.')[1]
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            }).join(''))
            let jwtobs = JSON.parse(jsonPayload)

            //==============================
            let curtimestamp = Math.floor(+new Date() / 1000)


            //토큰이만료되면 
            if (jwtobs.exp < curtimestamp) {
                let payload = {
                    timeout: 1500,
                    badgetype: "badge-warning", //"badge-warning", //badge-warning , badge-success, badge-danger
                    msg: "로그인이 필요합니다.",
                    left: 0,
                    top: -30
                };

                store.state.toastmessage.msg = "권한이없습니다. 로그인이 필요합니다.";
                store.state.toastmessage.badgetype = "badge-warning";
                store.state.toastmessage.timeout = 1500;
                store.state.toastmessage.msgstatus = true;
                store.state.auth.logintourl = to.path //로그인후 이동할 페이지저장
                next('/login')

            } else {
                //토큰이 만료되지않으면 
                next(); // 페이지 전환
            }


        } else {
            let payload = {
                timeout: 1500,
                badgetype: "badge-warning", //"badge-warning", //badge-warning , badge-success, badge-danger
                msg: "로그인이 필요합니다.",
                left: 0,
                top: -30
            };

            store.state.toastmessage.msg = "권한이없습니다. 로그인이 필요합니다.";
            store.state.toastmessage.badgetype = "badge-warning";
            store.state.toastmessage.timeout = 1500;
            store.state.toastmessage.msgstatus = true;
            store.state.auth.logintourl = to.path //로그인후 이동할 페이지저장
            next('/login')
        }
    } else {

        next(); // 페이지 전환
    };
});







export default router
