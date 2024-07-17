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
                <emailInput class="email-input" />
                <PasswordInput class="password-input"/>
                <LoginButton class="login-button"/>
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