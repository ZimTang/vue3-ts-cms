import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { TWInterceptors, TWRequestConfig } from './type'

class TWRequest {
  instance: AxiosInstance
  interceptors?: TWInterceptors
  constructor(config: TWRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 1.初始化创建实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    // 2.添加默认拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log('默认请求拦截')
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('默认响应拦截')
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )
  }

  request(config: TWRequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      // 如果在请求的时候使用了独立的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors?.requestInterceptors(config)
      }
      this.instance.request(config).then((res) => {
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors(res)
        }
        resolve(res)
      })
    })
  }
}

export default TWRequest
