<template>
  <header-nav></header-nav>
  <router-view></router-view>
  <!--<back-to-top></back-to-top>-->
</template>
<script>
  import HeaderNav from './components/layout/HeaderNav'
  import store from './vuex/store'
  export default {
    ready(){
    },
    data(){
      return {}
    },
    methods: {},
    components: {
      HeaderNav,
      'backToTop':require('./components/backTop.vue')
    },
    events: {},
    store
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    padding-top: 50px;
    margin: 0;
    /*display: flex;
  align-items: center;
  justify-content: center;*/
    font-family: "Microsoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app-wrapper {
    padding-top: 50px
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
