<template>
    <div class="main-container-home">
        
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
            <p class="tasks-container-title">Minhas Tarefas</p>
            <p class="tasks-container-subtitle">
                Olá <span class="name">{{ name }}</span>, você tem <span class="tasks"> {{ totalTasks }} </span><span class="taskLabel">{{ taskLabel }}</span> <span>{{ pendenceLabel }}</span>
            </p>
            <SearchBar class="search-bar-home"/>
            <div v-for="task in tasks" :key="task.id" class="task-label-home">
                <TaskLabel :task="task"/>
            </div>
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
    import TaskLabel from '@/components/task-label/task-label.vue';
    import { useTaskStore } from '@/stores/taskStore';
    import { computed, onMounted } from 'vue';

    export default {
        name: "HomePage",
        components: {
            SidebarMain,
            CategorieBar,
            HeaderMain,
            SearchBar,
            CreateTaskModal,
            TaskLabel
        },
        setup(){
            const taskStore = useTaskStore();
            onMounted(() => {
                taskStore.loadTasks();
            });
            const tasks = computed(() => taskStore.tasks);
            const totalTasks = computed(() => taskStore.totalTasks);
            const urgentTasks = computed(() => taskStore.urgentTasks);
            const importantTasks = computed(() => taskStore.importantTasks);
            const tasksCount = computed(() => taskStore.tasks.length);

            return {
                tasks,
                tasksCount,
                totalTasks,
                urgentTasks,
                importantTasks
            };
        },
        data () {
            return{
                name:'Vitor Alves',
                isModalVisible: false
            }
        },
        computed: {
            taskLabel() {
            return this.tasksCount === 1 ? 'tarefa' : 'tarefas';
            },
            pendenceLabel() {
                return this.tasksCount === 1 ? 'pendente.' : 'pendentes.';
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