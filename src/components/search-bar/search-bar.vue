<template>
    <div class="search-container">
        <input
            type="text"
            class="search-bar-main"
            placeholder="Buscar Tarefas"
        />
        <img
            src="@/assets/imgs/search-regular1.svg"
            class="search-icon"
        />
    </div>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style lang="stylus">
    @import './search-bar.styl'
</style>