<template>
    <div class="main-container-home">
        
        <CategorieBar 
            class="categories-bar-main"
            @category-selected="filterTasksByCategory"
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
            <SearchBar 
                class="search-bar-home"
                @search="filterTasksBySearch"
            />
            <div v-for="task in sortedAndFilteredTasks" :key="task.id" class="task-label-home">
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
import SidebarMain from '@/components/sidebar/sidebar-main.vue';
import CategorieBar from '@/components/categories-bar/categorie-bar.vue';
import HeaderMain from '@/components/header/header-main.vue';
import SearchBar from '@/components/search-bar/search-bar.vue';
import CreateTaskModal from '@/components/modals/create-task-modal/create-task-modal.vue';
import TaskLabel from '@/components/task-label/task-label.vue';
import { useTaskStore } from '@/stores/taskStore';
import { computed, ref, onMounted } from 'vue';

const sortTasks = (tasks) => {
    return tasks.slice().sort((a, b) => {
        if (a.categorie === 'Urgente') return -1;
        if (b.categorie === 'Urgente') return 1;
        if (a.categorie === 'Importante') return -1;
        if (b.categorie === 'Importante') return 1;
        return 0;
    });
};

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
    setup() {
        const taskStore = useTaskStore();
        const selectedCategory = ref('todas');
        const searchQuery = ref('');

        onMounted(() => {
            taskStore.loadTasks();
        });

        const tasks = computed(() => taskStore.tasks);
        const totalTasks = computed(() =>  taskStore.pendenceTasks);
        const urgentTasks = computed(() => taskStore.urgentTasks);
        const importantTasks = computed(() => taskStore.importantTasks);

        const filteredTasks = computed(() => {
            let filtered = taskStore.tasks;

            if (selectedCategory.value !== 'todas') {
                filtered = filtered.filter(task => {
                    if (selectedCategory.value === 'urgentes') return task.categorie === 'Urgente' && !task.completed;
                    if (selectedCategory.value === 'importantes') return task.categorie === 'Importante' && !task.completed;
                    if (selectedCategory.value === 'outras') return task.categorie !== 'Urgente' && task.categorie !== 'Importante' && !task.completed;
                    if (selectedCategory.value === 'finalizadas') return task.completed;
                });
            }

            if (searchQuery.value) {
                filtered = filtered.filter(task => task.description.toLowerCase().includes(searchQuery.value.toLowerCase()) || task.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
            }

            return filtered;
        });

        const sortedAndFilteredTasks = computed(() => sortTasks(filteredTasks.value));

        const filterTasksByCategory = (category) => {
            selectedCategory.value = category;
        };

        const filterTasksBySearch = (query) => {
            searchQuery.value = query;
        };

        return {
            tasks,
            totalTasks,
            urgentTasks,
            importantTasks,
            sortedAndFilteredTasks,
            selectedCategory,
            filterTasksByCategory,
            filterTasksBySearch,
            tasksCount: computed(() => taskStore.tasks.length)
        };
    },
    data() {
        return {
            name: 'Vitor Alves',
            isModalVisible: false
        };
    },
    computed: {
        taskLabel() {
            return this.sortedAndFilteredTasks.length === 1 ? 'tarefa' : 'tarefas';
        },
        pendenceLabel() {
            return this.sortedAndFilteredTasks.length === 1 ? 'pendente.' : 'pendentes.';
        }
    },
    methods: {
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
};
</script>

<style lang="stylus">
    @import './Home.styl';
</style>