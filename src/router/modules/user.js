export default [
    {
    path: '/user',
    name: 'user',    
    component: () => import('@/views/User.vue'), 
    meta: {authRequired: true}
  },
]