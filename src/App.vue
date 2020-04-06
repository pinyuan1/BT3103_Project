<template>
  <div id="app">

    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>

    <app-header v-bind:title="msg"></app-header>
    <router-view></router-view>

  </div>
</template>

<script>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'

// import Login from './components/Login.vue'
// import Signup from './components/Signup.vue'


export default {
  name: 'App',
  components: {

    'app-header': Header,
    'app-footer': Footer,

    'app-header':Header
    // 'login':Login

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
