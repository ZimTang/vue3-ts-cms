import twRequest from '..'
import { IAccount, ILoginResult, IDataType } from './types'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法： users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return twRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return twRequest.get<IDataType>({
    url: loginAPI.LoginUserInfo + id
  })
}

export function requestUserMenuByRoleId(id: number) {
  return twRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu'
  })
}
