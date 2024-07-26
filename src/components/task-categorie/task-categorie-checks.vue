<template>
    <div class="categories-container">
      <div class="urgent-container">
        <input
          type="radio"
          id="urgent"
          name="task-category"
          class="urgent-check"
          v-model="localCategory"
          value="Urgente"
        />
        <label for="urgent" class="urgent-text">Urgente</label>
      </div>
      <div class="important-container">
        <input
          type="radio"
          id="important"
          name="task-category"
          class="important-check"
          v-model="localCategory"
          value="Importante"
        />
        <label for="important" class="important-text">Importante</label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskCategories',
    props: {
        value:{
            type: String,
            default: ''
        }
    },
    data() {
      return {
        localCategory: this.value 
      };
    },
    watch: {
        localCategory(newValue) {
        this.$emit('input', newValue);
        },
        value(newValue) {
        this.localCategory = newValue;
        }
    }
  };
  </script>
  
  <style lang="stylus">
  @import './task-categorie-checks.styl'
  </style>
  