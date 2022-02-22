import twRequest from '@/request'
import { IDataType } from '@/request/type'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  categoryAddressSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return twRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return twRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return twRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getCategoryAddressSale() {
  return twRequest.get<IDataType>({
    url: DashboardAPI.categoryAddressSale
  })
}
