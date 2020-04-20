import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router';
import { Http } from './util/http';

Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})


Vue.config.productionTip = false
Vue.prototype.http = Http;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
