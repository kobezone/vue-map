<template>
  <div id="page-wrapper">
    <!--资产管理START-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              资产管理——主干道数据
            </div>
            <div class="panel-body" id="tabs-1">
              <div class="col-md-3" style=" z-index: 99999"><h4>&nbsp;<a href="#" ><b>主干道</b></a>&nbsp;&nbsp;  | &nbsp;&nbsp; <a href="#" ><b>次干道</b></a> &nbsp;&nbsp; | &nbsp;&nbsp; <a href="#" ><b>支路</b></a></h4></div>
              <div id="morris-bar-chart" style="width:100%;height:400px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end 资产管理-->
    <!--养管start-->
    <div class="container-fluid container-chart">
      <div class="row">
        <div class="col-md-5">
          <div class="panel panel-default">
            <div class="panel-heading">
             日常养管
            </div>
            <div class="panel-body">
              <div id="morris-line-chart" style="width: 100%;height: 300px;"></div>
            </div>
          </div>
        </div>

        <div class="col-md-7">
          <div class="panel panel-default">
            <div class="panel-heading">
              路面情况指数CPI评测
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-xs-5">
                  <div id="morris-pie-chart" style="width: 100%;height: 300px;"></div>
                </div>
                <div class="col-xs-7">
                  <div class="col-xs-12 text-left bk-vcenter text-center">
                  <small>PC1:  46.71%</small>
                  <div class="progress light progress-xs  progress-striped active bk-margin-bottom-10">
                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="46.71" aria-valuemin="0" aria-valuemax="100" style="width: 46.71%;">
                      <span class="sr-only">46.71% </span>
                    </div>
                  </div>
                  <small>PC2: 22.14%</small>
                  <div class="progress light progress-xs  progress-striped active bk-margin-bottom-10">
                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="22.14" aria-valuemin="0" aria-valuemax="100" style="width:22.14%;">
                      <span class="sr-only">22.14% </span>
                    </div>
                  </div>
                  <small>PC3: 18.29%</small>
                  <div class="progress light progress-xs  progress-striped active bk-margin-bottom-10">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="18.29" aria-valuemin="0" aria-valuemax="100" style="width: 18.29%;">
                      <span class="sr-only">18.29% </span>
                    </div>
                  </div>
                    <small>PC4: 12.86%</small>
                    <div class="progress light progress-xs  progress-striped active bk-margin-bottom-10">
                      <div class="progress-bar progress-bar-gra" role="progressbar" aria-valuenow="12.86" aria-valuemin="0" aria-valuemax="100" style="width: 12.86%;">
                        <span class="sr-only">12.86% </span>
                      </div>
                    </div>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div class="container-fluid container-chart">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                因工占路
              </div>
              <div class="panel-body">
                <div id="morris-bar-chart2" style="width:100%;height:300px">
                </div>
            </div>

             </div>
            </div></div>


    </div>
    </div>






