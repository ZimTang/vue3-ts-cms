<template>
  <div class="nav-header">
    <div class="icon">
      <el-icon @click="changeFold"><expand /></el-icon>
    </div>
    <div class="content">
      <div>
        <tw-breadcrumb></tw-breadcrumb>
      </div>
      <div class="info">
        <el-dropdown :hide-on-click="false" class="example-showcase">
          <span class="el-dropdown-link">
            {{ name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store/index'
import { TwBreadcrumb } from '@/base-ui/breadcrumb'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore()
    const isFold = ref(true)
    const changeFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const name = ref<string>(store.state.login.userInfo.name)
    return {
      isFold,
      changeFold,
      name
    }
  },
  components: {
    TwBreadcrumb
  }
})
</script>

<style scoped lang="less">
.nav-header {
  height: 50px;
  display: flex;
  .icon {
    line-height: 55px;
  }
  .content {
    flex: 1;
    margin-left: 5px;
    display: flex;
    justify-content: space-between;

    .info {
      line-height: 50px;
      .example-showcase {
        line-height: 45px;
      }
      .example-showcase .el-dropdown + .el-dropdown {
        margin-left: 15px;
      }
      .example-showcase .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
