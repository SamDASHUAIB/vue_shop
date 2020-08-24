import Vue from 'vue'
import { Button, Input, Form, FormItem, Message } from 'element-ui'

// 按需导入所需配件, 先导入, 后使用
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
// 全局挂载(挂载到 vue 的原型对象上)
Vue.prototype.$message = Message
