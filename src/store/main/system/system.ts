import { getSearchList } from '@/request/main/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

const SystemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    async getListAction({ commit }, payload: any) {
      const listResult = await getSearchList(payload.url, payload.queryInfo)
      const { list: userList, totalCount: userCount } = listResult.data
      commit('changeUserList', userList)
      commit('changeUserCount', userCount)
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  }
}

export default SystemModule
