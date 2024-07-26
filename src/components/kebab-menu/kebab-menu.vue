<template>
    <div v-show="show" class="kebab-menu-container">
        <div class="kebab-menu-main">
            <button class="edit-button" @click="openTaskEdit" :class="{ 'task-label-menu-opened': showEditTask }">
                <span class="dot green-dot"></span>Editar
            </button>
            <button class="delete-button" @click="openTaskDelete(taskId)" :class="{ 'task-label-menu-opened': showRemoveModal }">
                <span class="dot gray-dot"></span>Excluir
            </button>
        </div>
        <i class="fa-solid fa-ellipsis-vertical" @click="clickIcon" :class="{ 'task-label-menu-opened-icon': show }"></i>
    </div>
</template>

<script>
    import { ref, watch } from 'vue';
    export default {
        name: 'KebabMenu',
        props: {
            taskId: {
                type: String,
                required: true
            },
            showEditTask: {
                type: Boolean,
                default: false
            },
            showRemoveModal: {
                type: Boolean,
                default: false
            },
            showKebabMenu: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {
            const show = ref(props.showKebabMenu);

            watch(() => props.showKebabMenu, (newValue) => {
                show.value = newValue;
            });

            const openTaskEdit = () => {
                this.$emit('open-task-edit');
            };

            const openTaskDelete = (taskId) => {
                this.$emit('open-task-delete', taskId);
            };

            const clickIcon = () => {
                this.$emit('click-icon');
            };

            return { show, openTaskEdit, openTaskDelete, clickIcon };
        }
    }
</script>

<style lang="stylus">
    @import './kebab-menu.styl'
</style>
