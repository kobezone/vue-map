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
    props:['msg'],
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
