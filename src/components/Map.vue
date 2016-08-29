<template>

  <div id="map">
    <div class="btn-group" role="group" aria-label="测量工具" id="measureTools">
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
    <!--<div id="LocateButton"></div>-->
    <div id="XYinfo"></div>
  </div>

</template>

<script>
  //    var Map, TDTLayer, TDTImgLayer, TDTAnnoLayer, TDTLayer_webMercator;
  //    var FeatureLayer, Point, SpatialReference, Extent;
  var root = window;
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
          "dojo/_base/array",
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
          "esri/dijit/Scalebar",
          "dijit/layout/BorderContainer",
          "dijit/layout/ContentPane",
          "dijit/TitlePane",
          "dojo/domReady!"],
        function (parser, Map, on, dom, has, Color, Units, bubblePopup, MeasureTools, TDTLayer, TDTImgLayer,
                  TDTAnnoLayer, TDTLayer_webMercator, SnappingManager, HomeButton,
                  Measurement, OverviewMap, LocateButton, FeatureLayer, GeometryService,
                  ArcGISDynamicMapServiceLayer, SimpleMarkerSymbol, SimpleLineSymbol, GraphicsLayer, Graphic,
                  Point, InfoTemplate, SpatialReference, Extent, array, registry, esriConfig, query, jsapiBundle,
                  Editor, TemplatePicker, AttributeInspector, CheckBox, keys, ToolbarSeparator, JsonRest) {
          parser.parse();
          esriConfig.defaults.io.proxyUrl = "./static/proxy/proxy.ashx";
          esriConfig.defaults.io.alwaysUseProxy = false;
          esriConfig.defaults.geometryService = new GeometryService("http://60.29.110.104:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");

          root.Map = Map;
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
            zoom: 14,
            autoResize: true,
            sliderPosition: "top-left",
            // infoWindow: infoWindow,
            logo: false
          });
          map.addLayers([root.TDTLayer, root.TDTImgLayer, root.TDTAnnoLayer]);

          root.TDTLayer.show();
          root.TDTImgLayer.hide();
          root.TDTAnnoLayer.show();
          var tianjinRoadSHP = "http://60.29.110.104:6080/arcgis/rest/services/天津市/天津市路网矢量图/MapServer/";
          var tianjinRoadUrl = "http://60.29.110.104:6080/arcgis/rest/services/天津市/天津市路网编辑/FeatureServer/";
          root.tianjinRoadMapLayer = new FeatureLayer(tianjinRoadSHP + "0", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*'],
            id: "dynamicTianjin",
            useMapImage: true,
            opacity: 0.95,
            visible: true
          });
          root.tianjinRoadLineLayer = new FeatureLayer(tianjinRoadUrl + "0", {
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*'],
            id: "tianjinRoadLineFeature",
            useMapImage: true,
            opacity: 1,
            visible: true
          });
          root.tianjinRoadPolyLayer = new FeatureLayer(tianjinRoadUrl + "1", {
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
          tianjinRoadMapLayer.on("click", showTianjinRoadInfo);
          tianjinRoadLineLayer.on("click", showTianjinRoadInfo);
          tianjinRoadPolyLayer.on("click", showTianjinRoadInfo);
          function showTianjinRoadInfo(evt) {
            console.log(evt);
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
          /*                        var geoLocate = new LocateButton({
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
            $("#XYinfo").html("坐标：" + mp.x.toFixed(6) + " , " + mp.y.toFixed(6));  //t
          }
        });
    },
    data(){
      return {
        msg: 'hello vue.',
        radioChecked: true,
        checkboxRoad: false,
        checkboxHightlight: false,
        checkboxAnno: true,
        isOne: 0
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

    methods: {},
    components: {}
  }
</script>

<style>
  #map {
    height: 100%;
    width: 75%;
    float: right;
  }

  #HomeButton {
    position: absolute;
    float: left;
    top: 110px;
    left: 26%;
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
    background-color: #000000;
    font-weight: normal;
    font-size: smaller;
    color: #FFFFFF;
    position: absolute;
    padding: 2px;
    /*left: 6px;*/
    bottom: 1px;
    z-index: 99;
  }

</style>
