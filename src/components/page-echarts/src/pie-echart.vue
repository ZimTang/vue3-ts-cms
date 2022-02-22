<template>
  <div>
    <base-chart :options="options"></base-chart>
  </div>
</template>

<script setup lang="ts">
import { BaseChart } from '@/base-ui/echart'
import { computed, defineProps } from 'vue'
const props = defineProps({
  pieData: Object
})
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
