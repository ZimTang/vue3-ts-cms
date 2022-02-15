<template>
  <div>
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentConfig="contentConfig"
      page-name="role"
      title="角色列表"
      @handleEdit="handleEdit"
      @handleCreate="handleCreate"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from '@/views/main/system/role/config/search.config'
import { contentConfig } from '@/views/main/system/role/config/content.config'
import { modalConfig } from '@/views/main/system/role/config/modal.config'
import { pageModal } from '@/components/page-modal'
import { pageSearch } from '@/components/page-search'
import { pageContent } from '@/components/page-content'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  components: {
    pageSearch,
    pageContent,
    pageModal
  },

  setup() {
    const { pageModalRef, defaultInfo, handleEdit, handleCreate } =
      usePageModal()
    return {
      searchFormConfig,
      contentConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleEdit,
      handleCreate
    }
  }
})
</script>

<style scoped></style>
