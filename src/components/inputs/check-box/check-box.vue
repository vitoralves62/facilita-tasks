<template>
    <label class="custom-checkbox-container">
        <input type="checkbox" class="input-checkbox" v-model="checked" @change="emitChange"/>
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
    name: 'CustomCheckbox',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            checked: this.value
        };
    },
    watch: {
        checked(newVal) {
            this.$emit('input', newVal); // Emit the correct event for v-model
            console.log('Checkbox value changed:', newVal);
        },
        value(newVal) {
            this.checked = newVal;
            console.log('Value prop changed:', newVal);
        }
    },
    methods: {
        emitChange() {
            this.$emit('change', this.checked); // Emit the change event with the new value
            console.log('Checkbox emitChange called with value:', this.checked);
        }
    }
};
</script>

<style lang="stylus">
    @import './check-box.styl';
</style>
