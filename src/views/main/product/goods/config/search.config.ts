import { IForm } from '@/base-ui/form'

const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'input',
      placeholder: '请输入商品名称',
      label: '商品名称',
      field: 'name'
    },
    {
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      },
      field: 'createTime'
    }
  ],
  colLayout: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 6
  },
  labelWidth: '100px',
  itemStyle: {
    padding: '20px 40px 0px'
  }
}

export { searchFormConfig }
