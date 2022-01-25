import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface TWRequestConfig extends AxiosRequestConfig {
  interceptors?: TWInterceptors
}

export interface TWInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: AxiosRequestConfig) => void
  responseInterceptors?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: AxiosResponse) => void
}
