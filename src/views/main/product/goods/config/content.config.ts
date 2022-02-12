export const contentConfig = {
  propList: [
    { prop: 'name', label: '商品名字', minWidth: '100' },
    { prop: 'newPrice', label: '价格', minWidth: '100' },
    { prop: 'desc', label: '商品描述', minWidth: '100' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'img' },
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
  showIndexColumn: true
}
