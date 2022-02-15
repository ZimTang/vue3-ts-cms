import { ElLoading, ElMessage } from 'element-plus'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { TWInterceptors, TWRequestConfig } from './type'

const DEFAULT_LOADING = true

class TWRequest {
  instance: AxiosInstance
  interceptors?: TWInterceptors
  showLoading: boolean
  loading?: any
  constructor(config: TWRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

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
        if (this.showLoading) {
          // 加入loading
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res === undefined) {
          this.loading?.close()
          ElMessage({
            message: '请求失败',
            type: 'error'
          })
          return undefined
        }
        if (res.data.returnCode === '-1001') {
          // 将loading移除
          this.loading?.close()
        } else {
          this.loading?.close()
          return res.data
        }
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404错误')
        }
        this.loading?.close()
      }
    )
  }

  request<T>(config: TWRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果在请求的时候使用了独立的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors?.requestInterceptors(config)
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
          // 将showLoading设置为true 这样不会影响下一次请求
          this.showLoading = DEFAULT_LOADING
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: TWRequestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'GET' })
  }

  post<T>(config: TWRequestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'POST' })
  }

  delete<T>(config: TWRequestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'DELETE' })
  }

  put<T>(config: TWRequestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'PUT' })
  }

  patch<T>(config: TWRequestConfig<T>): Promise<T> {
    return this.instance.request({ ...config, method: 'PATCH' })
  }
}

export default TWRequest
