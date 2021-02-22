import '@babel/polyfill'
import 'intersection-observer'
import App from './App.vue'
import Vue from 'vue'
import router from './router';
import { BootstrapVue} from 'bootstrap-vue'
import VueSlickCarousel from 'vue-slick-carousel'
Vue.component('VueSlickCarousel', VueSlickCarousel);
Vue.use(BootstrapVue)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
