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
    <div class="col-md-6">
      <select id="xl" name="xl" v-model="selectedArea">
        <option v-for="o in areaRoutes" :value="o.lineNum">{{o.lineName}}</option>
      </select>
    </div>
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
        isShow: true,
        selectedArea: "",
        areaRoutes: [
          {
            lineName: "海滨一路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保辅道-东方大道"
          },
          {
            lineName: "海滨二路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          }
        ]
      }
    },
    ready(){

      var Mymodule = {};
      Mymodule.Book = function () {
        console.log("this is Book");
      };
      Mymodule.Book.prototype.getName = function () {
        console.log("this is Book's name");
      };

      Mymodule.Car = function () {
        console.log("this is Car ");
      };
      Mymodule.Car.prototype.getWheels = function () {
        console.log("this is Car's getWheels")
      };

      Mymodule.Book();

      function CoolModule() {
        var something = 'cool';
        var another = [1, 2, 3];

        function doSomething() {
          console.log(something)
        }

        function doAnother() {
          console.log(another.join('!'));
        }

        return {
          doSomething: doSomething,
          doAnother: doAnother
        };
      }

      var foo = CoolModule();
      foo.doSomething();
      foo.doAnother();

      var foo1 = (function CoolModule() {
        var something = 'cool';
        var another = [1, 2, 3];

        function doSomething() {
          console.log(something)
        }

        function doAnother() {
          console.log(another.join('!'));
        }

        return {
          doSomething: doSomething,
          doAnother: doAnother
        };
      })();
      foo1.doSomething();
      foo1.doAnother();

      function CoolMudule1() {
        var something = 'cool';
        var another = [1, 2, 3];

        function change() {
          publicAPI.doSomething = doAnother;
        }

        function doSomething() {
          console.log(something)
        }

        function doAnother() {
          console.log(another.join('!'));
        }

        var publicAPI = {
          change: change(),
          doSomething: doSomething
        };
        return publicAPI;
      }

      var foo2 = CoolModule();
      foo2.doSomething();
      foo2.change();
      foo2.doSomething();
      var foo3 = CoolMudule1();
      foo3.doSomething();

      var MyGlobal = {
        namespace: function (ns) {
          var parts = ns.split('.'),
            obj = this,
            i, len = parts.length;
          for (i = 0; i < len; i++) {
            if (!obj[parts[i]]) {
              obj[parts[i]] = {}
            }
            obj = obj[parts[i]];
          }
          return obj;
        }
      }
      MyGlobal.namespace('Book');// 创建Book
      MyGlobal.Book;
      MyGlobal.namespace('Car').prototype.getWheel=function(){
        console.log("Car wheel");
      }
    },
    created: function () {

      this.getData()
    },
    methods: {
      getData: function () {
        var self = this;
        var data = [
          {
            "caseID": "wgh-A-20160913-55012",
            "reportTime": "2016-09-13 14:13:21",
            "catalog": "设施管理部",
            "desc": "风鸣道与元辉路交口向东50米南侧134020号灯罩缺失需工程处理"
          },
          {
            "caseID": "wgh-A-20160913-55011",
            "reportTime": "2016-09-13 14:10:34",
            "catalog": "道桥管理部",
            "desc": "西十五道与通航路交口向西280米北侧车行道上污水井盖破损"
          }
        ];
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

  #demo {
    padding: 20px;
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
