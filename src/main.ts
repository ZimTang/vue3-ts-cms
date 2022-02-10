import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from '@/store/index'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App)

app.use(store)
// 先注册路由
setupStore()
// 再匹配path，使用路由守卫
app.use(router)
app.mount('#app')

for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name])
}
