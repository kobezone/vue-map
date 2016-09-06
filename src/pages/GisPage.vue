<script>
  import {getRegionRoads, getRegionName,showBottomWrap} from '../vuex/getters';
  import {selectedRegionName, updateRegionRoads,setBottomWrap} from '../vuex/actions';
  export default {
    vuex: {
      getters: {
        roads: getRegionRoads,
        getRegionName,
        showBottomWrap
      },
      actions: {
        selectedRegionName,
        updateRegionRoads,
        setBottomWrap
      }
    },
    route: {
      data(){
      }
    },
    data() {
      return {
        /**道路类别 */
        roadTypes: [
          {text: "主干道", value: ""},
          {text: "次干道", value: ""},
          {text: "支路", value: ""},
        ],
        /**区域 */
        districts: [
          {name: "和平区", count: 6},
          {name: "南开区"},
          {name: "河西区"},
          {name: "河东区"},
          {name: "河北区"},
          {name: "红桥区"}
        ],
        /*roads: {},*/
        /**选中的道路类别 */
        checkedRoadTypes: ["主干道", "次干道", "支路"],
        /**当前选中的区域 */
        currentSelectedDistrict: {},
        /**当前选中的道路 */
        currentSelectedRoad: {},


      }
    },
    watch: {
      roads: function (value, oldValue) {
        //this.toggleBottom();
        this.currentSelectedRoad={};

      }
    },
    methods: {
      toggleBottom: function () {
        var timer = 0;
        if (this.showBottomWrap) timer = 200;
        //this.showBottomWrap = false;
        this.setBottomWrap(false);
        setTimeout(() => {
          this.setBottomWrap(true);
          //this.showBottomWrap = true;
        }, timer)
      },
      onDistrictClick: function (district) {
        this.currentSelectedRoad = {};
        this.currentSelectedDistrict = district;

        this.toggleBottom();
//                this.$broadcast("districtName", district);
        this.selectedRegionName(district.name);
      },
      hideBottomWrap: function () {
        this.$broadcast('clearLayers');
        this.setBottomWrap(false);
        //this.showBottomWrap = false;
      },
      onRoadClick: function (road) {
        this.currentSelectedRoad = road;

        this.toggleBottom();
        this.$broadcast('zoomToFeature', road);
      },
      backToRoadsList: function () {
        this.currentSelectedRoad = {};
        this.toggleBottom();
      },
      isEmpty: function (value) {
        return (Array.isArray(value) && value.length === 0)
          || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0);
      },
      showCrossSection: function () {
        $('#road-cross-section-modal').modal('show');
      }

    },

    ready(){
      /*      dojoRequire(["esri/map", "dojo/domReady!"], function (Map) {
       var map = new Map("map-content", {
       center: [-118, 34.5],
       zoom: 8,
       basemap: "topo"
       });
       });*/
    },
    components: {
      'map': require('../components/Map.vue'),
      'gisSearch': require('../components/GisSearch.vue')
    },
    computed: {
      isCurrent(){
        return this.roadTypes;
      }
    },
    events: {
      'road-selected': function (road) {
        this.onRoadClick(road);
      },
      roadFeatures: function (roads) {
//                this.roads = roads;
      },
      roadSearch: function (keyword) {
        this.$broadcast('searchRoodGraphics', keyword);
      },
      searchRoadResult: function (result) {
        this.$broadcast('searchRoadResultToGisSearch', result);
      },
      zoomTo: function (data) {
        this.$broadcast('zoomToFeature', data);
      }
    }

  };

</script>

