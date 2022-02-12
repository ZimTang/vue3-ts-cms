<template>
  <div class="tw-table">
    <div class="header">
      <slot name="header-title" class="header-title"></slot>
      <slot name="header-handler" class="header-handler"></slot>
    </div>
    <el-table
      :data="dataList"
      border
      height="350"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <template v-if="showSelection">
        <el-table-column type="selection" width="55" align="center" />
      </template>
      <template v-if="showIndexColumn">
        <el-table-column type="index" label="序号" align="center" width="80" />
      </template>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="slotProps">
            <slot :name="propItem.slotName" :row="slotProps.row">
              {{ slotProps.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <template v-if="showPagination">
      <el-pagination
        :currentPage="page.currentPage"
        :page-size="page.currentPageSize"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    dataList: {
      required: true
    },
    dataCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    page: {
      default: {
        currentPage: 1,
        currentPageSize: 10
      }
    },
    childrenProps: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value) => {
      emit('selectionChange', value)
    }

    const handleSizeChange = (currentPageSize) => {
      emit('update:page', { ...props.page, currentPageSize })
    }

    const handleCurrentChange = (currentPage) => {
      emit('update:page', { ...props.page, currentPage: currentPage })
    }
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.tw-table {
  padding: 10px;
  .header {
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
