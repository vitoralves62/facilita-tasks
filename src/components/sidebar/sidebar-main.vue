<template>
    <nav class="sidebar">
        <div class="Logo">
            <LogoType />
        </div>
        <ul class="sidebar-itens">
            <li class="dashboard">
                <button class="dash-button">
                    <img
                        src='@/assets/imgs/chart-bar-light1.svg'
                        class="graph"
                    />
                    Dashboard
                </button>
            </li>
            <li class="tasks">
                <button class="tasks-button">
                    <img
                        src="@/assets/imgs/check-circle.svg"
                        class="check-circle"
                    />
                    Tarefas
                </button>
            </li>
            <li class="settings">
                <button class="config-button">
                    <img
                        src="@/assets/imgs/triple-gear.svg"
                        class="gears"
                    />
                    Configurações
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
    import LogoType from '@/components/Logotype/LogoType.vue';

    export default {
        name: 'SidebarMain',
        components: {
            LogoType
        },
    }
</script>

<style lang="stylus">
    @import './sidebar-main.styl' 
</style>