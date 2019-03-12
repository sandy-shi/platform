import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
// 引入elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Axios from 'axios'

// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

// 配置axios
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
})
