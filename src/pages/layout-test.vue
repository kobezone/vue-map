<template>

  <div class="parent1">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>

  <div class="parent2">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right-fix">
      <div class="right">
        <p>right</p>
        <p>right</p>
      </div>
    </div>
  </div>
  <div class="parent3">
    <div class="left">
      <p>overflow: hidden;样式把自己藏到了上面去了</p>
    </div>
    <div class="center">
      <p>overflow: hidden;样式把自己藏到了上面去了</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
  <div class="parent4">
    <div class="left">
      <p>left</p>
    </div>
    <div class="center">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>
  <div class="parent5">
    <div class="left">
      <p>left</p>
    </div>
    <div class="center">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
    </div>
  </div>

  <div id="circle"></div>
  <div id="circletext">
    <strong style="font-size: 12px;">
      <a>王为民</a>
    </strong>
  </div>
  <div id="circle1"></div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    ready(){
      let a = document.all;
      let b = document.querySelectorAll("*");
//      [].forEach.call(b, function (a) {
//        a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
//      });
      /*[].forEach 等价于 Array.prototype.forEach*/
      Array.prototype.forEach.call(b, function (a) {
      });

      function say(name, age) {
        console.log(this.name, name, age);
      }

      var person = {
        name: '王为民',
        age: '23'
      };
      say.call(person, 'hello', 'wwmin');
      /*call 第一个参数是替换当前对象,即将'hello'替换say的this上下文对象*/

      var min = {
        a: 10,
        b: 20,
        min: function () {
          console.log(this.a - this.b)
        }
      };

      function add(a, b) {
        console.log(this.a, a);
        console.log(this.b, b);
        console.log(a + b);
      }

      this["add"].call(min, 1, 2);

      (30).toString(16);
      (30).toString(2);
      parseInt('30', 16);
    },
    methods: {
      add: function (a, b) {
//        console.log(this.a,a);
//        console.log(this.b,b);
//        console.log(a+b);
      }
    },
    computed: {},
    events: {},
    components: {}
  }
</script>

<style>
  div {
    display: block;
  }

  .parent1 {
    background-color: #F0F0F0;
  }

  .parent1 .left {
    background-color: #3e8f3e;
    float: left;
    width: 100px;
  }

  .parent1 .right {
    background-color: #cccccc;
    margin-left: 120px;
  }

  .parent2 .left {
    background-color: #9acfea;
    float: left;
    width: 100px;
    position: relative;
  }

  .parent2 .right-fix {
    background-color: #b2dba1;
    float: right;
    width: 100%;
    margin-left: -100px;
  }

  .parent2 .right-fix .right {
    background-color: #9d9d9d;
    margin-left: 120px;
  }

  .parent3 .left, .parent3 .center {
    background-color: #4cae4c;
    float: left;
    width: 100px;
    margin-right: 20px;
  }

  .parent3 .right {
    background-color: #adadad;
    overflow: hidden;
  }

  .parent4 {
    background-color: #c8e5bc;
    display: table;
    width: 100%;
    table-layout: fixed; /*加速渲染,布局优先*/
  }

  .parent4 .left, .parent4 .center, .parent4 .right {
    /*background-color: #5bc0de;*/
    display: table-cell;
  }

  .parent4 .left {
    background-color: #d5d5d5;
    width: 100px;
    padding-right: 20px;
  }

  .parent4 .center {
    background-color: #3c763d;
    width: 100px;
    padding-right: 20px;
  }

  .parent4 .right {
    background-color: #5cb85c;
  }

  .parent5 {
    display: flex; /*基于css3 非常强大 根据内容布局,性能问题*/
  }

  .parent5 .left, .parent5 .center {
    background-color: #9d9d9d;
    width: 100px;
    margin-right: 20px;
  }

  .parent5 .right {
    background-color: #66afe9;
    flex: 1;
  }

  #circletext a {
    font-family: verdana, Arial, Helvetica, sans-serif;
    font-size: 10pt;
    line-height: 1.8em;
  }

  /* 圆圈加载*/
  #circle {
    background-color: rgba(0, 0, 0, 0);
    border: 5px solid rgba(10, 10, 10, 0.9);
    opacity: .9;
    border-right: 5px solid rgba(0, 0, 0, 0);
    border-left: 5px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
    box-shadow: 0 0 35px #808080;
    width: 74px;
    height: 74px;
    margin: 0 auto;
    position: fixed;
    left: 30px;
    bottom: 30px;
    -moz-animation: spinPulse 4.5s infinite linear;
    -webkit-animation: spinPulse 4.5s infinite linear;
    -o-animation: spinPulse 4.5s infinite linear;
    -ms-animation: spinPulse 4.5s infinite linear;
  }

  #circle1 {
    background-color: rgba(0, 0, 0, 0);
    border: 6px solid rgba(20, 20, 20, 0.9);
    opacity: .9;
    border-left: 6px solid rgba(0, 0, 0, 0);
    border-right: 6px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
    box-shadow: 0 0 15px #202020;
    width: 54px;
    height: 54px;
    margin: 0 auto;
    position: fixed;
    left: 40px;
    bottom: 40px;
    -moz-animation: spinoffPulse 6.3s infinite linear;
    -webkit-animation: spinoffPulse 6.3s infinite linear;
    -o-animation: spinoffPulse 6.3s infinite linear;
    -ms-animation: spinoffPulse 6.3s infinite linear;
  }

  #circletext {
    width: 46px;
    height: 20px;
    line-height: 15px;
    margin: 0 auto;
    position: fixed;
    left: 46px;
    bottom: 59px;
  }

  @-moz-keyframes spinPulse {
    0% {
      -moz-transform: rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #505050;
    }

    50% {
      -moz-transform: rotate(145deg);
      opacity: 1;
    }

    100% {
      -moz-transform: rotate(-320deg);
      opacity: 0;
    }
  }

  @-moz-keyframes spinoffPulse {
    0% {
      -moz-transform: rotate(0deg);
    }

    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spinPulse {
    0% {
      -webkit-transform: rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #505050;
    }

    50% {
      -webkit-transform: rotate(145deg);
      opacity: 1;
    }

    100% {
      -webkit-transform: rotate(-320deg);
      opacity: 0;
    }
  }

  @-webkit-keyframes spinoffPulse {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @-o-keyframes spinPulse {
    0% {
      -o-transform: rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #505050;
    }

    50% {
      -o-transform: rotate(145deg);
      opacity: 1;
    }

    100% {
      -o-transform: rotate(-320deg);
      opacity: 0;
    }
  }

  @-o-keyframes spinoffPulse {
    0% {
      -o-transform: rotate(0deg);
    }

    100% {
      -o-transform: rotate(360deg);
    }
  }

  @-ms-keyframes spinPulse {
    0% {
      -ms-transform: rotate(160deg);
      opacity: 0;
      box-shadow: 0 0 1px #505050;
    }

    50% {
      -ms-transform: rotate(145deg);
      opacity: 1;
    }

    100% {
      -ms-transform: rotate(-320deg);
      opacity: 0;
    }
  }

  @-ms-keyframes spinoffPulse {
    0% {
      -ms-transform: rotate(0deg);
    }

    100% {
      -ms-transform: rotate(360deg);
    }
  }
</style>
