<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Login</router-link>
    </nav> -->
    <router-view></router-view> <!-- Onde os componentes de rota serão renderizados -->
  </div>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
export default {
  name: 'App',
  setup() {
    const userStore = useUserStore();
    userStore.loadUser(); // Carrega o usuário ao montar o aplicativo
  }
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