<template>
  <div id="map-wrapper">
    <map></map>
    <div id="left-wrapper">
      <div class="maincontent">
        <ul class="nav nav-pills nav-justified" role="tablist">
          <li role="presentation" class="active">
            <a href="#district-tab" aria-controls="district-tab" role="tab" data-toggle="tab">区域</a>
          </li>
          <li role="presentation">
            <a href="#search-tab" aria-controls="search-tab" role="tab" data-toggle="tab">搜索</a>
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="district-tab">
            <ul class="list-group">
              <button type="button" class="list-group-item" v-for="d in districts"
                      @click="onDistrictClick(d)"
                      :class="{'active': d == currentSelectedDistrict}">
                <span class="badge">{{d.count}}</span>
                {{$index+1}}. {{d.name}}
              </button>
            </ul>
          </div>
          <div role="tabpanel" class="tab-pane" id="search-tab">
            <gis-search :road-types="checkedRoadTypes"></gis-search>
          </div>
        </div>
      </div>
      <div class="roadtype-checkboxgroup">
        <div>
          <p class='title'>选择类别</p>
          <p class='checkbox-item' v-for="type in roadTypes">
            <input type="checkbox" id="rt{{$index}}" value="{{type.text}}" v-model="checkedRoadTypes">
            <label for="rt{{$index}}">{{type.text}}</label>
          </p>
        </div>
      </div>
    </div>
    <div id="bottom-wrapper" v-show="showBottomWrap" class="animated" transition="slide1">
      <div id="district-body" v-show="isEmpty(currentSelectedRoad)">
        <div class="body-header">
                    <span class='text'>
                        {{getRegionName}} <span style='font-size:14px;font-weight:normal'>{{checkedRoadTypes}}</span>
                    </span>
          <div class='pull-right'>
                        <span class="dropup">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                导出
                                <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><a href="#">Excel</a></li>
                            <li><a href="#">Word</a></li>
                        </ul>
                        </span>
            <button class="btn btn-default btn-warning" @click="hideBottomWrap()">
              <span class="glyphicon glyphicon-remove">关闭</span>
            </button>

          </div>
        </div>

        <div class='body-content'>
          <ul class="header nav nav-pills nav-justified" role="tablist">
            <li v-for="type in checkedRoadTypes" :class="{'active':$index == 0}">
              <a href="#rtc-{{type}}" role="tab" data-toggle="tab">
                {{type}}
                <span class="badge">{{roads.length}}</span>
              </a>
            </li>
          </ul>
          <div class="content tab-content">
            <div v-for="type in checkedRoadTypes" class="tab-pane" :class="{'active':$index == 0}"
                 id="rtc-{{type}}">
              <table class="table table-hover ">
                <tr>
                  <th></th>
                  <th>路名</th>
                  <th>路面长度 (米)</th>
                  <th>路面一般宽度 (米)</th>
                  <th>路面面积 (平方米)</th>
                </tr>
                <tr v-for="r in roads" @click="onRoadClick(r)"
                    :class="{'info' : r == currentSelectedRoad}">
                  <td>{{$index+1}}</td>
                  <td>{{r.feature.attributes["路名"]}}</td>
                  <td>{{r.feature.attributes["路面长度"]}}</td>
                  <td>{{r.feature.attributes["路面一般宽度"]}}</td>
                  <td>{{r.feature.attributes["路面面积"]}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="road-body" v-if="!isEmpty(currentSelectedRoad)">
        <div class="body-header">
          <button class="btn btn-default btn-info"
                  v-show="currentSelectedDistrict" @click="backToRoadsList">
            <span class="glyphicon glyphicon-chevron-left"></span>
          </button>
          <span class='text'>{{currentSelectedRoad.feature.attributes['路名']}}</span>
          <div class='pull-right'>
            <button class="btn btn-default" @click="showCrossSection()">
              <span class="glyphicon glyphicon-eye-close"></span> 查看横断面
            </button>

            <span class="dropup">
                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="glyphicon glyphicon-export"></span> 导出
                        <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><a href="#">Excel</a></li>
                            <li><a href="#">Word</a></li>
                        </ul>
                        </span>
            <button class="btn btn-default" @click="hideBottomWrap()">
              <span class="glyphicon glyphicon-remove"></span> 关闭
            </button>
          </div>
        </div>
        <div class='body-content'>
          <ul class="header nav nav-pills nav-justified" role="tablist">
            <li class="active">
              <a href="#roadtab-1" role="tab" data-toggle="tab">基础信息</a>
            </li>
            <li>
              <a href="#roadtab-2" role="tab" data-toggle="tab">分段信息</a>
            </li>
            <li>
              <a href="#roadtab-3" role="tab" data-toggle="tab">权属信息</a>
            </li>
            <li>
              <a href="#roadtab-4" role="tab" data-toggle="tab">移交信息</a>
            </li>
            <li>
              <a href="#roadtab-5" role="tab" data-toggle="tab">养管档案</a>
            </li>
            <li>
              <a href="#roadtab-6" role="tab" data-toggle="tab">养管备案</a>
            </li>
            <li>
              <a href="#roadtab-7" role="tab" data-toggle="tab">占掘路信息</a>
            </li>
          </ul>
          <div class="content tab-content">
            <div class="tab-pane active" id="roadtab-1">
              <table class="table table-hover ">
                <thead>
                <tr>
                  <th>路名</th>
                  <th>起止地点</th>
                  <th>道路等级</th>
                  <th>普通路面面积</th>
                  <th>普通路面长度</th>
                  <th>高级路面水泥长度</th>
                  <th>高级路面水泥面积</th>
                  <th>高级路面沥青长度</th>
                  <th>高级路面沥青面积</th>
                  <th>人行道面积沥青</th>
                  <th>人行道面积砼砖砼板</th>
                  <th>侧石石砼</th>
                  <th>缘石石砼</th>
                  <th>路名牌个数</th>
                  <th>灯箱式个数</th>
                  <th>盲道总长度</th>
                  <th>修建年限</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{{currentSelectedRoad.feature.attributes['路名']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['起止地点']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['道路等级']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['普通路面面积']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['普通路面长度']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['高级路面水泥长度']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['高级路面水泥面积']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['高级路面沥青长度']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['高级路面沥青面积']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['人行道面积沥青']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['人行道面积砼砖砼板']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['侧石石砼']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['缘石石砼']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['路名牌个数']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['灯箱式个数']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['盲道总长度']}}</td>
                  <td>{{currentSelectedRoad.feature.attributes['修建年限']}}</td>

                </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane" id="roadtab-2">
              分段信息
            </div>
            <div class="tab-pane" id="roadtab-3">
              权属信息
            </div>
            <div class="tab-pane" id="roadtab-4">
              移交信息
            </div>
            <div class="tab-pane" id="roadtab-5">
              养管档案
            </div>
            <div class="tab-pane" id="roadtab-6">
              养管备案
            </div>
            <div class="tab-pane" id="roadtab-7">
              占掘路信息
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade " id="road-cross-section-modal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="exampleModalLabel">{{currentSelectedRoad.name}} 道路横断面</h4>
        </div>
        <div class="modal-body">
          <div style="overflow:auto">
            <img src="../assets/road-cross-section.jpg">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">导出</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        </div>
      </div>
    </div>
  </div>


</template>


<style scoped>
  #map-wrapper {
    height: 100%;
    position: relative;
    overflow: hidden
  }

  #left-wrapper {
    display: flex;
    flex-direction: column;
    width: 300px;
    position: absolute;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    z-index: 50;
    padding: 12px;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, .15);
  }

  #left-wrapper .maincontent {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .nav > li > a {
    border-radius: 0;
    background-color: #eee
  }

  .nav > li > a:focus,
  .nav > li > a:hover {
    background-color: #e8f4ff
  }

  .nav-pills > li.active > a,
  .nav-pills > li.active > a:focus,
  .nav-pills > li.active > a:hover {
    background-color: #0265dc
  }

  #left-wrapper .maincontent ul.nav {
  }

  #left-wrapper .tab-content {
    flex: 1;
    overflow-y: auto;
  }

  #left-wrapper .tab-content .list-group-item:focus {
    outline: 0
  }

  #left-wrapper .roadtype-checkboxgroup {
    background-color: #eee
  }

  #left-wrapper .roadtype-checkboxgroup p {
    margin: 0;
    padding: 5px;
    padding-left: 16px
  }

  #left-wrapper .roadtype-checkboxgroup .title {
    background-color: #0265dc;
    color: #fff;
    padding: 10px 5px;
    font-weight: bold
  }

  #left-wrapper .roadtype-checkboxgroup .checkbox-item {
  }

  #left-wrapper .list-group-item,
  #left-wrapper .list-group-item:first-child,
  #left-wrapper .list-group-item:last-child {
    border-color: #eee;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }

  #left-wrapper .list-group-item:first-child {
    border-top: 0
  }

  #left-wrapper .list-group-item:last-child {
    border-bottom: 0
  }

  #bottom-wrapper {
    width: 100%;
    min-height: 200px;
    height: 300px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 50;
    box-shadow: 1px -2px 1px rgba(0, 0, 0, .15);
  }

  #district-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #road-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .body-header {
    font-weight: bold;
    font-size: 18px;
    padding: 4px;
    border-bottom: #ddd solid 1px;
    background: rgba(0, 0, 0, .12)
  }

  .body-header .text {
    display: inline-block;
    line-height: 35px;
  }

  .body-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .body-content .nav-pills > li.active > a,
  .body-content .nav-pills > li.active > a:focus,
  .body-content .nav-pills > li.active > a:hover {
    background-color: #ffcc00;
    color: #000;
  }

  .body-content .header {
  }

  .body-content .content {
    flex: 1;
    overflow: auto
  }

  .body-content .content table {
    margin-bottom: 0
  }

  .body-buttons {
    padding: 4px;
    border-top: #eee solid 1px;
  }

  .slide1-enter {
    animation: slideInUp .3s;
  }

  .slide1-leave {
    animation: slideOutDown .15s;
  }
</style>
