import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/request/login/login'
import { IAccount } from '@/request/login/types'
import localCache from '@/util/cache'
import router from '@/router'
import { mapMenus, mapMenusToPermission } from '@/util/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: [],
    permissions: []
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登录
      accountLoginRequest(payload)
        .then((loginResult) => {
          console.log(loginResult.data)
          const { id, token } = loginResult.data
          commit('changeToken', token)
          localCache.setCache('token', token)
          // 请求用户信息
          return requestUserInfoById(id)
        })
        .then(async (userInfoResult) => {
          const userInfo = userInfoResult.data
          commit('changeUserInfo', userInfo)
          localCache.setCache('userInfo', userInfo)
          // 用户菜单
          return requestUserMenuByRoleId(userInfo.role.id)
        })
        .then((userMenusResult) => {
          const userMenus = userMenusResult.data
          commit('changeUserMenus', userMenus)
          localCache.setCache('userMenus', userMenus)
          // 跳转到首页
          router.push('/main')
        })
        .catch((err) => {
          console.log(123)
        })
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction')
      console.log(payload)
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }

      const userMenu = localCache.getCache('userMenus')
      if (userMenu) {
        commit('changeUserMenus', userMenu)
      }
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      const routes = mapMenus(userMenus)
      // 将routes添加到main的children中
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //  获取用户按钮权限
      const permissions = mapMenusToPermission(userMenus)
      state.permissions = permissions
    }
  }
}

export default loginModule
