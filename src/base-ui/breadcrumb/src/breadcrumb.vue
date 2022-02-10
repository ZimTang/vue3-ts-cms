<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { pathMapToBreadcrumb } from '@/util/map-menus'
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const breadcrumbs = computed(() => {
      const store = useStore()
      const route = useRoute()
      const currentPath = route.path
      return pathMapToBreadcrumb(store.state.login.userMenus, currentPath)
    })
    return {
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.el-breadcrumb {
  height: 50px;
  line-height: 50px;
}
</style>
