import { IForm } from '@/base-ui/form'

const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'input',
      placeholder: '请输入用户名',
      label: '用户名',
      field: 'name'
    },
    {
      type: 'input',
      placeholder: '请输入真实姓名',
      label: '真实姓名',
      field: 'realname'
    },
    {
      type: 'input',
      placeholder: '请输入电话',
      label: '电话',
      field: 'cellphone'
    },
    {
      type: 'select',
      placeholder: '请选择用户状态',
      label: '用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ],
      field: 'enable'
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
