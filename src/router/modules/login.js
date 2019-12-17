export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login.vue')           
        
    },
    {
        path: '/login/signup',         
        name: 'signup',           
        component: () => import('@/views/login/Signup.vue')
    }
    
    
]