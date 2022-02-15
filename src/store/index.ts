import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'
import { getSearchList } from '@/request/main/system/system'

const store = createStore<IRootState>({
  state: {
    name: '123',
    age: 123,
    entireDepartment: [],
    entireRole: []
  },
  mutations: {
    changeEntireDepartment(state, payload) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload) {
      state.entireRole = payload
    }
  },
  actions: {
    async getDepartmentList({ commit }) {
      const {
        data: { list: departmentList }
      } = await getSearchList('/department/list', {
        offset: 0,
        size: 1000
      })

      const {
        data: { list: roleList }
      } = await getSearchList('/role/list', {
        offset: 0,
        size: 1000
      })

      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: { login, system }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getDepartmentList')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
