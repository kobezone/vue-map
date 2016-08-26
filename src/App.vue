<template>
    <div id="app" class="container-fluid">

        <!--<img class="logo" src="./assets/logo.png">-->
        <!--<hello></hello>-->
        <map></map>
    </div>

</template>
<link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">

<script>
    import Hello from './components/Hello'
    import Map from './components/Map'
    export default {
       
        components: {
            Hello,
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #app {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }

    #app a {
        color: #42b983;
        text-decoration: none;
    }

    .logo {
        width: 100px;
        height: 100px
    }
</style>
