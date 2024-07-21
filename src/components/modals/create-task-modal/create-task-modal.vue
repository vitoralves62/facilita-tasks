<template>
    <div class="modal-overlay" v-if="isVisible">
        <div class="modal-content">
            <div>
                <p>Cadastrar Tarefa</p> 
                <CloseButton @click="closeModal"/>  
            </div>
            <div>
                <TaskTitle/>
                <TaskDescription/>
            </div>
        </div>
    </div>
</template>

<script>
    import TaskTitle from '@/components/task-title/task-title.vue';
    import TaskDescription from '@/components/task-desc/task-desc.vue';
    import CloseButton from '@/components/close-button/close-button.vue';

    export default {
        name: 'CreateTaskModal',
        components: {
            TaskTitle,
            TaskDescription,
            CloseButton
        },
        props:{
            isVisible: {
                type: Boolean,
                required: true
            }
        },
        data(){
            return{
                task: {

                }
            }
        },
        methods: {
            closeModal() {
            this.$emit('close');
            },
        }
    }
</script>

<styles lang="stylus">
    @import './create-task-modal.styl'
</styles>