import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import store from './store/index'
import App from './App.vue'
import router from './router'
import { Http } from './util/http'

Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie);


Vue.config.productionTip = false
Vue.prototype.http = Http.http;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
