<template>
  <tw-table
    v-bind="contentConfig"
    :data-list="listData"
    @selectionChange="selectionChange"
    class="table"
    v-model:page="pageInfo"
    :data-count="listCount"
  >
    <template #header-title>
      <span>{{ title }}</span>
    </template>
    <template #header-handler>
      <el-button type="primary" v-if="isCreate">新建用户</el-button>
    </template>
    <template #status="slotProps">
      <el-button
        size="small"
        :type="slotProps.row.enable ? 'success' : 'danger'"
      >
        {{ slotProps.row.enable ? '启用' : '禁用' }}
      </el-button>
    </template>
    <template #createAt="slotProps">
      {{ $filters.formatTime(slotProps.row.createAt) }}
    </template>
    <template #updateAt="slotProps">
      {{ $filters.formatTime(slotProps.row.updateAt) }}
    </template>
    <template #handler>
      <div>
        <el-button type="primary" size="small" v-if="isUpdate">编辑</el-button>
        <el-button type="danger" size="small" v-if="isDelete">删除</el-button>
      </div>
    </template>
    <!--    在pageContent中 动态插入剩余插槽-->
    <template
      v-for="item in otherPropSlots"
      :key="item.prop"
      #[item.slotName]="slotProps"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName" :row="slotProps.row"></slot>
      </template>
    </template>
  </tw-table>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { TwTable } from '@/base-ui/table'
import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  name: 'page-content',
  components: {
    TwTable
  },
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    console.log(store.state.login.permissions)
    console.log(props.pageName)
    //获取操作的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')
    const pageInfo = ref({
      currentPage: 1,
      currentPageSize: 10
    })
    //发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset:
            (pageInfo.value.currentPage - 1) * pageInfo.value.currentPageSize,
          size: pageInfo.value.currentPageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    watch(pageInfo, () => getPageData())

    //从vuex中获取数据
    const listData = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )

    const listCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    const selectionChange = (value: any) => {
      console.log(value)
    }

    // 获取其他动态的插槽名称
    const otherPropSlots = props.contentConfig.propList?.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })
    return {
      pageInfo,
      getPageData,
      listData,
      listCount,
      selectionChange,
      otherPropSlots,
      isCreate,
      isDelete,
      isUpdate,
      isQuery
    }
  }
})
</script>

<style scoped></style>
