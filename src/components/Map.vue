<template>

  <div id="map">

    <div class="btn-group" role="group" aria-label="测量工具" id="measureTools">
      <div class="btn-group">
        <button type="button" class="btn btn-default" @click="handSelectRoad">{{drawSelect.name}}</button>
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
          <span class="caret"></span>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li class="dropdown-header">选择方式</li>
          <li v-for="item in drawTypes" @click="drawSelect = item"><a>{{item.name}}</a></li>
        </ul>
      </div>
      <!--<button type="button" class="btn btn-default" @click="selectRoad">选择线路</button>-->
      <button type="button" class="btn btn-default measure-distance">测量距离</button>
      <button class="btn btn-default measure-area">测量面积</button>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          地图
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-right">
          <li class="dropdown-header">选择地图</li>
          <li>
            <label title="矢量图">
              <input type="radio" class="input-checkbox" value="矢量图"
                     v-model="radioChecked" checked="checked">矢量图
            </label>
          </li>
          <li>
            <label title="影像图">
              <input type="radio" class="input-checkbox" value="影像图"
                     v-model="radioChecked">影像图
            </label>
          </li>
          <li role="separator" class="divider"></li>
          <li class="dropdown-header">路网图层</li>
          <li>
            <label title="天津市路网">
              <input type="checkbox" class="input-checkbox" value="天津市路网"
                     v-model="checkboxRoad">天津市路网
            </label>
          </li>
          <li>
            <label title="高亮层">
              <input type="checkbox" class="input-checkbox" value="高亮层"
                     v-model="checkboxHightlight">高亮层
            </label>
          </li>
          <li role="separator" class="divider"></li>
          <li class="dropdown-header">选择标注层</li>
          <li>
            <label title="标注">
              <input type="checkbox" class="input-checkbox" value="标注"
                     v-model="checkboxAnno">标注
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div id="HomeButton"></div>
    <div id="LocateButton"></div>
    <div id="XYinfo"></div>
  </div>

</template>

