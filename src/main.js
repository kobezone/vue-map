import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './pages/HomePage'
import GisPage from './pages/GisPage'

require('./assets/animate.css');

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();
router.mode="html5";


//注册路由

router.map({
  '': {
    component: HomePage
  },
  'gis': {
    component: GisPage
  }
});

router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
});

router.start(App, 'app');
