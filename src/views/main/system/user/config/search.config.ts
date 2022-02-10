import { IForm } from '@/base-ui/form'

const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'input',
      placeholder: '请输入id',
      label: 'id',
      field: 'id'
    },
    {
      type: 'input',
      placeholder: '请输入用户名',
      label: '用户名',
      field: 'username'
    },
    {
      type: 'password',
      placeholder: '请输入密码',
      label: '密码',
      field: 'password'
    },
    {
      type: 'select',
      placeholder: '请选择你喜欢的运动',
      label: '喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'soccer' }
      ],
      field: 'sports'
    },
    {
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      },
      field: 'date'
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
