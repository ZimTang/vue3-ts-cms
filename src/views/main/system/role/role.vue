<template>
  <div>
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentConfig="contentConfig"
      page-name="role"
      title="角色列表"
      actionTitle="新建角色"
      @handleEdit="handleEdit"
      @handleCreate="handleCreate"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
      :otherInfo="otherInfo"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        @check="handleCheckChange"
        :props="{ children: 'children', label: 'name' }"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import { searchFormConfig } from '@/views/main/system/role/config/search.config'
import { contentConfig } from '@/views/main/system/role/config/content.config'
import { modalConfig } from '@/views/main/system/role/config/modal.config'
import { pageModal } from '@/components/page-modal'
import { pageSearch } from '@/components/page-search'
import { pageContent } from '@/components/page-content'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/util/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  components: {
    pageSearch,
    pageContent,
    pageModal
  },

  setup() {
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const { pageModalRef, defaultInfo, handleEdit, handleCreate } =
      usePageModal(undefined, editCallback)

    const otherInfo = ref<any>({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      searchFormConfig,
      contentConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleEdit,
      handleCreate,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped></style>
