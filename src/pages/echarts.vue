<template>
  <div id="echarts_demo" style="width: 100%;height: 50%;">
  </div>
  <div class="radio-1">
    <input type="radio" name="radio-1" id="radio-1-1" checked="checked">
    <label for="radio-1-1"></label>
    <input type="radio" name="radio-1" id="radio-1-2">
    <label for="radio-1-2"></label>
    <input type="radio" name="radio-1" id="radio-1-3">
    <label for="radio-1-3"></label>
  </div>
  <div class="radio-2">
    <input type="radio" name="radio-1" id="radio-2-1" checked="checked">
    <label for="radio-2-1"></label>
    <input type="radio" name="radio-1" id="radio-2-2">
    <label for="radio-2-2"></label>
    <input type="radio" name="radio-1" id="radio-2-3">
    <label for="radio-2-3"></label>
  </div>


  <div v-for="item in s" @click="f(item)" class="radio-1">
    <p style="background: #cc99cc;cursor: pointer;">{{item.a}}{{item.c}}</p>
  </div>

</template>

<script>
  let echarts = require('echarts');
  export default{
    vuex: {
      getters: {},
      actions: {}
    },
    data(){
      return {
        msg: 'hello vue',
        isShow: true,
        currentView: 'foot',
        s: [
          {a: 1},
          {a: 2},
          {a: 3}
        ]
      }
    },
    ready(){
      let myChart = echarts.init(document.getElementById('echarts_demo'));

      myChart.setOption(
        {
          baseOption: {
            title: {
              text: '南丁格尔',
              subtext: '纯属虚构',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a}<br/>{b} : {c} ({d}%)"
            },
            legend: {
              data: ['搜索引擎', '直接访问', '邮件营销', '联盟广告', '视频广告', '报纸广告']
            },
            toolbox: {
              show: true,
              feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                  show: true,
                  type: ['pie', 'funnel']
                },
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            calculable: true,
            backgroundColor: '#ffffff',
            textStyle: {
              color: 'rgba(255,100,0,0.9)'
            },
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255,0,255,0.9)'
                }
              }
            },
            labelLine: {
              /*        normal: {
               lineStyle: {
               color: 'rgba(192,192,192,0,9)'
               }
               },*/
              emphasis: {
                lineStyle: {
                  color: 'rgba(192,192,192,0,9)'
                }
              }
            },
//            roseType: 'angle',
            itemStyle: {
              /* normal:{
               shadowBlur:200,
               shadowOffsetX:0,
               shadowOffsetY:0,
               shadowColor:'rgba(0,0,0,0.5)'
               },*/
              /*              emphasis: {
               shadowBlur: 200,
               shadowColor: 'rgba(0,0,0,0.5)'
               }*/
            },
            series: [
              {
                color: ['rgba(0,255,102,0.9)', 'rgba(204,0,0,0.9)', 'rgba(255,255,0,0.8)', 'rgba(155,51,0,0.9)', 'rgba(0,0,255,0.9)', 'rgba(0,100,158,0.9)'],
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                  {value: 400, name: '搜索引擎'},
                  {value: 335, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 274, name: '联盟广告'},
                  {value: 235, name: '视频广告'},
                  {value: 100, name: '报纸广告'}
                ]
              }
            ]
          },
          media: [
            {
              option: {
                legend: {
                  right: 'center',
                  bottom: 0,
                  orient: 'horizontal'
                },
                series: [
                  {
                    radius: [5, '50%'],
                    center: ['50%', '50%']
                  }
                ]
              }
            },
            {
              query: {
                minAspectRatio: 1
              },
              option: {
                legend: {
                  right: 'center',
                  bottom: 0,
                  orient: 'horizontal'
                },
                series: [
                  {
                    radius: [5, '50%'],
                    center: ['50%', '50%']
                  }
                ]
              }
            },
            {
              query: {
                maxAspectRatio: 1
              },
              option: {
                legend: {
                  right: 'center',
                  bottom: 0,
                  orient: 'horizontal'
                },
                series: [
                  {
                    radius: [5, '50%'],
                    center: ['50%', '50%']
                  }
                ]
              }
            },
            {
              query: {
                maxWidth: 500
              },
              option: {
                legend: {
                  right: 10,
                  top: '15%',
                  orient: 'vertical'
                },
                series: [
                  {
                    radius: [5, '50%'],
                    center: ['50%', '50%']
                  }
                ]
              }
            }
          ]
        });

    },
    methods: {
      f:function(value){
        console.log(value);
//        value.c="qqqq";
        value.$set('c',3)
      }
    },
    computed: {},
    events: {},
    components: { //三种写法,注意命名转变
    }
  }
</script>

<style>
  .radio-1 {
    width: 900px;
    padding: 3% 0;
    margin: 10px auto;
    background-color: darkseagreen;
    text-align: center;
  }

  .radio-1 label {
    display: block;
    position: relative;
    width: 28px;
    height: 28px;
    border: 0 solid #cccccc;
    border-radius: 100%;
    cursor: pointer;
    background-color: #ffffff;
    margin-right: 10px;
  }

  .radio-1 label:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 4px;
    left: 4px;
    background-color: #666;
    border-radius: 50%;
    transform: scale(0);
    transition: transform .2s ease-out;
  }

  .radio-1 [type="radio"]:checked + label {
    background-color: #eeeeee;
    transition: background-color .2s ease-in;
  }

  .radio-1 [type="radio"]:checked + label:after {
    transform: scale(1);
    transition: transform .2s ease-in;
  }

  .radio-1 [type="radio"] {
    display: none;
  }

  .radio-2 {
    width: 900px;
    padding: 3% 0;
    margin: 50px auto;
    background-color: darkseagreen;
    text-align: center;
  }

  .radio-2 label {
    display: inline-block;
    width: 28px;
    height: 28px;
    overflow: hidden;
    border: 0 solid #eeeeee;
    border-radius: 100%;
    margin-right: 10px;
    background-color: #ffffff;
    position: relative;
    cursor: pointer;
  }

  .radio-2 label:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    background-color: #666666;
    border-radius: 50%;
    transform: rotate(-180deg);
    transform-origin: -2px 50%;
    transition: transform .2s ease-in;
  }

  .radio-2 [type="radio"] {
    display: none;
  }

  .radio-2 [type="radio"]:checked + label:after {
    transform: rotate(0deg);
    transition: transform .2s ease-out;
  }
</style>
