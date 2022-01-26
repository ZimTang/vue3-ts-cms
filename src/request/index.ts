import { BASE_URL, TIME_OUT } from './config'
import TWRequest from './request'

const twRequest = new TWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors(config) {
      console.log('请求拦截')
      return config
    },
    requestInterceptorsCatch(err) {
      console.log(err)
    },
    responseInterceptors(config) {
      console.log('响应拦截')
      return config
    },
    responseInterceptorsCatch(err) {
      console.log(err)
    }
  }
})

export default twRequest
