<template>
    <div>
        <label class="label-container">
             <input type="checkbox"/>
             <p>Título da task</p>
             <b>Importante</b>
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