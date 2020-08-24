import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表(global.css)
import './assets/css/global.css'
// 导入字体图片
import './assets/fonts/iconfont.css'

// axios
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
