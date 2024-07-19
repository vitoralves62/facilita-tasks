<template>
    <div class="main-container">
        <div class="blue-container">
            <div class="blue-container-content">
                <LogoType
                    class="logo-type-login"
                />
                <h1 class="main-title">
                    <span class="title-bold">FACILITA</span>
                    <span class="title-regular">TASKS</span>
                </h1>
                <p>Gestão de tarefas pessoais</p>
            </div>
        </div>
        <div class="form-container">
            <form>
                <p>Entre com seus dados de acesso</p>
                <div class="email-block">
                    <legend>Nome de usuário ou e-mail:</legend>
                    <emailInput class="email-input" />
                </div>
                <div class="password-block">
                    <legend>Senha:</legend>
                    <PasswordInput class="password-input"/>
                </div>
                <div>
                    <LoginButton class="login-button"/>
                </div>
                <a>Esqueci minha senha</a>
            </form>
        </div>
    </div>
</template>

<script>
    import emailInput from '@/components/inputs/email-input/email-input.vue';
    import LogoType from "../../components/Logotype/LogoType.vue";
    import PasswordInput from "@/components/inputs/password-input/password-input.vue"
    import LoginButton from "@/components/login-button/login-button.vue"

    export default {
        name: "LoginPage",
        components: {
            LogoType,
            emailInput,
            PasswordInput,
            LoginButton
        },
    };
</script>

<style lang="stylus">
    @import './LoginPage.styl';
</style>