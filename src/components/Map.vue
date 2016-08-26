<template>
    <div id="map">
        <div id="HomeButton"></div>
        <div id="LocateButton"></div>
        <div id="XYinfo"></div>
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
            dojoRequire(["esri/map", "dojo/domReady!"], function(Map) {
                var map = new Map("map", {
                    center: [-118, 34.5],
                    zoom: 8,
                    basemap: "topo"
                });
            });
        },
        methods: {

        },
        components: {}
    }
</script>

<style scoped>
    div {

    }
</style>