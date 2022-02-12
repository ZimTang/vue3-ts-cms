export const contentConfig = {
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '100' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '100',
      slotName: 'permission'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '120',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  showIndexColumn: false,
  showSelection: false,
  showPagination: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: { children: 'children' }
  }
}
