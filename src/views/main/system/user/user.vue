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
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentConfig } from '@/views/main/system/user/config/content.config'
import { pageSearch } from '@/components/page-search'
import { pageContent } from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'
export default defineComponent({
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    const { pageContentRef, handleResetBtnClick, handleQueryBtnClick } =
      usePageSearch()
    return {
      searchFormConfig,
      contentConfig,
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick
    }
  }
})
</script>

<style scoped lang="less">
.table {
  margin-top: 20px;
}
</style>
