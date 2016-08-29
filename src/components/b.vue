<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <!--<div class="container">-->
  <!--<h2>Hello from component B!</h2>-->
  <!--</div>-->
  <input v-model="msg">
  <button v-on:click="notify">分发事件</button>


  <slot name="one"></slot>
  <slot name="two"></slot>
  <slot></slot>
  <div>
    {{info.name +'|'+ info.age}}
  </div>
</template>

<script>

  export default{
    data(){
      return {
        msg: 'hello vue',
        info:{
          name:"wwmin",
          age:"10"
        }
      }
    },
    methods: {
      notify: function () {
        if (this.msg.trim()) {
          this.$dispatch('b-msg', this.msg);
          this.msg = ''
        }
      }
    },
    components: {}
  }
</script>

<style scoped>
  .container {
    /*border: 1px solid #f00;*/
  }

  h2 {
    color: #393;
  }
</style>