<script>
  let $parser, $Map, $on, $dom, $has, $Color, $Units, $Query, $QueryTask, $bubblePopup, $MeasureTools, $TDTLayer, $TDTImgLayer,
    $TDTAnnoLayer, $TDTLayer_webMercator, $SnappingManager, $HomeButton,
    $Measurement, $OverviewMap, $LocateButton, $FeatureLayer, $GeometryService,
    $ArcGISDynamicMapServiceLayer, $SimpleMarkerSymbol, $SimpleLineSymbol, $CartographicLineSymbol, $GraphicsLayer, $Graphic,
    $Draw, $Point, $Polygon, $InfoTemplate, $SpatialReference, $Extent, $registry, $esriConfig, $query, $jsapiBundle,
    $Editor, $TemplatePicker, $AttributeInspector, $CheckBox, $keys, $ToolbarSeparator, $JsonRest,
    $FindTask, $FindParameters, $ArrayUtils, $SimpleFillSymbol, $webMercatorUtils;
  let roadHighLightLayer, boundaryHighLightLayer, regionHighLightLayer, selectAreaHighLightLayer;
  let root = window;

  import {getRegionName, showBottomWrap} from '../vuex/getters'
  import {selectedRegionName, updateRegionRoads, setBottomWrap,toggleBottomWrap} from '../vuex/actions'
  export default{
    vuex: {
      getters: {
        getRegionName,
        showBottomWrap,
      },
      actions: {
        selectedRegionName,
        updateRegionRoads,
        setBottomWrap,
        toggleBottom:toggleBottomWrap
      }
    },
    computed: {},
    ready(){
      let self = this;
      dojoRequire(["dojo/parser",
          "esri/map",
          "dojo/on",
          "dojo/dom",
          "esri/sniff",
          "esri/Color",
          "esri/units",
          "esri/tasks/query",
          "esri/tasks/QueryTask",
          "popup/bubblePopup",
          "utils/MeasureTools",
          "tdtLayers/TDTLayer",
          "tdtLayers/TDTImgLayer",
          "tdtLayers/TDTAnnoLayer",
          "tdtLayers/TDTLayer_webMercator",
          "esri/SnappingManager",
          "esri/dijit/HomeButton",
          "esri/dijit/Measurement",
          "esri/dijit/OverviewMap",
          "esri/dijit/LocateButton",
          "esri/layers/FeatureLayer",

          "esri/tasks/GeometryService",
          "esri/layers/ArcGISDynamicMapServiceLayer",
          "esri/symbols/SimpleMarkerSymbol",
          "esri/symbols/SimpleLineSymbol",
          "esri/symbols/CartographicLineSymbol",
          "esri/layers/GraphicsLayer",
          "esri/graphic",
          "esri/toolbars/draw",
          "esri/geometry/Point",
          "esri/geometry/Polygon",
          "esri/InfoTemplate",
          "esri/SpatialReference",
          "esri/geometry/Extent",

          "dijit/registry",
          "esri/config",
          "dojo/query",
          "dojo/i18n!esri/nls/jsapi",
          "esri/dijit/editing/Editor",
          "esri/dijit/editing/TemplatePicker",
          "esri/dijit/AttributeInspector",
          "dijit/form/CheckBox",
          "dojo/keys",
          "dijit/ToolbarSeparator",
          "dojo/store/JsonRest",
          "esri/tasks/FindTask",
          "esri/tasks/FindParameters",
          "dojo/_base/array",
          "esri/symbols/SimpleFillSymbol",
          "esri/geometry/webMercatorUtils",
          "esri/dijit/Scalebar",
          "dijit/layout/BorderContainer",
          "dijit/layout/ContentPane",
          "dijit/TitlePane",
          "dojo/domReady!"],
        function (parser, Map, on, dom, has, Color, Units, Query, QueryTask, bubblePopup, MeasureTools, TDTLayer, TDTImgLayer,
                  TDTAnnoLayer, TDTLayer_webMercator, SnappingManager, HomeButton,
                  Measurement, OverviewMap, LocateButton, FeatureLayer, GeometryService,
                  ArcGISDynamicMapServiceLayer, SimpleMarkerSymbol, SimpleLineSymbol, CartographicLineSymbol, GraphicsLayer, Graphic,
                  Draw, Point, Polygon, InfoTemplate, SpatialReference, Extent, registry, esriConfig, query, jsapiBundle,
                  Editor, TemplatePicker, AttributeInspector, CheckBox, keys, ToolbarSeparator, JsonRest,
                  FindTask, FindParameters, ArrayUtils, SimpleFillSymbol, webMercatorUtils) {
          parser.parse();
          esriConfig.defaults.io.proxyUrl = "./static/proxy/proxy.ashx";
          esriConfig.defaults.io.alwaysUseProxy = false;
          esriConfig.defaults.geometryService = new GeometryService("http://60.29.110.104:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");
          [$parser, $Map, $on, $dom, $has, $Color, $Units, $Query, $QueryTask, $bubblePopup, $MeasureTools, $TDTLayer, $TDTImgLayer,
            $TDTAnnoLayer, $TDTLayer_webMercator, $SnappingManager, $HomeButton,
            $Measurement, $OverviewMap, $LocateButton, $FeatureLayer, $GeometryService,
            $ArcGISDynamicMapServiceLayer, $SimpleMarkerSymbol, $SimpleLineSymbol, $CartographicLineSymbol, $GraphicsLayer, $Graphic,
            $Draw, $Point, $Polygon, $InfoTemplate, $SpatialReference, $Extent, $registry, $esriConfig, $query, $jsapiBundle,
            $Editor, $TemplatePicker, $AttributeInspector, $CheckBox, $keys, $ToolbarSeparator, $JsonRest,
            $FindTask, $FindParameters, $ArrayUtils, $SimpleFillSymbol, $webMercatorUtils] = [parser, Map, on, dom, has, Color, Units, Query,
            QueryTask, bubblePopup, MeasureTools, TDTLayer, TDTImgLayer,
            TDTAnnoLayer, TDTLayer_webMercator, SnappingManager, HomeButton,
            Measurement, OverviewMap, LocateButton, FeatureLayer, GeometryService,
            ArcGISDynamicMapServiceLayer, SimpleMarkerSymbol, SimpleLineSymbol, CartographicLineSymbol, GraphicsLayer, Graphic,
            Draw, Point, Polygon, InfoTemplate, SpatialReference, Extent, registry, esriConfig, query, jsapiBundle,
            Editor, TemplatePicker, AttributeInspector, CheckBox, keys, ToolbarSeparator, JsonRest,
            FindTask, FindParameters, ArrayUtils, SimpleFillSymbol, webMercatorUtils];

          root.TDTLayer = new TDTLayer();
          root.TDTImgLayer = new TDTImgLayer();
          root.TDTAnnoLayer = new TDTAnnoLayer();

          root.FeatureLayer = FeatureLayer;
          root.Point = Point;
          root.SpatialReference = SpatialReference;
          root.Extent = Extent;
          var map = new Map("map", {
            // base:"kgmap",
            // extent: startExtent,
            slider: true,
            maxZoom: 18, //限制最大缩放级别
            minZoom: 3,
            showAttribution: false,
            fadeOnZoom: true,
            force3DTransforms: true,
            center: [117.2015, 39.1330],
            zoom: 12,
            autoResize: true,
            sliderPosition: "top-left",
            // infoWindow: infoWindow,
            logo: false
          });
          map.addLayers([root.TDTLayer, root.TDTImgLayer, root.TDTAnnoLayer]);

          root.map = map;
          root.TDTLayer.show();
          root.TDTImgLayer.hide();
          root.TDTAnnoLayer.show();
          root.tianjinRoadMapLayer = new FeatureLayer(self.tianjinRoadSHP + "/1", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*'],
            id: "dynamicTianjin",
            useMapImage: true,
            opacity: 0.95,
            visible: true
          });
          root.tianjinRoadLineLayer = new FeatureLayer(self.tianjinRoadUrl + "/0", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*'],
            id: "tianjinRoadLineFeature",
            useMapImage: true,
            opacity: 1,
            visible: true
          });
          root.tianjinRoadPolyLayer = new FeatureLayer(self.tianjinRoadUrl + "/1", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*'],
            id: "tianjinRoadPolyLayer",
            useMapImage: true,
            opacity: 1,
            visible: true
          });

          map.addLayers([tianjinRoadMapLayer, tianjinRoadLineLayer, tianjinRoadPolyLayer]);



          tianjinRoadMapLayer.hide();
          tianjinRoadLineLayer.hide();
          tianjinRoadPolyLayer.hide();
          map.on("layers-add-result", addPointGraphics);
          map.on("layers-add-result", self.searchRegion);
          roadHighLightLayer = new GraphicsLayer();
          map.addLayer(roadHighLightLayer);
          boundaryHighLightLayer = new GraphicsLayer();
          map.addLayer(boundaryHighLightLayer);
          regionHighLightLayer = new GraphicsLayer();
          map.addLayer(regionHighLightLayer);
          selectAreaHighLightLayer = new GraphicsLayer();
          map.addLayer(selectAreaHighLightLayer);
          tianjinRoadMapLayer.on("click", showTianjinRoadInfo);
          tianjinRoadLineLayer.on("click", showTianjinRoadInfo);
          tianjinRoadPolyLayer.on("click", showTianjinRoadInfo);
          function showTianjinRoadInfo(evt) {
            let f = evt;
            f.feature = evt.graphic;
            self.$dispatch('road-selected', f)
          }

          var dynamicPointLayer = new GraphicsLayer({id: "dynamicPointLayer"});
          map.addLayer(dynamicPointLayer);
          dynamicPointLayer.hide();
          function addPointGraphics() {
            var store = new JsonRest({target: "static/data/points.json"});
            store.query({ID: "*"}).then(function (result, request) {
              var items = result.items;
              for (var i = 0, il = items.length; i < il; i++) {
                var attr = {
                  "ReporterName": items[i].ReporterName,
                  "ReportTime": items[i].ReportTime,
                  "HighwayName": items[i].HighwayName
                };
                var loc = new Point(items[i].x, items[i].y, map.SpatialReference);
                var symbol = new SimpleMarkerSymbol(
                  SimpleMarkerSymbol.STYLE_CIRCLE,
                  6,
                  new SimpleLineSymbol(
                    SimpleLineSymbol.STYLE_SOLID,
                    new Color([0, 0, 255, 0.5]),
                    4
                  ),
                  new Color([0, 0, 255])
                );
                var graphic = new Graphic(loc, symbol, attr, null);
                dynamicPointLayer.add(graphic);
              }
            });
            dynamicPointLayer.on("click", showPointInfo);
          }

          function showPointInfo(evt) {
            console.log(evt);
          }

          var home = new HomeButton({
            theme: "HomeButton",
            map: map,
            extent: null,
            visible: true
          }, "HomeButton");
          home.startup();

          /*var geoLocate = new LocateButton({
           map: map
           }, "LocateButton");
           geoLocate.startup();*/
          var measureTool = new MeasureTools({
            map: map
          }, "measureTools");
          map.on('mouse-move', showCoordinates);
          map.on('mouse-drag', showCoordinates);
          function showCoordinates(evt) {
            var mp = evt.mapPoint;
            $("#XYinfo").html("坐标：" + mp.x.toFixed(8) + " , " + mp.y.toFixed(8));  //t
          }
        });
    },
    data(){
      return {
        tianjinRoadSHP: "http://60.29.110.104:6080/arcgis/rest/services/天津市/天津市路网矢量图/MapServer",
        tianjinRoadUrl: "http://60.29.110.104:6080/arcgis/rest/services/天津市/天津市路网编辑/FeatureServer",
        //FeatureServer不能用于属性搜索
        tianjinRoadUrlMapServer: "http://60.29.110.104:6080/arcgis/rest/services/天津市/天津市路网编辑/MapServer",
        drawTypes: [{name: "框选", type: "rectangle"}, {name: "圆形", type: "circle"}, {
          name: "多边形",
          type: "polygon"
        }, {name: "手绘", type: "freehandpolygon"}],
        drawSelect: {name: "框选", type: "rectangle"},
        radioChecked: true,
        checkboxRoad: false,
        checkboxHightlight: false,
        checkboxAnno: true,
        isOne: 0,
        allRegion: [],
        roadHedong: {}
      }
    },
    watch: {
      radioChecked: function (value, oldValue) {
        this.isOne += 1;
        if (this.isOne > 1) {
          switch (value) {
            case "影像图":
              root.TDTImgLayer.show();
              root.TDTLayer.hide();
              break;
            case "矢量图":
              root.TDTLayer.show();
              root.TDTImgLayer.hide();
              break;
            default:
              break;
          }
        }
      },
      checkboxRoad: function (value) {
        if (value) {
          root.tianjinRoadMapLayer.show();
        } else {
          root.tianjinRoadMapLayer.hide();
        }
      },
      checkboxHightlight: function (value) {
        if (value) {
          root.tianjinRoadLineLayer.show();
        } else {
          root.tianjinRoadLineLayer.hide();
        }
      },
      checkboxAnno: function (value, oldValue) {
        if (value) {
          root.TDTAnnoLayer.show();
        } else {
          root.TDTAnnoLayer.hide();
        }
      },
      drawSelect: function (value, oldValue) {
        this.handSelectRoad();
      },
      getRegionName: function (value, oldValue) {
        this.getDistrictRoad(value);
        this.zoomToRegion(value);
      }
    },
    methods: {
      handSelectRoad: function () {
        let self = this;
        selectAreaHighLightLayer.clear();
        roadHighLightLayer.clear();
        //根据范围手动选择道路
        //let lineSymbol = new $CartographicLineSymbol($CartographicLineSymbol.STYLE_SOLID,new $Color([255, 0, 0]), 10,$CartographicLineSymbol.CAP_ROUND,$CartographicLineSymbol.JOIN_MITER, 5);
        var lineSymbol = new $SimpleLineSymbol($SimpleLineSymbol.STYLE_DASH, new $Color([31, 0, 252]), 6);
        let toolBar = new $Draw(root.map);
        //toolBar.on("draw-end",addGraphic);
        toolBar.on("draw-end", doQuery);
        root.map.disableMapNavigation();//禁用map双击放大事件
        toolBar.activate(this.drawSelect.type);
        function addGraphic(evt) {
          toolBar.deactivate();
          root.map.enableMapNavigation();
          let areaSymbol;
          if (evt.geometry.type === "point" || evt.geometry.type === "multipoint") {
            areaSymbol = markerSymbol;
          } else if (evt.geometry.type === "line" || evt.geometry.type === "polyline") {
            areaSymbol = lineSymbol;
          } else {
            areaSymbol = simpleFillSymbol;
          }
          //selectAreaHighLightLayer.add(new $Graphic(evt.geometry,areaSymbol)); //不添加到地图中
        }

        function doQuery(evt) {
          let query = new $Query();
          query.geometry = evt.geometry;
          let queryTask = new $QueryTask(self.tianjinRoadUrlMapServer + "/0");
          query.returnGeometry = true;
          query.outFields = ["*"];
          queryTask.execute(query, showResults);
        }

        function showResults(featureSet) {
          toolBar.deactivate();
          root.map.enableMapNavigation();
          //root.map.setMapCursor();
          let resultFeatures = featureSet.features;
          let myResult = [];
          for (let i = 0, il = resultFeatures.length; i < il; i++) {
            let graphic = resultFeatures[i];
            graphic.setSymbol(lineSymbol);
            roadHighLightLayer.add(graphic);
            var g = {};
            g.feature = graphic;
            myResult.push(g);
          }
          if (myResult.length > 0) {
            self.toggleBottom();
            self.addToTable(myResult);
          }
        }
      },
      //将点平移到map正中 (并 缩放到制至map级别)
      setMapCenter: function (e, level) {
        var location = new Point(e.longitude, e.latitude, root.map.spatialReference);

        //  root.map.centerAt(location);  //将点平移到map正中
        //root.map.centerAndZoom(location, level);   //将点平移到map正中 并 缩放到制定map级别
      },
      getDistrictRoad: function (district) {
        roadHighLightLayer.clear();
        if (this.roadHedong != undefined && !this.isEmpty(this.roadHedong)) {
          this.addToTable(this.roadHedong);
          return;
        }
        let self = this;
        let findTask = new $FindTask(self.tianjinRoadUrlMapServer);
        let findParams = new $FindParameters();
        findParams.returnGeometry = true;
        findParams.layerIds = [0, 1, 2];
        findParams.searchFields = ["UNAME", "a", "路名", "道路等级"];
        findParams.searchText = "路";
        findTask.execute(findParams, function (result) {
          self.roadHedong = result;
          sessionStorage.roadData = JSON.stringify(result);
//                    self.addToTable(district,result);
          self.updateRegionRoads(result);
        });
      },
      searchRoad: function (name) {
        roadHighLightLayer.clear();
        let self = this;
        let findTask = new $FindTask(self.tianjinRoadUrlMapServer);
        let findParams = new $FindParameters();
        findParams.returnGeometry = true;
        findParams.layerIds = [0, 1, 2];
        findParams.searchFields = ["a", "路名", "道路等级"];
        findParams.searchText = name.trim();
        findTask.execute(findParams, function (result) {
          self.$dispatch('searchRoadResult', result);
        });
      },
      searchRegion: function (name) {
        if (this.allRegion.length > 0) {
          return;
        }
        let self = this;
        let findTask = new $FindTask(self.tianjinRoadSHP);
        let findParams = new $FindParameters();
        findParams.returnGeometry = true;
        findParams.layerIds = [0];
        findParams.searchFields = ['name'];
        findParams.searchText = "区";
        findTask.execute(findParams, function (result) {
          self.allRegion = result;
          sessionStorage.region = JSON.stringify(result);
        })
      },
      zoomToRegion: function (districtName) {
        let self = this;
        for (let i = 0, il = this.allRegion.length; i < il; i++) {
          if (this.allRegion[i].value == districtName) {
            let geometry = this.allRegion[i];
            let sExtent = geometry.feature.geometry.getExtent();
            sExtent = sExtent.expand(2);
            root.map.setExtent(sExtent);
            let f = [];
            f.push(geometry);
            this.addRegionGraphic(f);
          }
        }
      },
      addToTable: function (result) {
        this.updateRegionRoads(result);
        //this.$dispatch("roadFeatures", result);
      },
      addRoadGraphic: function (feature) {
        let self = this;
        roadHighLightLayer.clear();
        var lineSymbol = new $SimpleLineSymbol($SimpleLineSymbol.STYLE_DASH, new $Color([31, 0, 252]), 6);
        $ArrayUtils.forEach(feature, function (rs) {
          let f = rs.feature;
          if (f.geometry.spatialReference.wkid != undefined && f.geometry.spatialReference.wkid != 4326) {
            f.geometry = self.webMercatorToGeographic(f);
          }
          f.setSymbol(lineSymbol);
          roadHighLightLayer.add(f);
        });
      },
      addRegionGraphic: function (feature) {
        let self = this;
        regionHighLightLayer.clear();
        var lineSymbol = new $SimpleLineSymbol($SimpleLineSymbol.STYLE_DASH, new $Color([252, 0, 111]), 4);
        $ArrayUtils.forEach(feature, function (rs) {
          let f = rs.feature;
          if (f.geometry.spatialReference.wkid != undefined && f.geometry.spatialReference.wkid != 4326) {
            f.geometry = self.webMercatorToGeographic(f);
          }
          f.setSymbol(lineSymbol); //将polygon的symbol设定为lineSymbol 也是可以的
          regionHighLightLayer.add(f);
        });
      },
      webMercatorToGeographic: function (rs) {
        //$webMercatorUtils.webMercatorToGeographic(rs.geometry); //用此方法转换坐标系
        //$webMercatorUtils.xyToLngLat(e[0],e[1])  //用此方法转化坐标
        return $webMercatorUtils.webMercatorToGeographic(rs.geometry);
      },
      isEmpty: function (value) {
        return (Array.isArray(value) && value.length === 0)
          || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0);
      }
    },
    components: {},
    events: {
      districtName: function (data) {
        let districtName = data.name;
        this.getDistrictRoad(districtName);
        this.zoomToRegion(districtName);
      },
      clearLayers:function(){
        roadHighLightLayer.clear();
        regionHighLightLayer.clear();
        selectAreaHighLightLayer.clear();
      },
      searchRoodGraphics: function (keyword) {
        this.searchRoad(keyword);
      },
      zoomToFeature: function (data) {
        let sExtent = data.feature.geometry.getExtent();
        sExtent = sExtent.expand(2);
        root.map.setExtent(sExtent);
        let f = [];
        f.push(data);
        this.addRoadGraphic(f);
      },
    },
    destroyed(){
      console.log("销毁seesionStore");
      sessionStorage.removeItem("roadData");
      sessionStorage.removeItem("roadFeature");
      sessionStorage.removeItem("region");
      sessionStorage.removeItem("tianjinBoundary");
      sessionStorage.removeItem("toLngLat");
    }
  }
</script>

<style>
  #map {
    height: 100%;
    width: calc(100% - 300px);
    float: right;
    position: relative;
  }

  #HomeButton {
    position: absolute;
    float: left;
    top: 110px;
    /*left: calc(100% - 290px);*/
    left: 22px;
    z-index: 50;
  }

  #LocateButton {
    position: relative;
    top: 150px;
    right: 22px;
    z-index: 50;
  }

  #measureTools {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 50;
  }

  #map #XYinfo {
    background-color: transparent;
    font-weight: normal;
    font-size: smaller;
    color: #000000;
    position: absolute;
    padding: 2px;
    /*left: 6px;*/
    bottom: 1px;
    z-index: 2;
  }

  #map ul li label {
    padding-left: 16px;
  }

  #map ul li a:hover {
    cursor: pointer;
  }
</style>
