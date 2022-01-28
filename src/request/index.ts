import { BASE_URL, TIME_OUT } from './config'
import TWRequest from './request'
import localCache from '@/util/cache'

const twRequest = new TWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors(config) {
      const token = localCache.getCache('token')
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorsCatch(err) {
      console.log(err)
    },
    responseInterceptors(config) {
      return config
    },
    responseInterceptorsCatch(err) {
      console.log(err)
    }
  }
})

export default twRequest
