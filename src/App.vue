<template>
  <div id="app">
    <div id="nav">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--background-color);
}

#nav {
  padding: 30px;
}
</style>
