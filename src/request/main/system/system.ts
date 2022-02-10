import twRequest from '@/request'
import { IDataType } from '@/request/type'

export function getSearchList(url: string, queryInfo: any) {
  return twRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
