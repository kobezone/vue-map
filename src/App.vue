<!--<template>-->

  <!--<mapside></mapside>-->
  <!--<map></map>-->
<!--  <div class="sideRight">
    <input v-model="parentMsg.value">
    <comp-a v-bind:msg.sync="parentMsg.value"></comp-a>&lt;!&ndash;默认为单向绑定&ndash;&gt;
    &lt;!&ndash;<comp-a v-bind:msg.sync="parentMsg"></comp-a>&ndash;&gt;&lt;!&ndash;双向绑定&ndash;&gt;
    &lt;!&ndash;<comp-a v-bind:msg="parentMsg"></comp-a>&ndash;&gt;&lt;!&ndash;单次绑定&ndash;&gt;
    <p>Messages:{{messages | json }}</p>
    <comp-b v-on:b-msg="handleIt"><p name="one">这是slot one</p>
      <p slot="two">slot two</p>
      <p>default slot</p></comp-b> &lt;!&ndash;事件分发的第二种捕获方案,直接用方法接收,此时events 接收不到事件&ndash;&gt;

    <counter></counter>

    <component :is="currentView" keep-alive>
      &lt;!&ndash; 组件在 vm.currentview 变化时改变 &ndash;&gt;
    </component>
    <component :is="view"
               transition="fade"
               transition-mode="out-in">
    </component>
  </div>-->
<!--</template>-->
<template>
  <header-nav></header-nav>
  <router-view></router-view>
</template>
<script>
  import HeaderNav from './components/layout/HeaderNav'
  export default {
    data(){
      return {
        currentView: 'CompB',
        view: "CompA",
        parentMsg: {
          text: "这是从app.vue中来的数据 父组件传的数据", value: ""
        },
        messages: []
      }
    },
    methods: {
      handleIt: function (msg) {
        console.log(msg);
      }
    },
    components: {
      HeaderNav
    },
    events: {
      'b-msg': function (msg) {
        //当用v-on:b-msg 绑定到子组件上时,此处 就捕获不到事件的分发,选用一种方式处理
        // 事件回调内的 `this` 自动绑定到注册它的实例上
        this.messages.push(msg);
        //可以再讲此数据 广播到其他组件中
        console.log(msg);
//        this.$broadcast('test',msg);
        //app.vue 接受到下层传上来的b-msg后,往下广播test事件
//        var self = this;
//        Vue.nextTick(function () {  //此处的Vue未定义,是什么意思
//          self.$broadcast('test', data);
//        });
        return false
      }
    }
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
    font-family: "Microsoft YaHei" ,  Helvetica Neue, Helvetica, Arial, sans-serif;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app-wrapper {
    padding-top:50px
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