</template>
<script>

  export default{
    /*资产数据*/
    ready(){
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('morris-bar-chart'));
      var option = {
        color : ['rgba(46,199,201,0.86)','rgba(255,185,128,0.86)'],//rgba(46,199,201,0.86)182,162,222
        title : {
          text: '交委平台：资产数据情况',
          subtext: '天津六区道路数据'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['数量','里程']
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
           // dataView : {show: true, readOnly: false},
           // magicType : {show: true, type: ['line', 'bar']},
           // restore : {show: true},
           // saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            data : ['和平区','南开区','河西区','河东区','河北区','红桥区']
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLabel : {
              formatter: '{value}'
            },
            splitNumber:4
          }
        ],
        series : [
          {
            name:'数量',
            type:'bar',
/*            itemStyle: {
              normal: {
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                  ];
                  return colorList[params.dataIndex]
                },
/!*                label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}'
                }*!/
              }
            },*/
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
            markPoint : {
                data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
              ]
            },
            markLine : {
              data : [
                {type : 'average', name: '平均值'}
              ]
            }
          },
          {
            name:'里程',
            type:'bar',
            data:[2.6, 5.9, 92, 26.4, 28.7, 70.7],
            markPoint : {
/*              data : [
                {name : '月最高', value : 76.7, xAxis: 7, yAxis: 80, },
                {name : '月最低', value : 2.3, xAxis: 11, yAxis: 3}
              ]*/          data:[ {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}]
            },
           markLine : {
              data : [
                {type : 'average', name : '平均值'}
              ]
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

//养管数据
      var myChartline = echarts.init(document.getElementById('morris-line-chart'));
      var option = {
       // color : ['rgba(46,199,201)','rgba(182,162,222)','rgba(90,177,239)'],
        title : {
          text: '交委平台：日常养管',
          subtext: '日常养护'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['上上周','上周','这周']
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            //dataView : {show: true, readOnly: false},
            //magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},*///切换数据表。柱状
           // restore : {show: true},*/
          // saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'上上周',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle:  {color: '#A9D4F3'},lineStyle:{color:'#5AB1EF'},color:'#5AB1EF'}},
            data:[10, 12, 21, 54, 260, 830, 710]
          },
          {
            name:'上周',
            type:'line',
            smooth:true,
            itemStyle: {
              normal: {areaStyle: {color: '#D7CDEB'},lineStyle:{color:'#B6A2DE'},color:'#B6A2DE'},
            },
            data:[30, 182, 434, 791, 390, 30, 10]
          },
          {
            name:'这周',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {color: '#93DFE0'},lineStyle:{color:'#3FCACC'},color:'#3FCACC'}},
            data:[1320, 1132, 601, 234, 120, 90, 20]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChartline.setOption(option);

//路面情况数据
      var myChartpie = echarts.init(document.getElementById('morris-pie-chart'));
    //  color:['#FF0000', '#D7CDEB','#B6A2DE','#B6A2DE'];
      var option = {
        title : {
          text: '路面状况指数（PCI）评价',
          subtext: '总体评分',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient : 'vertical',
          x : 'left',
          data:['优','良','中','差']
        },
        toolbox: {
          show : true,
          feature : {
           mark : {show: true},
            //dataView : {show: true, readOnly: false},
            magicType : {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 654
                }
              }
            },
           // restore : {show: true},
          //  saveAsImage : {show: true}
          }
        },
        calculable : true,
        series : [
          {
            name:'总体评分',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            //itemStyle: {
              //normal: {color:'#FF0000',color: '#D7CDEB',color:'#B6A2DE',color:'#B6A2DE'},
           // },
            data:[
              {value:654, name:'优'},
              {value:310, name:'良'},
              {value:256, name:'中'},
              {value:180, name:'差'}
            ]
          }
        ],
        color: ['#B6A2DE','#2EC7C9','#FFB980','#DF9499']
      };
      // 使用刚指定的配置项和数据显示图表。
      myChartpie.setOption(option);

 //因工占路
      var myChart2 = echarts.init(document.getElementById('morris-bar-chart2'));
      var option = {
        color : ['rgba(90,177,239,0.86)','rgba(228,86,100,0.86)'],//rgba(46,199,201,0.86黄色223,148,153,0.86暗红色)
        title : {
          text: '交委平台：因工占路情况',
          subtext: '天津六区因工点路数据'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['所有','本月预计']
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            data : ['和平区','南开区','河西区','河东区','河北区','红桥区']
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLabel : {
              formatter: '{value}'
            },
            splitNumber:5
          }
        ],
        series : [
          {
            name:'所有',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 27.6],
            markPoint : {
              data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
              ]
            },
            markLine : {
              data : [
                {type : 'average', name: '平均值'}
              ]
            }
          },
          {
            name:'本月预计',
            type:'bar',
            data:[2.0, 2.3, 3.2, 22, 24, 21],
            markPoint : {
              /*              data : [
               {name : '月最高', value : 76.7, xAxis: 7, yAxis: 80, },
               {name : '月最低', value : 2.3, xAxis: 11, yAxis: 3}
               ]*/          data:[ {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}]
            },
            markLine : {
              data : [
                {type : 'average', name : '平均值'}
              ]
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart2.setOption(option);

    }
  }
</script>
<style>
  #page-wrapper{background:#EDEDED; padding-top: 1.6em;}
  .panelnav{ padding:2px 15px; border:1px solid #DDDDDD;}
  b{ color: #F09B22}
  .panel{ border-radius: 0;}
  .progress-bar-primary{ background:#B6A2DE;}
  .progress-bar-warning{background:#2EC7C9}
  .progress-bar-success{background:#FFB980}
  .progress-bar-gra{background:#DF9499}

</style>
