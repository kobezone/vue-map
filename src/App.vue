<template>

  <mapside></mapside>
  <!--<map></map>-->
  <div class="sideRight">
    <input v-model="parentMsg.value">
    <comp-a v-bind:msg.sync="parentMsg.value"></comp-a><!--默认为单向绑定-->
    <!--<comp-a v-bind:msg.sync="parentMsg"></comp-a>--><!--双向绑定-->
    <!--<comp-a v-bind:msg="parentMsg"></comp-a>--><!--单次绑定-->
    <p>Messages:{{messages | json }}</p>
    <comp-b></comp-b>

    <counter></counter>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        parentMsg: {
          text: "这是从app.vue中来的数据 父组件传的数据", value: ""
        },
        messages:[]
      }
    },
    components: {
      'Mapside': require('./components/Mapside.vue'),
      'Map': require('./components/Map.vue'),
      'CompA': require('./components/a.vue'),
      'CompB': require('./components/b.vue'),
      'Counter': require('./components/counter.vue')
    },
    events:{
      'b-msg':function(msg){
        // 事件回调内的 `this` 自动绑定到注册它的实例上
        this.messages.push(msg);
      }
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
