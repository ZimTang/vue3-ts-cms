import { IForm } from '@/base-ui/form'

const modalConfig: IForm = {
  formItems: [
    {
      type: 'input',
      placeholder: '请输入角色名',
      label: '角色名',
      field: 'name'
    },
    {
      type: 'input',
      placeholder: '请输入角色介绍',
      label: '角色介绍',
      field: 'intro'
    }
  ],
  colLayout: {
    span: 24
  },
  labelWidth: '100px',
  itemStyle: {}
}

export { modalConfig }
