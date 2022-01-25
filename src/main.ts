import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import twRequest from './request'

const app = createApp(App)

twRequest
  .request({
    url: 'get',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })

app.use(store)
app.use(router)
app.mount('#app')
