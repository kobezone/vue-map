import Vue from 'vue'
import App from './App'
import Appb from './Appb'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();
router.map({
  '/Home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
});

router.redirect({
  '*': '/Home'
});
// router.start(App, '#app'); // TODO 此处有错误,需要排查原因

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {App}
});
