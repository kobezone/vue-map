<template>
  <div id="echarts_demo" style="width: 100%;height: 100%;">
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
        currentView: 'foot'
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
              data: ['搜索引擎', '直接访问', '邮件营销', '联盟广告', '视频广告']
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
            roseType: 'angle',
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
                color: ['rgba(0,255,102,0.9)', 'rgba(204,0,0,0.9)', 'rgba(255,255,0,0.8)', 'rgba(155,51,0,0.9)', 'rgba(0,0,255,0.9)'],
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                  {value: 400, name: '搜索引擎'},
                  {value: 335, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 274, name: '联盟广告'},
                  {value: 235, name: '视频广告'}
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
    methods: {},
    computed: {},
    events: {},
    components: { //三种写法,注意命名转变
    }
  }
</script>

<style scoped>
  .fade-transition {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>
