<template>
    <div class="CategoriesBlock">
        <div>
            <p>Categorias</p>
        </div>
        <nav >
            <ul>
                <li>
                    <button @click="selectCategory('todas')">
                        Todas
                    </button>
                </li>
                <li>
                    <button @click="selectCategory('urgentes')">
                        Urgentes
                        <span class="urgent">{{ urgentTasks }}</span>
                    </button>
                </li>
                <li>
                    <button @click="selectCategory('importantes')">
                        Importantes
                        <span class="important">{{ importantTasks }}</span>
                    </button>
                </li>
                <li>
                    <button @click="selectCategory('outras')">
                        Outras
                        <span class="normal">{{ normalTasks }}</span>
                    </button>
                </li>
                <li>
                    <button @click="selectCategory('finalizadas')">
                        Finalizadas
                        <span class="completed">{{ completedTasks }}</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { useTaskStore } from '@/stores/taskStore';
    import { computed, onMounted } from 'vue';
    export default {
        name: 'CategoriesBar',
        setup(_,{emit}){
            const taskStore = useTaskStore();

            onMounted(() => {
                taskStore.loadTasks();
            });

            const urgentTasks = computed(() => taskStore.urgentTasks);
            const importantTasks = computed(() => taskStore.importantTasks);
            const normalTasks = computed(() => taskStore.normalTasks);
            const completedTasks = computed(() => taskStore.completedTasks);

            const selectCategory = (category) => {
                emit('category-selected', category);
            };

            return {
                urgentTasks,
                importantTasks,
                normalTasks,
                completedTasks,
                selectCategory
            };
        }
    }
</script>

<style lang="stylus">
    @import './categories-bar.styl' 
</style>