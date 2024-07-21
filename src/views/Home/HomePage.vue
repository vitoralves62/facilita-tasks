<template>
    <div class="main-container">
        
        <CategorieBar 
            class="categories-bar-main"
        />
        <HeaderMain 
            class="header-main"
        />
        <SidebarMain
            class="side-bar-main"
        />
        <div class="tasks-container">
            <p1>Minhas Tarefas</p1>
            <p2>
                Olá <span class="name">{{ name }}</span>, você tem <span class="tasks"> {{ tasksCount }} </span><span class="taskLabel">{{ taskLabel }}</span> <span>{{ pendenceLabel }}</span>
            </p2>
            <SearchBar class="search-bar-home"/>
            
        </div>
        <button @click="openModal" class="add-task-button">+</button>
        <CreateTaskModal
            :isVisible="isModalVisible"
            @close="closeModal"
        />
    </div>
</template>

<script>
    import SidebarMain from '@/components/sidebar/sidebar-main.vue'
    import CategorieBar from '@/components/categories-bar/categorie-bar.vue';
    import HeaderMain from '@/components/header/header-main.vue';
    import SearchBar from '@/components/search-bar/search-bar.vue';
    import CreateTaskModal from '@/components/modals/create-task-modal/create-task-modal.vue';

    export default {
        name: "HomePage",
        components: {
            SidebarMain,
            CategorieBar,
            HeaderMain,
            SearchBar,
            CreateTaskModal
        },
        data () {
            return{
                name:'Vitor Alves',
                tasksCount: 5,
                isModalVisible: false
            }
        },
        computed: {
            taskLabel() {
                return this.tasksCount === 1 ? 'tarefa' : 'tarefas';
            },
            pendenceLabel() {
                return this.tasksCount === 1 ? 'pendente.' : 'pendentes.'
            }
        },
        methods: {
            openModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false
            }
        }
    };
</script>

<style lang="stylus">
    @import './Home.styl';
</style>