<template>
    <div  @mouseleave="onMouseLeave">
        <EditTaskModal
            v-if="isEditModalVisible"
            :task="taskToEdit"
            :isVisible="isEditModalVisible"
            @close="isEditModalVisible = false"
        />
        <DeleteTaskModal
            v-if="isDeleteModalVisible"
            :task="taskToDelete"
            :isVisible="isDeleteModalVisible"
            @close="isDeleteModalVisible = false"
        />
        <label :class="['label-container', { 'checked': isChecked }]">
            <CustomCheckbox class="checkbox" v-model="isChecked" @change="handleCheckboxChange"/>
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
                    @open-task-edit="openEditModal"
                    @open-task-delete="openDeleteModal"
                />
                
                
            </div>
        </label>
    </div>
</template>

<script>
    import CustomCheckbox from '@/components/inputs/check-box/check-box.vue';
    import KebabMenu from '@/components/kebab-menu/kebab-menu.vue';
    import EditTaskModal from '../modals/edit-task-modal/edit-task-modal.vue';
    import DeleteTaskModal from '../modals/delete-task-modal/delete-task-modal.vue';
    import { ref,  watch } from 'vue';
    import { useTaskStore } from '@/stores/taskStore';

    export default {
        name: 'TaskLabel',
        components: {
            CustomCheckbox,
            KebabMenu,
            EditTaskModal,
            DeleteTaskModal
        },
        props: {
            task: {
                type: Object,
                required: true
            }
        },
        setup(props) {
            const taskStore = useTaskStore();
            const isChecked = ref(props.task.completed);
            const menuVisible = ref(null);
            const taskToEdit = ref(null);
            const isEditModalVisible = ref(false);
            const taskLabelRef = ref(null);
            const taskToDelete = ref(null)
            const isDeleteModalVisible = ref(false)

            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value;
            };

            const onMouseLeave = () => {
                menuVisible.value = false;
            };

            const openEditModal = () => {
                taskToEdit.value = props.task;
                isEditModalVisible.value = true;
            };

            const closeEditModal = () => {
                isEditModalVisible.value = false;
            };

            const openDeleteModal = () => {
                taskToDelete.value = props.task;
                isDeleteModalVisible.value = true;
            };

            const handleCheckboxChange = (newValue) => {
                console.log('handleCheckboxChange called with value:', newValue);
                toggleCompletion();
            };

            const toggleCompletion = () => {
                taskStore.toggleTaskCompletion(props.task.id);
                console.log('Completed task:', props.task.id, 'New state:', isChecked.value);
            };

            watch(() => props.task.completed, (newVal) => {
                isChecked.value = newVal;
            });

            return {
                isChecked,
                menuVisible,
                isEditModalVisible,
                taskToEdit,
                toggleMenu,
                openEditModal,
                closeEditModal,
                taskLabelRef,
                openDeleteModal,
                taskToDelete,
                isDeleteModalVisible,
                toggleCompletion,
                handleCheckboxChange,
                onMouseLeave
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
        }
    }
</script>

<styles lang="stylus">
    @import './task-label.styl'
    .modal-open .task-options {
        display: none;
    }
</styles>