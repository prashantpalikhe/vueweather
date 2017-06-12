import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import router from './router';
import App from './App';

sync(store, router);
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router,
});
