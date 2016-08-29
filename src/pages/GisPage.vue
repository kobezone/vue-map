<script>


export default {
    data() {
        return {
            /**道路类别 */
            roadTypes: [
                {text:"主干道" , value:""} ,
                {text:"次干道" , value:""} ,
                {text:"人行道" , value:""} ,
            ] ,
            /**区域 */
            districts: [
                {name:"和平区" , count:6} ,
                {name:"南开区"} ,
                {name:"河西区"} ,
                {name:"河东区"} ,
                {name:"河北区"} ,
                {name:"虹桥区"} ,
                {name:"东丽区"} ,
                {name:"西青区"} ,
                {name:"北辰区"} ,
                {name:"津南区"} ,
                {name:"武清区"}
            ] ,
            roads: [
                {name:"道路1" , length:111 , width:200 , area:22200} ,
                {name:"道路2" , length:111 , width:200 , area:22200} ,
                {name:"道路3" , length:111 , width:200 , area:22200} ,
                {name:"道路4" , length:111 , width:200 , area:22200} ,
                {name:"道路5" , length:111 , width:200 , area:22200} ,
                {name:"道路6" , length:111 , width:200 , area:22200}
            ] ,
            /**选中的道路类别 */
            checkedRoadTypes: ["主干道" ,"次干道","人行道"] ,
            /**当前选中的区域 */
            currentSelectedDistrict: null ,
            /**当前选中的道路 */
            currentSelectedRoad:null ,

            showBottomWrap: false
        }
    } ,
    methods: {
        toggleBottom: function(){
            var timer = 0;
            if (this.showBottomWrap) timer = 200;
            this.showBottomWrap = false;
            setTimeout(() => {
                this.showBottomWrap = true;
            } , timer)
        } ,
        onDistrictClick: function(district){
            this.currentSelectedRoad = null;
            this.currentSelectedDistrict = district;
            this.toggleBottom();

        } ,
        hideBottomWrap: function(){
            this.showBottomWrap = false;
        } ,
        onRoadClick: function(road){

            this.currentSelectedRoad = road;
            this.toggleBottom();
        }
    } ,

    ready(){
        dojoRequire(["esri/map", "dojo/domReady!"], function(Map) {
            var map = new Map("map-content", {
                center: [-118, 34.5],
                zoom: 8,
                basemap: "topo"
            });
        });
    },
  components:{
      'map':require('../components/Map.vue')
  }

}

</script>

<template>
    <div id="map-wrapper">
        <!--地图-->
        <!--<div id="map-content">-->
        <!--</div>-->
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
                            <button type="button" class="list-group-item" v-for="d in districts" @click="onDistrictClick(d)" :class="{'active': d == currentSelectedDistrict}">
                                <span class="badge">{{d.count}}</span>
                                {{$index+1}}. {{d.name}}
                            </button>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="search-tab">
                        fasfdasdfasdfsadf
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
            <div id="district-body" v-show="!currentSelectedRoad && currentSelectedDistrict">
                <div class="body-header">
                    <span class='text'>
                        {{currentSelectedDistrict.name}} <span style='font-size:14px;font-weight:normal'>{{checkedRoadTypes}}</span>
                    </span>
                    <div class='pull-right'>
                        <span class="dropup">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        <div v-for="type in checkedRoadTypes" class="tab-pane" :class="{'active':$index == 0}" id="rtc-{{type}}">
                            <table class="table table-hover ">
                                <tr>
                                    <th></th>
                                    <th>名称</th>
                                    <th>长度</th>
                                    <th>宽度</th>
                                    <th>面积</th>
                                </tr>
                                <tr v-for="r in roads" @click="onRoadClick(r)" :class="{'info' : r == currentSelectedRoad}">
                                    <td>{{$index}}</td>
                                    <td>{{r.name}}</td>
                                    <td>{{r.length}}</td>
                                    <td>{{r.width}}</td>
                                    <td>{{r.area}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <!--<div class="body-buttons">
                        <div class='pull-right'>
                            <span class="dropup">
                            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    </div>-->
            </div>
            <div id="road-body" v-if="currentSelectedRoad">
                <div class="body-header">
                    <button class="btn btn-default btn-info" @click="onDistrictClick(currentSelectedDistrict)">
                            <span class="glyphicon glyphicon-chevron-left" ></span>
                        </button>
                        <span class='text'>{{currentSelectedRoad.name}}</span>
                    <div class='pull-right'>
                        <button class="btn btn-default" @click="showCrossSection()">
                                <span class="glyphicon glyphicon-eye-close"></span> 查看横断面
                            </button>

                        <span class="dropup">
                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                <tr>
                                    <th></th>
                                    <th>名称</th>
                                    <th>长度</th>
                                    <th>宽度</th>
                                    <th>面积</th>
                                </tr>
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
                <!--<div class="body-buttons">
                        <button class="btn btn-default btn-info" @click="onDistrictClick(currentSelectedRoad)">
                            <span class="glyphicon glyphicon-chevron-left" ></span> 返回
                        </button>
                        <div class='pull-right'>
                            <button class="btn btn-default" @click="showCrossSection()">
                                <span class="glyphicon glyphicon-eye-close"></span> 查看横断面
                            </button>

                            <span class="dropup">
                                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    </div>-->
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

    #map-content {
        height: 100%
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

    .nav>li>a {
        border-radius: 0;
        background-color: #eee
    }

    .nav>li>a:focus,
    .nav>li>a:hover {
        background-color: #e8f4ff
    }

    .nav-pills>li.active>a,
    .nav-pills>li.active>a:focus,
    .nav-pills>li.active>a:hover {
        background-color: #0265dc
    }

    #left-wrapper .maincontent ul.nav {}

    #left-wrapper .tab-content {
        flex: 1;
        overflow-y: auto;
    }

    #left-wrapper .tab-content .list-group-item:focus {
        outline: 0
    }

    #left-wrapper .roadtype-checkboxgroup p {
        margin: 0;
        padding: 5px
    }

    #left-wrapper .roadtype-checkboxgroup .title {
        background-color: #0265dc;
        color: #fff;
        padding: 10px 5px;
        font-weight: bold
    }

    #left-wrapper .roadtype-checkboxgroup .checkbox-item {}

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
        padding:4px;
        border-bottom: #ddd solid 1px;
        background:rgba(0,0,0,.12)
    }
    .body-header .text {
        display:inline-block;
        line-height:35px;
    }
    .body-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .body-content .nav-pills>li.active>a,
    .body-content .nav-pills>li.active>a:focus,
    .body-content .nav-pills>li.active>a:hover {
        background-color: #ffcc00;
        color: #000;
    }

    .body-content .header {}

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
