<template>
    <div id="app">
        <mapside></mapside>
        <map></map>
    </div>
</template>
<link rel="stylesheet" href="../lib/bootstrap/css/bootstrap.min.css">

<script>
    import Mapside from './components/Mapside'
    import Map from './components/Map'
    export default {
        components: {
            Mapside,
            Map
        }
    }
</script>

<style>
    html {
        height: 100%;
        width: 100%;
    }

    body {
        /*display: flex;*/
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    #app {
        height: 100%;
        width: 100%;
        /*color: #2c3e50;*/
        /*margin-top: -100px;*/
        /*max-width: 600px;*/
        font-family: Source Sans Pro, Helvetica, sans-serif;
        /*text-align: center;*/
    }

    #app a {
        color: #42b983;
        text-decoration: none;
    }

</style>
