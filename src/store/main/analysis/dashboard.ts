import { Module } from 'vuex'
import { IDashboardState } from './types'
import { IRootState } from '@/store/types'
import {
  getCategoryAddressSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/request/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  },
  mutations: {
    changeCategoryGoodsCount(state, payload) {
      state.categoryGoodsCount = payload
    },
    changeCategoryGoodsSale(state, payload) {
      state.categoryGoodsSale = payload
    },
    changeCategoryGoodsFavor(state, payload) {
      state.categoryGoodsFavor = payload
    },
    changeCategoryAddressSale(state, payload) {
      state.addressGoodsSale = payload
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)
      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)
      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult)
      const categoryAddressSaleResult = await getCategoryAddressSale()
      commit('changeCategoryAddressSale', categoryAddressSaleResult)
    }
  }
}

export default dashboardModule
