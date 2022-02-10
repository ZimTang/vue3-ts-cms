<template>
  <div>
    <tw-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <el-button type="primary">重置</el-button>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </template>
    </tw-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import { TwForm } from '@/base-ui/form'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const formData = ref({
      id: '',
      username: '',
      password: '',
      sports: '',
      date: ''
    })

    const handleSearch = () => {
      store.dispatch('system/getListAction', {
        url: '/users/list',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
    return { searchFormConfig, formData, handleSearch }
  },
  components: {
    TwForm
  }
})
</script>

<style scoped></style>
