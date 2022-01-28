import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from '@/store/index'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

setupStore()
