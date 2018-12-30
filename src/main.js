import Vue from 'vue'
import App from './App'
import store from './store/store.js';
import helperPlugin from './plugins/helperPlugin';

Vue.use(helperPlugin);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
