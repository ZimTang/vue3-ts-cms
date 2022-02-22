<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <tw-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </tw-card>
      </el-col>
      <el-col :span="10">
        <tw-card title="不同城市商品销量"></tw-card>
      </el-col>
      <el-col :span="7">
        <tw-card title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount"></rose-echart>
        </tw-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <tw-card title="分类商品的销量"></tw-card>
      </el-col>
      <el-col :span="12">
        <tw-card title="分类商品的收藏"></tw-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { TwCard } from '@/base-ui/card'
import { PieEchart } from '@/components/page-echarts/index'
import { RoseEchart } from '@/components/page-echarts/index'
export default defineComponent({
  components: {
    TwCard,
    PieEchart,
    RoseEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    return {
      categoryGoodsCount
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
