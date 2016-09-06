/**
 * Created by wwm on 2016/8/31.
 */
'use strict';
//注册路由
export default function(router){
  router.map({
    '*':{//404路由
      component:function (resolve) {
        require(['./pages/404.vue'],resolve);
      }
    },
    '/':{//首页
      name:'home',
      component:function (resolve) {
        require(['./pages/home.vue'],resolve);
      }
    },
    '/login':{
      name:'login',
      component:require('./pages/login.vue'),
      auth:true
    },
    '/home':{
      name:'home',
      component:require('./pages/home.vue')
    },
    '/gis':{//GIS
      name:'gis',
      component:function (resolve) {
        require(['./pages/GisPage.vue'],resolve);
      }
    }
  })
}
