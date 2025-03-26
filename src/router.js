import { createRouter, createWebHashHistory } from 'vue-router';
import PolyLine from '_c/test.vue';

const routes = [
    {
        path: '/',
        component: PolyLine
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;