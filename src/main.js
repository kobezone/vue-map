import Vue from 'vue'
import App from './App'
require('./assets/animate.css')
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './pages/HomePage'
import GisPage from './pages/GisPage'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();
router.mode="html5";


//注册路由

router.map({
  '': {
    component: HomePage
  },
  '/gis': {
    component: GisPage
  }
});

router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
});

router.start(App, 'app');



// router.map({
//   '/Home': {
//     component: Home
//   },
//   '/time-entries': {
//     component: TimeEntries,
//     subRoutes: {
//       '/log-time': {
//         component: LogTime
//       }
//     }
//   }
// });
// router.redirect({
//   '*': '/Home'
// });
// router.start(App, '#app'); // TODO 此处有错误,需要排查原因

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: {App}
// });
