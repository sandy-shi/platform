import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
// 引入elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Axios from 'axios'
// require('!style-loader!css-loader!less-loader!./assets/css/color.less')

Vue.use(ElementUI)

Vue.config.productionTip = false

// 配置公共的url
Axios.defaults.baseURL = 'www.jloongking.cn:8888/'
// 配置axios
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
})
