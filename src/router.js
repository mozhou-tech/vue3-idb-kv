import { createRouter, createWebHistory } from 'vue-router';
import test from '@/components/test.vue';

const routes = [
    {
        path: '/',
        name: 'test',
        component: test
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    base: '/',
    routes
});

export default router;