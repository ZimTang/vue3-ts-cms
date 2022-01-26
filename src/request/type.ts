import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface TWRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: TWInterceptors<T>
  showLoading?: boolean
}

export interface TWInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: AxiosRequestConfig) => void
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: AxiosResponse) => void
}
