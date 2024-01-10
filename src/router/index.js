import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            name : 'home',
            path : '/',
            component : HomeView
        },
        {
            name : 'about',
            path : '/about',
            component : AboutView
        }
    ]
})
export default router;