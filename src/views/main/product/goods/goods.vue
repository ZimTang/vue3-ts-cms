<template>
  <div>
    <page-search :search-form-config="searchFormConfig"></page-search>
    <page-content
      :content-config="contentConfig"
      page-name="goods"
      title="商品列表"
    >
      <template #img="slotProps">
        <el-image
          :src="slotProps.row.imgUrl"
          style="width: 60px; height: 60px"
          :preview-src-list="[slotProps.row.imgUrl]"
        >
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pageSearch } from '@/components/page-search'
import { pageContent } from '@/components/page-content'
import { contentConfig } from '@/views/main/product/goods/config/content.config'
import { searchFormConfig } from '@/views/main/product/goods/config/search.config'

export default defineComponent({
  components: {
    pageSearch,
    pageContent
  },

  setup() {
    return {
      contentConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
