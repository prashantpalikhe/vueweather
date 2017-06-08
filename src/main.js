import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import App from './App';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
});
