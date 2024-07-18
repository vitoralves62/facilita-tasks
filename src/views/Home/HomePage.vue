<template>
    <div class="main-container">
        <SidebarMain
            class="SideBarMain"
        />
        <div class="categories-bar"></div>
        <div class="tasks-container"></div>
    </div>
</template>

<script>
    import SidebarMain from '@/components/sidebar/sidebar-main.vue'

    export default {
        name: "HomePage",
        components: {
            SidebarMain
        },
    };
</script>

<style lang="stylus">
    @import './Home.styl';
</style>