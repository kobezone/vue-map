import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import filters from './filters'
import routerMap from './routers'


require('./assets/animate.css');

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

Vue.use(VueResource);
Vue.use(VueRouter);
$.ajaxSettings.crossDomain = true;
const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
});
router.mode="html5";

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
/*router.beforeEach((transition)=>{
  if(transition.to.auth){
    console.log(transition.to.path);
  }else{
    console.log("transition.next()");
    transition.next();
  }
});*/
router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
});

// let app=Vue.extend({});
routerMap(router);
router.start(App, 'app');
