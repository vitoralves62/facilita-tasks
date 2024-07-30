<template>
    <div class="main-container-home">
        <HeaderMain 
            class="header-main"
        />
        <SidebarMain
            class="side-bar-main"
        />
        <h1 class="settings-tittle">Configurações</h1>
    </div>
</template>

<script>
import SidebarMain from '@/components/sidebar/sidebar-main.vue';
import HeaderMain from '@/components/header/header-main.vue';


export default {
    name: "SettingsPage",
    components: {
        SidebarMain,
        HeaderMain,
    }
};
</script>

<style lang="stylus">
    @import './Settings.styl';
</style>