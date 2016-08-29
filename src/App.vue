<template>

    <mapside></mapside>
    <!--<map></map>-->
    <div class="sideRight">
      <input v-model="parentMsg">
      <comp-a v-bind:msg="parentMsg"></comp-a>
      <comp-b></comp-b>
      <counter></counter>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        parentMsg:"这是从app.vue中来的数据 父组件传的数据"
      }
    },
    components: {
      'Mapside':require('./components/Mapside.vue'),
      'Map':require('./components/Map.vue'),
      'CompA':require('./components/a.vue'),
      'CompB':require('./components/b.vue'),
      'Counter':require('./components/counter.vue')
    }
  }
</script>

<style>
  html {
    height: 100%;
    width: 100%;
  }

  body {
    /*display: flex;*/
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .sideRight {
    width: 75%;
    height: 100%;
    float: right;
  }

  #app {
    height: 100%;
    width: 100%;
    /*color: #2c3e50;*/
    /*margin-top: -100px;*/
    /*max-width: 600px;*/
    font-family: Source Sans Pro, Helvetica, sans-serif;
    /*text-align: center;*/
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

</style>
