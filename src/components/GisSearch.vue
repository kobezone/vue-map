<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class='search-wrapper'>
    <div class="form-group keyword">
      <label class="sr-only" for="exampleInputAmount">输入关键字</label>
      <div class="input-group">
        <input type="text" class="form-control" id="exampleInputAmount" placeholder="输入关键字"
               v-on:keyup.enter="search()"
               v-model="keyword">
        <div class="input-group-addon btn" @click="search()">
          搜索
        </div>
      </div>
    </div>
    <div style="margin:20px;text-align:center" v-show="loading">查询中...</div>
    <ul class="list-group" v-show="!loading">
      <li class="list-group-item text-center" v-show="roads.length == 0">
        没有内容!
      </li>
      <button type="button"
              class="list-group-item"
              v-for="r in roads"
              @click="onRoadClick(r)"
              :class="{'active': r == currentSelectedRoad}"
      >
        {{$index+1}}. {{r.feature.attributes['路名']}}
      </button>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['roadTypes'],
    data(){
      return {
        keyword: "",
        roads: [],
        currentSelectedRoad: null,

        loading: false
      }
    },

    methods: {
      search: function () {
        if (this.keyword == "") return;
        this.loading = true;
        this.$dispatch('roadSearch', this.keyword);
      },
      onRoadClick: function (r) {
        this.currentSelectedRoad = r;
        this.$dispatch("road-selected", r);
        this.zoomTo(r);
      },
      zoomTo:function(data){
        this.$dispatch('zoomTo',data);
      }
    },
    events: {
      searchRoadResultToGisSearch: function (result) {
        this.loading = false;
        this.roads = result;
      }
    }

  }
</script>


<style>
  .search-wrapper {
    position: relative
  }

  .keyword {
    margin: 5px 0
  }

  .list-group-item,
  .list-group-item:first-child,
  .list-group-item:last-child {
    outline: 0;
    border-color: #eee;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }

  .list-group-item:first-child {
    border-top: 0
  }

  .list-group-item:last-child {
    border-bottom: 0
  }

  .list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {
    background-color: #ffcc00;
    border-color: #ffcc00
  }
</style>
