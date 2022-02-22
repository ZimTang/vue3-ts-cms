<template>
  <div class="base-chart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps, withDefaults, watchEffect } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
import useEchart from '@/hooks/use-echart'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
