<template>
    <div class="title-container">
        <legend class="tittle-legend">Título:</legend>
        <input
            class="task-title-main" id="title"
            v-model="localTitle" @input="updateTitle"
        />
    </div>
</template>

<script>
    export default {
        name: 'TaskTitle',
        props: ['value'],
        data() {
            return {
            localTitle: this.value
            }
        },
        methods: {
            updateTitle() {
            this.$emit('input', this.localTitle);
            }
        }
    }
</script>

<styles lang="stylus">
    @import './task-title.styl'
</styles>