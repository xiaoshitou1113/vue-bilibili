
import Vue from 'vue';
import MintUI from 'mint-ui';
import FastClick from 'fastclick';

import 'mint-ui/lib/style.css';
import './assets/css/reset.css';
import './assets/js/hotcss.js';
import './assets/css/font-awesome.css';

Vue.use(MintUI);

Vue.config.productionTip = false;


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


import App from './App.vue';
import router from './router';

new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
