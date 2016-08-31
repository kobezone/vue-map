<template>
  <div>
    <img class="index" src="../assets/loading.gif">
  </div>

</template>
<script>
    export default{
      ready(){
        setTimeout(()=>{
          this.$route.router.go({ name: 'gis'});
        },1000)
      }
    }
</script>
<style>
  .index{
    /*width:100%;*/
    background-color: #fff;
    margin-top:30%;
    margin-left:45%;
  }
</style>
