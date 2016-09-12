<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-md-offset-5">
        <h3>将要跳转到 GIS 页面</h3>
        <img class="index img-rounded" src="../assets/loading.gif">

      </div>
    </div>

  </div>

</template>
<script>
    export default{
      ready(){
        setTimeout(()=>{
          this.$route.router.go({ name: 'gis'});
        },1000)
      },
      route:{//路由切换事件
        /*data(transition){
          console.log('切换到了home.vue');
          console.log(transition);
        },
        deactivate(transition){
          console.log("离开home.vue");
          console.log(transition);
          transition.next();
        }*/
      },
    }
</script>
<style>
  .index{
    margin-top:35%;
    background-color: #fff;
  }
</style>
