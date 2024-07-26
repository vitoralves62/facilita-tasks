<template>
    <label class="custom-checkbox-container">
        <input type="checkbox" class="input-checkbox" v-model="checked"/>
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
        data(){
            return {
                checked: this.value
            };
        },
        watch: {
            checked(newVal){
                this.$emit('input', newVal);
            },
            value(newVal) {
                this.checked = newVal;
            }
        }
    }
</script>

<style lang="stylus">
    @import './check-box.styl'
</style>