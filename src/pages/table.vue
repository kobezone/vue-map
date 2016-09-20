<template>
  <!-- demo root element -->
  <div id="demo">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <demo-grid
      :data="gridDatas"
      :columns="gridColumns"
      :columns-chs="gridColumnsChs"
      :filter-key="searchQuery">
    </demo-grid>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        searchQuery: '',
        //gridColumns: ["caseID", 'catalog',"desc","reportTime"],
        //gridColumnsChs:["案件编号","类别","描述","日期"],
        gridColumns: [
          {name: "caseID", chs: "案件编号"},
          {name: "catalog", chs: "类别"},
          {name: "desc", chs: "描述"},
          {name: "reportTime", chs: "日期"}
        ],
        gridDatas: null,
        isShow: true
      }
    },
    ready(){

    },
    created: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        var self = this;
        /* var url = "http://localhost:41141/api/Values";
         $.ajax({
         type: "GET",
         url: url,
         dataType: "JSON",
         success: function (data) {
         console.log(JSON.stringify(data));
         console.log(data);
         self.gridDatas=data;
         },
         error: function () {
         console.log("error");

         }
         })*/

        var data = [{
          "caseID": "wgh-A-20160913-55012",
          "reportTime": "2016-09-13 14:13:21",
          "catalog": "设施管理部",
          "desc": "风鸣道与元辉路交口向东50米南侧134020号灯罩缺失需工程处理"
        }, {
          "caseID": "wgh-A-20160913-55011",
          "reportTime": "2016-09-13 14:10:34",
          "catalog": "道桥管理部",
          "desc": "西十五道与通航路交口向西280米北侧车行道上污水井盖破损"
        }, {
          "caseID": "wgh-A-20160913-55010",
          "reportTime": "2016-09-13 13:47:12",
          "catalog": "设施管理部",
          "desc": "西十道与航空路交口向东10米南侧信号灯不亮需工程处理"
        }, {
          "caseID": "wgh-A-20160913-55009",
          "reportTime": "2016-09-13 13:32:32",
          "catalog": "设施管理部",
          "desc": "津滨大道与海滨六路交口向西35米北侧绿化带内路灯灯罩缺失，需工程处理"
        }, {
          "caseID": "wgh-A-20160913-55008",
          "reportTime": "2016-09-13 13:26:39",
          "catalog": "设施管理部",
          "desc": "津滨大道与海滨六路交口西南角路灯302086灯具玻璃罩缺失"
        }, {
          "caseID": "wgh-A-20160913-55007",
          "reportTime": "2016-09-13 11:05:16",
          "catalog": "设施管理部",
          "desc": "景然路与东五道交口向南240米东侧路灯221018后盖缺失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55006",
          "reportTime": "2016-09-13 11:01:42",
          "catalog": "设施管理部",
          "desc": "东五道与景然路交口向南240米东侧路灯221018后盖缺失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55005",
          "reportTime": "2016-09-13 10:29:32",
          "catalog": "设施管理部",
          "desc": "东五道与观湖路交口向东150米北侧路灯111037后后盖缺失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55004",
          "reportTime": "2016-09-13 10:23:03",
          "catalog": "设施管理部",
          "desc": "观湖路与东五道交口向东120米北侧路灯111035后盖丢失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55003",
          "reportTime": "2016-09-13 9:46:41",
          "catalog": "给排水管理部",
          "desc": "环河西十五道西侧Z○○米处，北河坡，有大量人为塑料袋，烂衣服等垃圾，即处理"
        }];
        self.gridDatas = data;
      }
    },
    components: { //三种写法,注意命名转变
      'demo-grid': require('../components/gridTemplate.vue')
    }
  }
</script>

<style scoped>
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }

  #demo{
    padding:20px;
  }
  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -user-select: none;
  }

  td {
    background-color: #f9f9f9;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }

  #search {
    margin-bottom: 10px;
  }
</style>
