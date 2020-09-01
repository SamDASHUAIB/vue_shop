import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表(global.css)
import './assets/css/global.css'
// 导入字体图片
import './assets/fonts/iconfont.css'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

// axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 挂载拦截器, 添加 Authorization 字段
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false
Vue.prototype.$http = axios
// 将富文本编辑器注册成为全局可用的组件
Vue.use(VueQuillEditor /* { default global options } */)

// 全局的时间处理过滤器
Vue.filter('dataFormat', function (originVal) {
  // 根据给定的时间, 得到一个日期对象
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  // 月份记得+1
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
