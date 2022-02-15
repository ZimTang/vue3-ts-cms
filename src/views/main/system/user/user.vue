<template>
  <div>
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      page-name="users"
      title="用户列表"
      ref="pageContentRef"
      @handleCreate="handleCreate"
      @handleEdit="handleEdit"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      pageName="users"
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentConfig } from '@/views/main/system/user/config/content.config'
import { modalConfig } from './config/modal.config'
import { pageSearch } from '@/components/page-search'
import { pageContent } from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'
import { pageModal } from '@/components/page-modal'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'
export default defineComponent({
  components: {
    pageSearch,
    pageContent,
    pageModal
  },
  setup() {
    const store = useStore()
    // 将modalConfig变成响应式的
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === 'departmentId'
      })
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = modalConfig.formItems.find((item) => {
        return item.field === 'roleId'
      })
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })
    // 处理密码的逻辑
    const createCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === 'password'
      })
      passwordItem!.isHidden = false
    }

    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === 'password'
      })
      passwordItem!.isHidden = true
    }
    // 动态添加部门和角色列表
    const { pageContentRef, handleResetBtnClick, handleQueryBtnClick } =
      usePageSearch()

    // 调用hook获取公共变量和函数
    const { pageModalRef, defaultInfo, handleEdit, handleCreate } =
      usePageModal(createCallback, editCallback)

    return {
      searchFormConfig,
      contentConfig,
      modalConfigRef,
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick,
      handleEdit,
      handleCreate,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less">
.table {
  margin-top: 20px;
}
</style>
