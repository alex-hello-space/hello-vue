import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// vue App挂载了html#app, 数据由挂载容器内编写模板来单独提供


app.config.errorHandler = (err) => {
    /* 处理错误 */
  console.log('errorHandler', err)
  }