<template>
  <div>
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentConfig="contentConfig"
      page-name="role"
      title="角色列表"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from '@/views/main/system/role/config/search.config'
import { contentConfig } from '@/views/main/system/role/config/content.config'

export default defineComponent({
  components: {},

  setup() {
    return {
      searchFormConfig,
      contentConfig
    }
  }
})
</script>

<style scoped></style>
