import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/Login/LoginPage.vue';
import HomePage from './views/Home/HomePage.vue'

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
            path: '/Home',
            name: 'HomePage',
            component: HomePage
        }
    ]
 })