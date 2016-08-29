<template xmlns:v-bind="http://www.w3.org/1999/xhtml">

  <div id="demo">
    <div>
      {{msg}}
    </div>
    <!--<input v-model="query">-->
    <!--<ul>-->
    <!--<li v-for="item in list | filterBy query"-->
    <!--transition="staggered" stagger="100">-->
    <!--{{item.msg}}-->
    <!--</li>-->
    <!--</ul>-->

    <!--<select v-model="selected">-->
    <!--<option v-for="option in options" v-bind:value="option.value" v-text="option.text">-->
    <!--</option>-->
    <!--</select>-->

  </div>

</template>

<script>

  export default{
    props: {
      msg: {
        /*从子组件向父组件传值没有成功*/
        twoWay: true,
        default:function(){
          return "CompA 组件默认的 值"
        }
      }
      // 基础类型检测 （`null` 意思是任何类型都可以）
      /* propA: Number,
       // 多种类型 (1.0.21+)
       propM: [String, Number],
       // 必需且是字符串
       propB: {
       type: String,
       required: true
       },
       // 数字，有默认值
       propC: {
       type: Number,
       default: 100
       },
       // 对象/数组的默认值应当由一个函数返回
       propD: {
       type: Object,
       default: function () {
       return {msg: 'hello'}
       }
       },
       // 指定这个 prop 为双向绑定
       // 如果绑定类型不对将抛出一条警告
       propE: {
       twoWay: true
       },
       // 自定义验证函数
       propF: {
       validator: function (value) {
       return value > 10
       }
       },
       // 转换函数（1.0.12 新增）
       // 在设置值之前转换值
       propG: {
       coerce: function (val) {
       return val + '' // 将值转换为字符串
       }
       },
       propH: {
       coerce: function (val) {
       return JSON.parse(val) // 将 JSON 字符串转换为对象
       }
       }*/
    },
    data(){
      return {
        query: '',
        list: [
          {msg: 'Bruce Lee'},
          {msg: 'asdlk'},
          {msg: 'asDFAD'},
          {msg: 'asDGA'},
          {msg: 'FAKFLDKASJ'},
        ],
        selected: 'A',
        options: [
          {text: 'One', value: 'A'},
          {text: 'Two', value: 'B'},
          {text: 'Three', value: 'C'}
        ]
      }
    }
  }
</script>

<style scoped>
  ul {
    padding-left: 0;
    font-family: Helvetica, Arial, sans-serif;
  }

  .staggered-transition {
    transition: all .5s ease;
    overflow: hidden;
    margin: 0;
    height: 20px;
  }

  .staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
  }
</style>
