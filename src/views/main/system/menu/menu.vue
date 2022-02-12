<template>
  <page-content
    :content-config="contentConfig"
    page-name="menu"
    title="菜单列表"
  ></page-content>
</template>

<script>
import { defineComponent } from 'vue'
import { pageContent } from '@/components/page-content'
import { contentConfig } from '@/views/main/system/menu/config/content.config'
export default defineComponent({
  name: 'twMenu',
  components: {
    pageContent
  },

  setup() {
    return {
      contentConfig
    }
  }
})
</script>

<style scoped></style>
