import twRequest from '@/request'
import { IDataType } from '@/request/type'

export function getSearchList(url: string, queryInfo: any) {
  return twRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return twRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return twRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return twRequest.patch<IDataType>({
    url,
    data: editData
  })
}
