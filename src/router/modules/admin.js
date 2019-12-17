export default [
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/Admin.vue'),
        meta: {authRequired: true}
    },
]