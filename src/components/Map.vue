<template>

  <div id="map">
    <div class="btn-group" role="group" aria-label="测量工具" id="measureTools">
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
  let $parser, $Map, $on, $dom, $has, $Color, $Units, $bubblePopup, $MeasureTools, $TDTLayer, $TDTImgLayer,
    $TDTAnnoLayer, $TDTLayer_webMercator, $SnappingManager, $HomeButton,
    $Measurement, $OverviewMap, $LocateButton, $FeatureLayer, $GeometryService,
    $ArcGISDynamicMapServiceLayer, $SimpleMarkerSymbol, $SimpleLineSymbol, $GraphicsLayer, $Graphic,
    $Point, $InfoTemplate, $SpatialReference, $Extent, $registry, $esriConfig, $query, $jsapiBundle,
    $Editor, $TemplatePicker, $AttributeInspector, $CheckBox, $keys, $ToolbarSeparator, $JsonRest,
    $FindTask, $FindParameters, $ArrayUtils, $SimpleFillSymbol, $webMercatorUtils;
  let roadHightLightLayer;
  let root = window;
  export default{
    props: [],
    ready(){
      let self = this;
      dojoRequire(["dojo/parser",
          "esri/map",
          "dojo/on",
          "dojo/dom",
          "esri/sniff",
          "esri/Color",
          "esri/units",
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
          "esri/layers/GraphicsLayer",
          "esri/graphic",
          "esri/geometry/Point",
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
        function (parser, Map, on, dom, has, Color, Units, bubblePopup, MeasureTools, TDTLayer, TDTImgLayer,
                  TDTAnnoLayer, TDTLayer_webMercator, SnappingManager, HomeButton,
                  Measurement, OverviewMap, LocateButton, FeatureLayer, GeometryService,
                  ArcGISDynamicMapServiceLayer, SimpleMarkerSymbol, SimpleLineSymbol, GraphicsLayer, Graphic,
                  Point, InfoTemplate, SpatialReference, Extent, registry, esriConfig, query, jsapiBundle,
                  Editor, TemplatePicker, AttributeInspector, CheckBox, keys, ToolbarSeparator, JsonRest,
                  FindTask, FindParameters, ArrayUtils, SimpleFillSymbol, webMercatorUtils) {
          parser.parse();
          esriConfig.defaults.io.proxyUrl = "./static/proxy/proxy.ashx";
          esriConfig.defaults.io.alwaysUseProxy = false;
          esriConfig.defaults.geometryService = new GeometryService("http://60.29.110.104:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");
          [$parser, $Map, $on, $dom, $has, $Color, $Units, $bubblePopup, $MeasureTools, $TDTLayer, $TDTImgLayer,
            $TDTAnnoLayer, $TDTLayer_webMercator, $SnappingManager, $HomeButton,
            $Measurement, $OverviewMap, $LocateButton, $FeatureLayer, $GeometryService,
            $ArcGISDynamicMapServiceLayer, $SimpleMarkerSymbol, $SimpleLineSymbol, $GraphicsLayer, $Graphic,
            $Point, $InfoTemplate, $SpatialReference, $Extent, $registry, $esriConfig, $query, $jsapiBundle,
            $Editor, $TemplatePicker, $AttributeInspector, $CheckBox, $keys, $ToolbarSeparator, $JsonRest,
            $FindTask, $FindParameters, $ArrayUtils, $SimpleFillSymbol, $webMercatorUtils] = [parser, Map, on, dom, has, Color, Units, bubblePopup, MeasureTools, TDTLayer, TDTImgLayer,
            TDTAnnoLayer, TDTLayer_webMercator, SnappingManager, HomeButton,
            Measurement, OverviewMap, LocateButton, FeatureLayer, GeometryService,
            ArcGISDynamicMapServiceLayer, SimpleMarkerSymbol, SimpleLineSymbol, GraphicsLayer, Graphic,
            Point, InfoTemplate, SpatialReference, Extent, registry, esriConfig, query, jsapiBundle,
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
          root.tianjinRoadMapLayer = new FeatureLayer(self.tianjinRoadSHP + "/0", {
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
//          map.on("layers-add-result", addPointGraphics);
          roadHightLightLayer = new GraphicsLayer();
          map.addLayer(roadHightLightLayer);
          tianjinRoadMapLayer.on("click", showTianjinRoadInfo);
          tianjinRoadLineLayer.on("click", showTianjinRoadInfo);
          tianjinRoadPolyLayer.on("click", showTianjinRoadInfo);
          function showTianjinRoadInfo(evt) {
//            console.log(evt.graphic.attributes.NAME);
//            console.log(JSON.stringify(evt.graphic.geometry.rings[0]));
            let f = evt;
            f.feature = evt.graphic;
            self.$dispatch('road-selected', f)
          }

          var dynamicPointLayer = new GraphicsLayer({id: "dynamicPointLayer"});
          map.addLayer(dynamicPointLayer);

          function addPointGraphics() {
            var store = new JsonRest({target: "./static/data/points.json"});
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

//          var geoLocate = new LocateButton({
//            map: map
//          }, "LocateButton");
//          geoLocate.startup();
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
        msg: 'hello vue.',
        radioChecked: true,
        checkboxRoad: false,
        checkboxHightlight: false,
        checkboxAnno: true,
        isOne: 0,
        districtLongLat: {
          和平区: {longitude: "117.184570", latitude: "39.125082"},
          南开区: {longitude: "117.170195", latitude: "39.104405"},
          河西区: {longitude: "117.203046", latitude: "39.088054"},
          河东区: {longitude: "117.232100", latitude: "39.117494"},
          河北区: {longitude: "117.200643", latitude: "39.163221"},
          红桥区: {longitude: "117.159230", latitude: "39.156440"},
          东丽区: {longitude: "117.400800", latitude: "39.140647"},
          西青区: {longitude: "117.093768", latitude: "39.035963"},
          北辰区: {longitude: "117.121913", latitude: "39.226247"},
          津南区: {longitude: "117.375059", latitude: "38.990569"},
          武清区: {longitude: "117.034342", latitude: "39.379869"}
        }

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
      }
    },
    methods: {
      selectRoad: function () {
        // TODO 根据范围手动选择道路
      },
      //将点平移到map正中 (并 缩放到制定map级别)
      setMapCenter: function (e, level) {
        var location = new Point(e.longitude, e.latitude, root.map.spatialReference);

        root.map.centerAt(location);  //将点平移到map正中
        //root.map.centerAndZoom(location, level);   //将点平移到map正中 并 缩放到制定map级别
      },
      getDistrictRoad: function (district) {
        roadHightLightLayer.clear();
        let self = this;
        let findTask = new $FindTask(self.tianjinRoadUrlMapServer);
        let findParams = new $FindParameters();
        findParams.returnGeometry = true;
        findParams.layerIds = [0, 1, 2];
        findParams.searchFields = ["UNAME", "a", "路名", "道路等级"];
        findParams.searchText = "路";
        findTask.execute(findParams, function (result) {
          sessionStorage.roadData = JSON.stringify(result);
          self.addToTable(result);
        });
      },
      searchRoad: function (name) {
        roadHightLightLayer.clear();
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
      addToTable: function (result) {
        this.$dispatch("roadFeatures", result);
      },
      addResultGraphic: function (feature) {
        let self=this;
        roadHightLightLayer.clear();
        var lineSymbol = new $SimpleLineSymbol($SimpleLineSymbol.STYLE_DASH, new $Color([31, 0, 252]), 6);
        $ArrayUtils.forEach(feature, function (rs) {
          let f=rs.feature;
          if(f.geometry.spatialReference.wkid !=undefined && f.geometry.spatialReference.wkid != 4326){
            f.geometry=self.webMercatorToGeographic(f);
          }
          f.setSymbol(lineSymbol);
          roadHightLightLayer.add(f);
        });
      },
      webMercatorToGeographic: function (rs) {
        let f=$webMercatorUtils.webMercatorToGeographic(rs.geometry); //用此方法转换坐标系
        //$webMercatorUtils.xyToLngLat(e[0],e[1])  //用此方法转化坐标
        return f;
      }
    },
    components: {},
    events: {
      districtName: function (data) {
        let self = this;
        let districtName = data.name;
        self.getDistrictRoad(districtName);
        switch (districtName) {
          case "和平区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "南开区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "河西区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "河东区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "河北区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "红桥区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "东丽区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "西青区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "北辰区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "津南区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          case "武清区":
            self.setMapCenter(self.districtLongLat[districtName]);
            break;
          default:
            break;
        }
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
        this.addResultGraphic(f);
      },
      clearLayers: function () {
        roadHightLightLayer.clear();
      }
    },
    destroyed(){
      sessionStorage.removeItem("roadData");
      sessionStorage.removeItem("roadFeature");
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
    right: 50px;
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

  ul li label {
    padding-left: 16px;
  }
</style>
