<template>
    <div class="CategoriesBlock">
        <div>
            <p>Categorias</p>
        </div>
        <nav >
            <ul>
                <li>
                    <button>
                        Todas
                    </button>
                </li>
                <li>
                    <button>
                        Urgentes
                        <span class="urgent">{{ urgentTasks }}</span>
                    </button>
                </li>
                <li>
                    <button>
                        Importantes
                        <span class="important">{{ importantTasks }}</span>
                    </button>
                </li>
                <li>
                    <button>
                        Outras
                    </button>
                </li>
                <li>
                    <button>
                        Finalizadas
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
        setup(){
            const taskStore = useTaskStore();
            onMounted(() => {
                taskStore.loadTasks();
            });
            const urgentTasks = computed(() => taskStore.urgentTasks);
            const importantTasks = computed(() => taskStore.importantTasks);

            return {
                urgentTasks,
                importantTasks
            };
        }
    }
</script>

<style lang="stylus">
    @import './categories-bar.styl' 
</style>