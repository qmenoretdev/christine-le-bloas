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
}

#nav {
  padding: 30px;
}
</style>
