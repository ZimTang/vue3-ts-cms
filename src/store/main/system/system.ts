import { getSearchList } from '@/request/main/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

const SystemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  actions: {
    async getListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      let url = ''
      switch (pageName) {
        case 'users':
          url = '/users/list'
          break
        case 'role':
          url = '/role/list'
          break
        case 'goods':
          url = '/goods/list'
          break
        case 'menu':
          url = '/menu/list'
          break
      }

      const listResult = await getSearchList(url, payload.queryInfo)
      const { list, totalCount } = listResult.data
      commit(
        `change${pageName.charAt(0).toUpperCase() + pageName.slice(1)}List`,
        list
      )
      commit(
        `change${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Count`,
        totalCount
      )
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        const list = (state as any)[`${pageName}List`]
        return list
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        const count = (state as any)[`${pageName}Count`]
        return count
      }
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  }
}

export default SystemModule
