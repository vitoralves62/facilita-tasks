<template>
    <div class="CategoriesBlock">
        <div>
            <p>Categorias</p>
        </div>
        <nav >
            <ul>
                <li>
                    <button>
                        Todas
                    </button>
                </li>
                <li>
                    <button>
                        Urgentes
                        <span class="urgent">2</span>
                    </button>
                </li>
                <li>
                    <button>
                        Importantes
                        <span class="important">3</span>
                    </button>
                </li>
                <li>
                    <button>
                        Outras
                    </button>
                </li>
                <li>
                    <button>
                        Finalizadas
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'CategoriesBar',
        components: {

        },
    }
</script>

<style lang="stylus">
    @import './categories-bar.styl' 
</style>