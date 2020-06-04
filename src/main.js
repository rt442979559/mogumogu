import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './libs/rem.js';

import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false


//事件总线
Vue.prototype.$bus = new Vue()

// 懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/swiper/1.jpg')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

