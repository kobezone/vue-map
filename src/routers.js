/**
 * Created by wwm on 2016/8/31.
 */
'use strict';
//注册路由
export default function (router) {
  router.map({
      '*': {//404路由
        component: function (resolve) {
          require(['./pages/404.vue'], resolve);
        }
      },
      '/': {//首页
        name: 'gis',
        component: function (resolve) {
          require(['./pages/GisPage.vue'], resolve);
        }
      },
      '/login': {
        name: 'login',
        component: require('./pages/login.vue'),
        auth: true
      },
      '/home': {
        name: 'home',
        component: require('./pages/home.vue')
      },
      '/gis': {//GIS
        name: 'gis',
        component: function (resolve) {
          require(['./pages/GisPage.vue'], resolve);
        }
      },
      '/canvas': {
        name: 'canvas',
        component: require('./pages/canvas.vue')
      },
      '/layoutTest': {
        name: 'layoutTest',
        component: require('./pages/layout-test.vue')
      },
      '/table': {
        name:'table',
        component:require('./pages/table.vue')
      },
      '/echarts':{
        name:'echarts',
        component:require('./pages/echarts.vue')
      }
    }
  )
}
