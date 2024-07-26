<template>
    <div>
        <label :class="['label-container', { 'checked': isChecked }]">
            <CustomCheckbox class="checkbox" v-model="isChecked"/>
            <div class="task-text-container">
                <label class="task-label-title">
                    {{ task.title }}
                </label>
            </div>
            <div class="task-options-and-categorie">
                <label :class="['task-label-categorie', categoryClass]">
                    {{ task.categorie }}
                </label>
                <button class="task-options" @click="toggleMenu">
                    <img
                        src="@/assets/imgs/task-options.svg"
                    />
                </button>
                <KebabMenu 
                    class="kebab-menu-in-label"
                    v-if="menuVisible"
                    :taskId="task.id"
                    :showKebabMenu="menuVisible"
                    @open-task-edit="editTask"
                    @open-task-delete="deleteTask"
                />
            </div>
        </label>
    </div>
</template>

<script>
    import CustomCheckbox from '@/components/inputs/check-box/check-box.vue';
    import KebabMenu from '@/components/kebab-menu/kebab-menu.vue';
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    export default {
        name: 'TaskLabel',
        components: {
            CustomCheckbox,
            KebabMenu
        },
        props: {
            task: {
                type: Object,
                required: true
            }
        },
        setup() {
            const isChecked = ref(false);
            const menuVisible = ref(false);
            const taskLabelRef = ref(null);

            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value;
            };

            const handleClickOutside = (event) => {
                if (taskLabelRef.value && !taskLabelRef.value.contains(event.target)) {
                    menuVisible.value = false;
                }
            };

            onMounted(() => {
                document.addEventListener('click', handleClickOutside);
            });

            onBeforeUnmount(() => {
                document.removeEventListener('click', handleClickOutside);
            });

            return {
                isChecked,
                menuVisible,
                toggleMenu,
                taskLabelRef
            };
        },
        computed: {
            categoryClass() {
                const categorie = this.task.categorie.toLowerCase();
                switch(categorie) {
                    case 'urgente':
                        return 'urgente';
                    case 'importante':
                        return 'importante';
                    default:
                        return 'normal';
                }
            }
        },
        methods: {
            // editTask() {
            //     // Lógica para editar a tarefa
            // },
            // deleteTask(taskId) {
            //     // Lógica para deletar a tarefa
            // }
        }
    }
</script>

<styles lang="stylus">
    @import './task-label.styl'
</styles>