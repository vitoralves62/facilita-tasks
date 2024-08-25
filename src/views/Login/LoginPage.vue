<template>
    <div class="main-container-login">
        <div class="blue-container">
            <div class="blue-container-content">
                <LogoType class="logo-type-login" />
                <h1 class="main-title">
                    <span class="title-bold">FACILITA</span>
                    <span class="title-regular">TASKS</span>
                </h1>
                <p class="sub-title">Gestão de tarefas pessoais</p>
            </div>
        </div>
        <div class="form-container">
            <form class="form-block" @submit.prevent="handleLogin">
                <p class="login-tittle">Entre com seus dados de acesso</p>
                <div class="email-block">
                    <legend>Nome de usuário ou e-mail:</legend>
                    <EmailInput v-model="email" class="email-input" />
                </div>
                <div class="password-block">
                    <legend>Senha:</legend>
                    <PasswordInput v-model="password" class="password-input"/>
                </div>
                <div>
                    <LoginButton class="login-button"/>
                </div>
                <a class="forgot-pass">Esqueci minha senha</a>
            </form>
        </div>
    </div>
</template>

<script>
import EmailInput from '@/components/inputs/email-input/email-input.vue';
import LogoType from "@/components/Logotype/LogoType.vue";
import PasswordInput from "@/components/inputs/password-input/password-input.vue";
import LoginButton from "@/components/login-button/login-button.vue"
import { useUserStore } from '@/stores/userStore';

export default {
    name: "LoginPage",
    components: {
        LogoType,
        EmailInput,
        PasswordInput,
        LoginButton
    },
    data() {
        return {
            email: '',
            password: ''
        };
    },
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    methods: {
        handleLogin() {
            if (this.email === 'vitor@appfacilita.com' && this.password === 'senha123') {
                const userData = {
                    name: 'Vitor Alves',
                    email: 'vitor@appfacilita.com',
                    role: 'Dev Front-end',
                    tasks: []
                };
                this.userStore.login(userData);
                this.$router.push({ name: 'HomePage' });
            } else {
                alert('Credenciais inválidas');
            }
        }
    }
};
</script>

<style lang="stylus">
    @import './LoginPage.styl';
</style>
