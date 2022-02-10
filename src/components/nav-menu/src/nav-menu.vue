<template>
  <div class="nav-menu">
    <header>vue3+ts</header>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical-demo"
      background-color="#000f27"
      active-text-color="#ffd04b"
      text-color="#fff"
      :collapse="collapse"
      unique-opened
      :collapse-transition="true"
    >
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleClick(subitem)"
              >
                <el-icon><location /></el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type == 2">
          <el-menu-item :index="item.id + ''">
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { pathMapToMenus } from '@/util/map-menus'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const userMenu = computed(() => {
      return store.state.login.userMenus
    })
    const currentPath = route.path
    const menu = pathMapToMenus(userMenu.value, currentPath)

    const defaultValue = ref<string>(menu.id + '')
    const handleClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      store,
      userMenu,
      defaultValue,
      handleClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  header {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #fff;
  }
}
</style>
