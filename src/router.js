// router.js
import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/Login/LoginPage.vue';
import HomePage from './views/Home/HomePage.vue';
import SettingsPage from './views/Settings/Settings.vue';
import TasksPage from './views/Tasks/Tasks.vue';
import { useUserStore } from './stores/userStore';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/Dashboard',
            name: 'HomePage',
            component: HomePage,
            meta: { requiresAuth: true }
        },
        {
            path: '/Configuracoes',
            name: 'Settings',
            component: SettingsPage,
            meta: { requiresAuth: true }
        },
        {
            path: '/Tarefas',
            name: 'Tasks',
            component: TasksPage,
            meta: { requiresAuth: true }
        }
    ]
});

let piniaInitialized = false;

router.beforeEach((to, from, next) => {
    const pinia = router.app.$pinia;

    if (!pinia) {
        console.log('Pinia não foi inicializado corretamente.');
        if (to.name !== 'Login') {
            next({ name: 'Login' });
        } else {
            next();
        }
        return;
    }

    // O Pinia está inicializado
    if (!piniaInitialized) {
        piniaInitialized = true;
        console.log("Pinia foi inicializado");
    }

    const userStore = useUserStore(pinia);

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!userStore.user) {
            next({ name: 'Login' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
