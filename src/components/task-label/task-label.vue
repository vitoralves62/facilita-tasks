<template>
    <div>
        <label class="label-container">
            <input type="checkbox" class="input-checkbox"/>
            <div class="task-text-container">
                <p class="task-label-title">Título da task</p>
                <p class="task-label-categorie">Importante</p>
            </div>
            <button class="task-options">
                <img
                    src="@/assets/imgs/task-options.svg"
                />
            </button>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'TaskLabel'
    }
</script>

<styles lang="stylus">
    @import './task-label.styl'
</styles>