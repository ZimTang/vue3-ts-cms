<template>
  <tw-form v-bind="searchFormConfig" v-model="formData">
    <template #header>
      <h2>高级检索</h2>
    </template>
    <template #footer>
      <el-button type="primary" @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleQuery">搜索</el-button>
    </template>
  </tw-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TwForm } from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    TwForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    const formOriginData: any = {}

    //优化一：动态决定formData
    for (const item of props.searchFormConfig?.formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    //优化二：当用户点击重置的时候
    const handleReset = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }
    //优化三：当用户点击搜索
    const handleQuery = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleReset,
      handleQuery
    }
  }
})
</script>

<style scoped></style>
