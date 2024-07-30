<template>
    <input
        type="email"
        :value="modelValue"
        @input="updateValue"
        class="email-input"
    />
</template>

<script>
export default {
    name: 'EmailInput',
    props: {
        modelValue: {
            type: String,
            required: true
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value);
        }
    }
}
</script>

<style lang="stylus">
@import './email-input.styl';
</style>
