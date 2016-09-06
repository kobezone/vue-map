<template>
<nav class="navbar navbar-default bg-primary navbar-fixed-top nav-shadow">
  <div class="container-fluid bg-primary">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">交委平台 <span style='font-size:12px'>v0.1</span></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li :class="{ 'active': $route.path == '/gis'}"><a v-link="{ path: 'gis' }">道路设施GIS</a></li>
        <li ><a href="#" >资产管理</a></li>
        <li><a href="#">检测数据</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">日常养管 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">养管计划</a></li>
            <li><a href="#">养管维修记录</a></li>
            <li><a href="#">养管任务分派</a></li>
            <li><a href="#">计量进度报表</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">数据地图浏览</a></li>
            <li><a href="#">巡视车辆监控</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">养管合同</a></li>
            <li><a href="#">基础数据</a></li>
          </ul>
        </li>
        <li><a href="#">占掘路状态</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">让你笑了 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click.prevent="showPersonalInfo">查看个人信息</a></li>
            <li><a href="#">修改密码</a></li>
            <li><a href="#">查看我的消息</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#" @click.prevent="exit">退出</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
  export default {
    data(){
      return {
        info:{}
      }
    },
    methods: {
      showPersonalInfo(){
        console.log("查看个人信息")
      },
      // 退出
      exit() {
        this.$route.router.go({ name: 'login' });
      },
    },
  };
</script>

<style scoped>

    .nav-shadow {border:0;box-shadow: 1px 2px 3px rgba(0,0,0,.3);margin-bottom:0px}

    .bg-primary .navbar-brand {font-size:24px;color:#fff;margin-right:120px}
    .bg-primary {background-color:#0265dc;}
    .bg-primary .navbar-nav>li>a {color:#fff;border-bottom:transparent solid 3px}
    .bg-primary .navbar-nav>li>a:focus, .bg-primary .navbar-nav>li>a:hover {color:#ffcc00;border-bottom:#fff solid 3px}
    .bg-primary .navbar-nav>.active>a, .bg-primary .navbar-nav>.active>a:focus, .bg-primary .navbar-nav>.active>a:hover {
        border-bottom:#ffcc00 solid 3px;
        background-color:transparent;
        color:#fff
    }
    .bg-primary .navbar-nav>.open>a, .bg-primary .navbar-nav>.open>a:focus, .bg-primary .navbar-nav>.open>a:hover{
        background-color:#fff;
        border-bottom:#fff solid 3px
    }
    .navbar-nav>li {font-size:16px;border-right1:rgba(255,255,255,.2) solid 1px}
    .navbar-nav>li:last-child {border:0}

    .dropdown-menu {border-color:#fff;min-width:180px}
    .dropdown-menu>li>a {padding-top:8px;padding-bottom:8px}
</style>
