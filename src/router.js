import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/Login/LoginPage.vue';
import HomePage from './views/Home/HomePage.vue';
import SettingsPage from './views/Settings/Settings.vue';
import TasksPage from './views/Tasks/Tasks.vue'

Vue.use(Router);

 export default new Router({
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
            component: HomePage
        },
        {
            path: '/Configuracoes',
            name: 'Settings',
            component: SettingsPage
        },
        {
            path: '/Tarefas',
            name: 'Tasks',
            component: TasksPage
        }
    ]
 })