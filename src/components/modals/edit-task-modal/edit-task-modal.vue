<template>
    <div class="modal-overlay">
        <div class="modal-content">
            <p>Testando</p> 
            <button>x</button>
            <div>
                <legend>Título:</legend>
                <input/>
            </div>
            <div>
                <legend>Descrição</legend>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditTaskModal'
    }
</script>

<styles lang="stylus">
    @import './edit-task-modal.styl'
</styles>