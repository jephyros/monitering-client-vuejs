export default [
    {
        path: '/moitering',
        name: 'moitering',
        component: () => import('@/views/Monitering.vue'),
        meta: {authRequired: true}
    },
]