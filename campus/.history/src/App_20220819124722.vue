<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <home-page></home-page>
  </div>
</template>

<script>
import homePage from './views/home/homePage.vue'

export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
