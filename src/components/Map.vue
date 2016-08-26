<template>
    <div id="map">
        <div id="HomeButton"></div>
        <div id="LocateButton"></div>
        <div id="XYinfo"></div>
        <div></div>
    </div>
</template>

<script>

    export default{

        props: [],
        data(){
            return {
                msg: 'hello vue.',
            }
        },
        ready(){
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
                        "bism/ExtrudedFeatureLayer",
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
                              TDTAnnoLayer,TDTLayer_webMercator, ExtrudedFeatureLayer, SnappingManager, HomeButton,
                              Measurement, OverviewMap, LocateButton, FeatureLayer,GeometryService,
                              ArcGISDynamicMapServiceLayer, SimpleMarkerSymbol, SimpleLineSymbol, GraphicsLayer, Graphic,
                              Point, InfoTemplate, SpatialReference, Extent, array, registry, esriConfig, query, jsapiBundle,
                              Editor, TemplatePicker, AttributeInspector, CheckBox, keys, ToolbarSeparator, JsonRest) {
                        parser.parse();
                        esriConfig.defaults.io.proxyUrl = "./static/proxy/proxy.ashx";
                        esriConfig.defaults.io.alwaysUseProxy = false;

                        var map = new Map("map", {
                            center: [-118, 34.5],
                            zoom: 8,
                            basemap: "topo",
                            logo: false
                        });
                    });
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>
    #map {
        height: 100%;
        width: 75%;
        float: right;
    }
</style>
