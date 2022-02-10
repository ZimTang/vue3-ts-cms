<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main>
          <div class="page">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      console.log(isFold)
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldChange
    }
  },
  components: {
    NavMenu,
    NavHeader
  }
})
</script>

<style scoped lang="less">
.common-layout {
  height: 100%;
  .el-header {
    background-color: #fff;
  }

  .el-aside {
    background-color: #000f27;
    color: var(--el-text-color-primary);
    height: 100vh;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    .page {
      background-color: #fff;
    }
  }
}
</style>
