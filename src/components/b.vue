<template>
    <div class="container">
        <h2>Hello from component B!</h2>
    </div>
  <div>{{msgApp}}</div>
</template>

<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>

<style scoped>
  .container {
    border: 1px solid #f00;
  }
  h2 {
    color: #393;
  }
</style>
