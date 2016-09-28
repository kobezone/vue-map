<template>
  <!-- demo root element -->
  <div id="demo">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <demo-grid
      :data="gridDatas"
      :columns="gridColumns"
      :columns-chs="gridColumnsChs"
      :filter-key="searchQuery">
    </demo-grid>
    <div class="col-md-6">
      <select id="xl" name="xl" v-model="selectedArea">
        <option v-for="o in areaRoutes" :value="o.lineNum">{{o.lineName}}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        searchQuery: '',
        //gridColumns: ["caseID", 'catalog',"desc","reportTime"],
        //gridColumnsChs:["案件编号","类别","描述","日期"],
        gridColumns: [
          {name: "caseID", chs: "案件编号"},
          {name: "catalog", chs: "类别"},
          {name: "desc", chs: "描述"},
          {name: "reportTime", chs: "日期"}
        ],
        gridDatas: null,
        isShow: true,
        selectedArea:"",
        areaRoutes:  [
          {
            lineName: "海滨一路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保辅道-东方大道"
          },
          {
            lineName: "海滨二路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨二路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨三路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨三路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨四路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨四路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨五路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "海滨五路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨五路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨五路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "东方大道-南卡口"
          },
          {
            lineName: "海滨六路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "海滨六路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨六路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨六路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "东方大道-南巡道"
          },
          {
            lineName: "海滨七路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨七路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨七路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "东方大道-南巡道"
          },
          {
            lineName: "海滨八路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "北巡道-津滨大道"
          },
          {
            lineName: "海滨八路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "海滨八路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨八路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨八路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "东方大道-南巡道"
          },
          {
            lineName: "海滨九路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "京门大道-津滨大道"
          },
          {
            lineName: "海滨九路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "海滨九路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨九路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "海滨九路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "东方大道-南巡道"
          },
          {
            lineName: "海滨十路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "海滨十路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨十一路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "北巡道-津滨大道"
          },
          {
            lineName: "海滨十一路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "海滨十一路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "海滨十三路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "北巡道-津滨大道"
          },
          {
            lineName: "海滨十三路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "海滨十五路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "北巡道-津滨大道"
          },
          {
            lineName: "海滨十五路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "津滨大道-新港大道"
          },
          {
            lineName: "六号汪子巡视二路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道向南"
          },
          {
            lineName: "六号汪子巡视一路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道向南"
          },
          {
            lineName: "东巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "新港大道-天保大道"
          },
          {
            lineName: "东巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "天保大道-东方大道"
          },
          {
            lineName: "南巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨六路-海滨七路"
          },
          {
            lineName: "南巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨七路-海滨八路"
          },
          {
            lineName: "南巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨八路-海滨九路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨一路-东巡路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨二路-海滨一路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨三路-海滨二路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨四路-海滨三路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨五路-海滨四路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨六路-海滨五路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨八路-海滨七路"
          },
          {
            lineName: "东方大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨九路-海滨八路"
          },
          {
            lineName: "天保辅道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨二路-海滨一路"
          },
          {
            lineName: "天保辅道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨三路-海滨二路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨二路-东巡道"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨三路-海滨二路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨四路-海滨三路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨五路-海滨四路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨六路-海滨五路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨七路-海滨六路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨八路-海滨七路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨九路-海滨八路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十路-海滨九路"
          },
          {
            lineName: "天保大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十一路-海滨十路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨二路-东巡道"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨三路-海滨二路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨四路-海滨三路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨五路-海滨四路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨六路-海滨五路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨七路-海滨六路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨八路-海滨七路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨九路-海滨八路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十路-海滨九路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十一路-海滨十路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十三路-海滨十一路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十五路-海滨十三路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "六号汪子巡视二路-海滨十五路"
          },
          {
            lineName: "新港大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "六号汪子巡视一路-六号汪子巡视二路"
          },
          {
            lineName: "津滨大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨六路-海滨五路"
          },
          {
            lineName: "津滨大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨八路-海滨六路"
          },
          {
            lineName: "津滨大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨九路-海滨八路"
          },
          {
            lineName: "津滨大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十路-海滨九路"
          },
          {
            lineName: "津滨大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十一路-海滨十路"
          },
          {
            lineName: "津滨大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十三路-海滨十一路"
          },
          {
            lineName: "津滨大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十五路-海滨十三路"
          },
          {
            lineName: "北巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨九路-海滨八路"
          },
          {
            lineName: "北巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨九路-海滨十一路"
          },
          {
            lineName: "北巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十三路-海滨十一路"
          },
          {
            lineName: "北巡道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十五路-海滨十三路"
          },
          {
            lineName: "京门大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十一路-海滨九路"
          },
          {
            lineName: "京门大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十三路-海滨十一路"
          },
          {
            lineName: "京门大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨十五路-海滨十三路"
          },
          {
            lineName: "京门大道",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "临港路-海滨十五路"
          },
          {
            lineName: "兴业路",
            lineNum: "0",
            lineArea: "海港",
            lineSection: "海滨九路-海滨八路"
          },
          {
            lineName: "东二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-安和路"
          },
          {
            lineName: "东二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "安和路-中环东路"
          },
          {
            lineName: "东二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河东路"
          },
          {
            lineName: "西二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-保税路"
          },
          {
            lineName: "西二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "保税路-中环西路"
          },
          {
            lineName: "西二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-中心大道"
          },
          {
            lineName: "东三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-安和路"
          },
          {
            lineName: "东三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "安和路-中环东路"
          },
          {
            lineName: "西三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-保税路"
          },
          {
            lineName: "西三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "保税路-兴航路"
          },
          {
            lineName: "西三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "兴航路-中环西路"
          },
          {
            lineName: "西三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-中心大道"
          },
          {
            lineName: "东四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-景和路"
          },
          {
            lineName: "东四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景和路-观湖路"
          },
          {
            lineName: "东四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "观湖路-中环东路"
          },
          {
            lineName: "东四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-拢翠路"
          },
          {
            lineName: "东四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "拢翠路-桂雨路"
          },
          {
            lineName: "东四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "桂雨路-环河东路"
          },
          {
            lineName: "东四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河东路-环河北路"
          },
          {
            lineName: "西四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-保税路"
          },
          {
            lineName: "西四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "保税路-兴航路"
          },
          {
            lineName: "西四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "兴航路-中环西路"
          },
          {
            lineName: "西四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-中心大道"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-景和路"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景和路-观湖路"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "观湖路-景然路"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景然路-中环东路"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-拢翠路"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "拢翠路-桂雨路"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "桂雨路-规划支路E"
          },
          {
            lineName: "东五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "规划支路E-环河东路"
          },
          {
            lineName: "西五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "兴航路-保税路"
          },
          {
            lineName: "西五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-兴航路"
          },
          {
            lineName: "春晓路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-中心大道"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-景和路"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景和路-观湖路"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "观湖路-景然路"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景然路-中环东路"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-拢翠路"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "拢翠路-桂雨路"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "桂雨路-环河东路"
          },
          {
            lineName: "东六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河东路-环河北路"
          },
          {
            lineName: "西六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-保税路"
          },
          {
            lineName: "西六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "保税路-兴航路"
          },
          {
            lineName: "西六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "兴航路-中环西路"
          },
          {
            lineName: "东七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-景和路"
          },
          {
            lineName: "东七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景和路-航海路"
          },
          {
            lineName: "东七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航海路-景然路"
          },
          {
            lineName: "东七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景然路-航宇路"
          },
          {
            lineName: "东七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航宇路-中环东路"
          },
          {
            lineName: "东七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河东路"
          },
          {
            lineName: "西七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-航天路"
          },
          {
            lineName: "西七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航天路-航空路"
          },
          {
            lineName: "西七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航空路-中心大道"
          },
          {
            lineName: "东八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航海路"
          },
          {
            lineName: "东八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航海路-航宇路"
          },
          {
            lineName: "东八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航宇路-中环东路"
          },
          {
            lineName: "东八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河东路"
          },
          {
            lineName: "东八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河东路-环河北路"
          },
          {
            lineName: "西八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-航天路"
          },
          {
            lineName: "西八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航天路-航空路"
          },
          {
            lineName: "西八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航空路-中心大道"
          },
          {
            lineName: "东九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航海路"
          },
          {
            lineName: "东九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航海路-航宇路"
          },
          {
            lineName: "东九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航宇路-中环东路"
          },
          {
            lineName: "东九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河东路"
          },
          {
            lineName: "西九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-保税路"
          },
          {
            lineName: "西九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "保税路-中环西路"
          },
          {
            lineName: "西九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-航天路"
          },
          {
            lineName: "西九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航天路-航空路"
          },
          {
            lineName: "西九道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航空路"
          },
          {
            lineName: "空港一号桥",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "领航路-中环西路"
          },
          {
            lineName: "东十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航海路"
          },
          {
            lineName: "东十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航海路-航宇路"
          },
          {
            lineName: "东十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航宇路-中环东路"
          },
          {
            lineName: "东十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河东路"
          },
          {
            lineName: "西十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-航天路"
          },
          {
            lineName: "西十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航天路-航空路"
          },
          {
            lineName: "西十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航空路-中心大道"
          },
          {
            lineName: "东十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航海路"
          },
          {
            lineName: "东十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航海路-航宇路"
          },
          {
            lineName: "东十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航宇路-中环东路"
          },
          {
            lineName: "东十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河东路"
          },
          {
            lineName: "西十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十四道-环河西路"
          },
          {
            lineName: "西十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-中环西路"
          },
          {
            lineName: "西十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-航天路"
          },
          {
            lineName: "西十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航天路-航空路"
          },
          {
            lineName: "西十一道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航空路"
          },
          {
            lineName: "东十四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航海路"
          },
          {
            lineName: "西十四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-通航路"
          },
          {
            lineName: "西十四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "通航路-瑞航路"
          },
          {
            lineName: "西十四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "瑞航路-航空路"
          },
          {
            lineName: "西十四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航空路-中心大道"
          },
          {
            lineName: "西十五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "通航路-瑞航路"
          },
          {
            lineName: "西十五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "瑞航路-航空路"
          },
          {
            lineName: "西十五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航空路-中心大道"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-中环西路"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-汽车园北路"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园北路-汽车园东路"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园东路-中心大道"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-安和路"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "安和路-中环东路"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河东路"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河东路-东四道"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东四道-东六道"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东六道-东七道"
          },
          {
            lineName: "环河北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东七道-东八道"
          },
          {
            lineName: "M2",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "津汉公路-环河西路"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-汽车园中路"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园中路-中环西路"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-西二道"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-西三道"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西三道-西四道"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西四道-西五道"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西五道-西六道"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西六道-西九道"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西九道-西十道"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十道-赤海桥"
          },
          {
            lineName: "环河西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "赤海桥-西十一道"
          },
          {
            lineName: "环河南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十一道-通航路"
          },
          {
            lineName: "环河南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "通航路-瑞航路"
          },
          {
            lineName: "环河南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "瑞航路-航空路"
          },
          {
            lineName: "环河南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航空路-中心大道"
          },
          {
            lineName: "环河南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航海路"
          },
          {
            lineName: "环河南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航海路-航宇路"
          },
          {
            lineName: "环河南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航宇路-东十一道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-东二道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东二道-东四道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东四道-环碧道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环碧道-东五道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东六道-东七道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东七道-东八道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东八道-东九道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东九道-东十道"
          },
          {
            lineName: "环河东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东十道-东十一道"
          },
          {
            lineName: "规划支路十六",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河东路-东八道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-东二道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东二道-东三道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东三道-东四道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东四道-环碧道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环碧道-东五道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东六道-东七道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东七道-东八道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东八道-东九道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东九道-东十道"
          },
          {
            lineName: "中环东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东十道-东十一道"
          },
          {
            lineName: "中环南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十一道-通航路"
          },
          {
            lineName: "中环南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "通航路-航空路"
          },
          {
            lineName: "中环南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航空路-中心大道"
          },
          {
            lineName: "中环南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-航海路"
          },
          {
            lineName: "中环南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航海路-航宇路"
          },
          {
            lineName: "中环南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "航宇路-东十一道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-汽车园中路"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园中路-保税路"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "保税路-汽车园南路"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园南路-汽车园东路"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园东路-西二道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-西三道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西三道-西四道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西四道-春晓路"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "春晓路-西五道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西五道-西六道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西六道-西七道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西七道-西八道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西八道-西九道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西九道-西十道"
          },
          {
            lineName: "中环西路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十道-西十一道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-东二道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东二道-东三道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东三道-东四道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东四道-东五道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东六道-东七道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东七道-东八道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东八道-东九道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东九道-东十道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东十道-东十一道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东十一道-中环南路"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环南路-环河南路"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河南路-东十四道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-西二道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-西三道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西三道-西四道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西四道-春晓路"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "春晓路-西六道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西六道-西七道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西七道-西八道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西八道-西九道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西九道-西十道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十道-西十一道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十一道-中环南路"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环南路-环河南路"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河南路-西十四道"
          },
          {
            lineName: "中心大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十四道-西十五道"
          },
          {
            lineName: "蔷薇路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-西三道"
          },
          {
            lineName: "紫荆道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "蔷薇路-海关巡视路"
          },
          {
            lineName: "海关西侧路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-西二道"
          },
          {
            lineName: "海关巡视路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "海关巡视路-海关巡视路"
          },
          {
            lineName: "凤鸣道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-含章路"
          },
          {
            lineName: "凤鸣道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "含章路-元晖路"
          },
          {
            lineName: "凤鸣道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "元晖路-中心大道"
          },
          {
            lineName: "含章路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-嘉保道"
          },
          {
            lineName: "含章路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "嘉保道-凤鸣道"
          },
          {
            lineName: "厚德路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-嘉保道"
          },
          {
            lineName: "嘉保道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "含章路-元晖路"
          },
          {
            lineName: "元晖路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-嘉保道"
          },
          {
            lineName: "元晖路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "嘉保道-凤鸣道"
          },
          {
            lineName: "元晖路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "凤鸣道-西三道"
          },
          {
            lineName: "健行路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-嘉保道"
          },
          {
            lineName: "航宇路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东七道-东八道"
          },
          {
            lineName: "航宇路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东八道-东九道"
          },
          {
            lineName: "航宇路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东九道-东十道"
          },
          {
            lineName: "航宇路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东十道-东十一道"
          },
          {
            lineName: "航宇路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-环河南路"
          },
          {
            lineName: "航海路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东七道-东八道"
          },
          {
            lineName: "航海路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东八道-东九道"
          },
          {
            lineName: "航海路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东九道-东十道"
          },
          {
            lineName: "航海路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东十道-东十一道"
          },
          {
            lineName: "航海路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东十一道-中环南路"
          },
          {
            lineName: "航海路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环南路-环河南路"
          },
          {
            lineName: "航海路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河南路-东十四道"
          },
          {
            lineName: "观湖路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东四道-环碧道"
          },
          {
            lineName: "观湖路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环碧道-东五道"
          },
          {
            lineName: "观湖路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "景和路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东四道-环碧道"
          },
          {
            lineName: "景和路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环碧道-东五道"
          },
          {
            lineName: "景和路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "景和路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东六道-东七道"
          },
          {
            lineName: "景然路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "景然路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东六道-东七道"
          },
          {
            lineName: "环碧道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "景和路-观湖路"
          },
          {
            lineName: "环碧道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "观湖路-中环东路"
          },
          {
            lineName: "环碧道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环东路-拢翠路"
          },
          {
            lineName: "环碧道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "拢翠路-桂雨路"
          },
          {
            lineName: "环碧道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "桂雨路-环河东路"
          },
          {
            lineName: "拢翠路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环碧道-东五道"
          },
          {
            lineName: "拢翠路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "桂雨路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东四道-环碧道"
          },
          {
            lineName: "桂雨路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环碧道-东五道"
          },
          {
            lineName: "桂雨路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东五道-东六道"
          },
          {
            lineName: "领航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "通航路-赤海桥"
          },
          {
            lineName: "领航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "赤海桥-空客桥"
          },
          {
            lineName: "保航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "赤海桥-领航路"
          },
          {
            lineName: "保航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "领航路-宁航路"
          },
          {
            lineName: "宁航道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "启航路-远航路"
          },
          {
            lineName: "宁航道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "远航路-综合保税区巡视路"
          },
          {
            lineName: "远航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "宁航道-海关巡视路"
          },
          {
            lineName: "小区路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "综合保税区巡视路-宁航道"
          },
          {
            lineName: "通航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "领航路-启航路"
          },
          {
            lineName: "综合保税区巡视路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "赤海桥-海关巡视路"
          },
          {
            lineName: "启航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "宁航道-通航路"
          },
          {
            lineName: "汽车园北路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园中路-环河北路"
          },
          {
            lineName: "汽车园东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-汽车园中路"
          },
          {
            lineName: "汽车园东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园中路-汽车园南路"
          },
          {
            lineName: "汽车园东路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园南路-中环西路"
          },
          {
            lineName: "汽车园南路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路汽-车园东路"
          },
          {
            lineName: "汽车园中路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河西路-中环西路"
          },
          {
            lineName: "汽车园中路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-汽车园南路"
          },
          {
            lineName: "汽车园中路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园南路-汽车园北路"
          },
          {
            lineName: "汽车园中路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "汽车园北路-汽车园东路"
          },
          {
            lineName: "汽车展厅内部路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-环河西路"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西七道-西八道"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西八道-西九道"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西九道-西十道"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十道-西十一道"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十一道-中环南路"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环南路-环河南路"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河南路-西十四道"
          },
          {
            lineName: "航空路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十四道-西十五道"
          },
          {
            lineName: "航天路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西七道-西八道"
          },
          {
            lineName: "航天路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西八道-西九道"
          },
          {
            lineName: "航天路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西九道-西十道"
          },
          {
            lineName: "航天路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十道-西十一道"
          },
          {
            lineName: "瑞航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河南路-西十四道"
          },
          {
            lineName: "瑞航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十四道-西十五道"
          },
          {
            lineName: "通航路（规划支路七）",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环南路-环河南路"
          },
          {
            lineName: "通航路（规划支路七）",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河南路-西十四道"
          },
          {
            lineName: "通航路（规划支路七）",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十四道-西十五道"
          },
          {
            lineName: "保税路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中环西路-西二道"
          },
          {
            lineName: "保税路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西二道-西三道"
          },
          {
            lineName: "保税路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西三道-西四道"
          },
          {
            lineName: "保税路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西四道-西五道"
          },
          {
            lineName: "保税路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西五道-西六道"
          },
          {
            lineName: "保税路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西六道-西九道"
          },
          {
            lineName: "兴航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西三道-西四道"
          },
          {
            lineName: "兴航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西四道-西五道"
          },
          {
            lineName: "兴航路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西五道-西六道"
          },
          {
            lineName: "安和路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河北路-东二道"
          },
          {
            lineName: "安和路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东二道-东三道"
          },
          {
            lineName: "规划支路H",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "中心大道-规划支路L"
          },
          {
            lineName: "规划支路I",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东二道-东三道"
          },
          {
            lineName: "规划支路J",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东二道-东三道"
          },
          {
            lineName: "规划支路K",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "东二道-东三道"
          },
          {
            lineName: "规划支路L",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "规划支路三-规划支路L"
          },
          {
            lineName: "新建一号路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西四道-领航路"
          },
          {
            lineName: "纬二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经二路"
          },
          {
            lineName: "纬二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经二路-经三路"
          },
          {
            lineName: "纬二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经四路"
          },
          {
            lineName: "纬二道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经四路-经五路"
          },
          {
            lineName: "君康路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬一道-纬二道"
          },
          {
            lineName: "明康路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬一道-纬二道"
          },
          {
            lineName: "纬三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "环河东路-经一路"
          },
          {
            lineName: "纬三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经二路"
          },
          {
            lineName: "纬三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经二路-经三路"
          },
          {
            lineName: "纬三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经四路"
          },
          {
            lineName: "纬三道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经四路-经五路"
          },
          {
            lineName: "纬四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经二路"
          },
          {
            lineName: "纬四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经二路-经三路"
          },
          {
            lineName: "纬四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经四路"
          },
          {
            lineName: "纬四道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经四路-经五路"
          },
          {
            lineName: "纬五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经二路"
          },
          {
            lineName: "纬五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经二路-经三路"
          },
          {
            lineName: "纬五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经四路"
          },
          {
            lineName: "纬五道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经四路-经五路"
          },
          {
            lineName: "纬六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经二路"
          },
          {
            lineName: "纬六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经二路-经三路"
          },
          {
            lineName: "纬六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经四路"
          },
          {
            lineName: "纬六道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经四路-经五路"
          },
          {
            lineName: "纬七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经二路"
          },
          {
            lineName: "纬七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经二路-经三路"
          },
          {
            lineName: "纬七道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经四路"
          },
          {
            lineName: "纬八道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬八桥-经一路"
          },
          {
            lineName: "港城大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经二路"
          },
          {
            lineName: "港城大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经二路-经三路"
          },
          {
            lineName: "港城大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经四路"
          },
          {
            lineName: "港城大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经四路-经五路"
          },
          {
            lineName: "港城大道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经五路-东金路"
          },
          {
            lineName: "纬十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "西十五道-经一路"
          },
          {
            lineName: "纬十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经一路-经三路"
          },
          {
            lineName: "纬十道",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "经三路-经五路"
          },
          {
            lineName: "规划支路八",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬十道-经一路"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬一道-纬二道"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬二道-纬三道"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬三道-纬四道"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬四道-纬五道"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬五道-纬六道"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬六道-纬七道"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬七道-纬八道"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬八道-规划支路八"
          },
          {
            lineName: "经一路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "规划支路八-纬十道"
          },
          {
            lineName: "经二路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬一道-纬二道"
          },
          {
            lineName: "经二路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬二道-纬三道"
          },
          {
            lineName: "经二路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬三道-纬四道"
          },
          {
            lineName: "经二路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬四道-纬五道"
          },
          {
            lineName: "经二路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬五道-纬六道"
          },
          {
            lineName: "经二路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬六道-纬七道"
          },
          {
            lineName: "经二路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬七道-港城大道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬一道-纬二道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬二道-纬三道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬三道-纬四道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬四道-纬五道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬五道-纬六道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬六道-纬七道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬七道-港城大道"
          },
          {
            lineName: "经三路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "港城大道-纬十道"
          },
          {
            lineName: "经四路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬五道-纬六道"
          },
          {
            lineName: "经四路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬六道-纬七道"
          },
          {
            lineName: "经四路",
            lineNum: "0",
            lineArea: "空港",
            lineSection: "纬七道-港城大道"
          },
          {
            lineName: "一号路",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "第二大街-第三大街"
          },
          {
            lineName: "三号路",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "第一大街-第二大街"
          },
          {
            lineName: "三号路",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "第二大街-第三大街"
          },
          {
            lineName: "四号路",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "第一大街-第二大街"
          },
          {
            lineName: "四号路",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "第二大街-第三大街"
          },
          {
            lineName: "五号路",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "第一大街-第二大街"
          },
          {
            lineName: "五号路",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "第二大街-第三大街"
          },
          {
            lineName: "第一大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "五号路-四号路"
          },
          {
            lineName: "第一大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "四号路-三号路"
          },
          {
            lineName: "第一大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "三号路-货运路"
          },
          {
            lineName: "第二大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "五号路-四号路"
          },
          {
            lineName: "第二大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "四号路-三号路"
          },
          {
            lineName: "第二大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "三号路-一号路"
          },
          {
            lineName: "第二大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "一号路-货运路"
          },
          {
            lineName: "第三大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "五号路-四号路"
          },
          {
            lineName: "第三大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "四号路-三号路"
          },
          {
            lineName: "第三大街",
            lineNum: "0",
            lineArea: "物流",
            lineSection: "三号路-一号路"
          }
        ]
      }
    },
    ready(){

    },
    created: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        var self = this;
        /* var url = "http://localhost:41141/api/Values";
         $.ajax({
         type: "GET",
         url: url,
         dataType: "JSON",
         success: function (data) {
         console.log(JSON.stringify(data));
         console.log(data);
         self.gridDatas=data;
         },
         error: function () {
         console.log("error");

         }
         })*/

        var data = [{
          "caseID": "wgh-A-20160913-55012",
          "reportTime": "2016-09-13 14:13:21",
          "catalog": "设施管理部",
          "desc": "风鸣道与元辉路交口向东50米南侧134020号灯罩缺失需工程处理"
        }, {
          "caseID": "wgh-A-20160913-55011",
          "reportTime": "2016-09-13 14:10:34",
          "catalog": "道桥管理部",
          "desc": "西十五道与通航路交口向西280米北侧车行道上污水井盖破损"
        }, {
          "caseID": "wgh-A-20160913-55010",
          "reportTime": "2016-09-13 13:47:12",
          "catalog": "设施管理部",
          "desc": "西十道与航空路交口向东10米南侧信号灯不亮需工程处理"
        }, {
          "caseID": "wgh-A-20160913-55009",
          "reportTime": "2016-09-13 13:32:32",
          "catalog": "设施管理部",
          "desc": "津滨大道与海滨六路交口向西35米北侧绿化带内路灯灯罩缺失，需工程处理"
        }, {
          "caseID": "wgh-A-20160913-55008",
          "reportTime": "2016-09-13 13:26:39",
          "catalog": "设施管理部",
          "desc": "津滨大道与海滨六路交口西南角路灯302086灯具玻璃罩缺失"
        }, {
          "caseID": "wgh-A-20160913-55007",
          "reportTime": "2016-09-13 11:05:16",
          "catalog": "设施管理部",
          "desc": "景然路与东五道交口向南240米东侧路灯221018后盖缺失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55006",
          "reportTime": "2016-09-13 11:01:42",
          "catalog": "设施管理部",
          "desc": "东五道与景然路交口向南240米东侧路灯221018后盖缺失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55005",
          "reportTime": "2016-09-13 10:29:32",
          "catalog": "设施管理部",
          "desc": "东五道与观湖路交口向东150米北侧路灯111037后后盖缺失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55004",
          "reportTime": "2016-09-13 10:23:03",
          "catalog": "设施管理部",
          "desc": "观湖路与东五道交口向东120米北侧路灯111035后盖丢失需安装后盖"
        }, {
          "caseID": "wgh-A-20160913-55003",
          "reportTime": "2016-09-13 9:46:41",
          "catalog": "给排水管理部",
          "desc": "环河西十五道西侧Z○○米处，北河坡，有大量人为塑料袋，烂衣服等垃圾，即处理"
        }];
        self.gridDatas = data;
      }
    },
    components: { //三种写法,注意命名转变
      'demo-grid': require('../components/gridTemplate.vue')
    }
  }
</script>

<style scoped>
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }

  #demo{
    padding:20px;
  }
  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #42b983;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -user-select: none;
  }

  td {
    background-color: #f9f9f9;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }

  #search {
    margin-bottom: 10px;
  }
</style>
