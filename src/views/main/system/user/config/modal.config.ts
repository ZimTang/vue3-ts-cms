import { IForm } from '@/base-ui/form'

const modalConfig: IForm = {
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
      type: 'password',
      placeholder: '请输入密码',
      label: '密码',
      field: 'password',
      isHidden: false
    },
    {
      type: 'select',
      placeholder: '请选择部门',
      label: '部门列表',
      options: [],
      field: 'departmentId'
    },
    {
      type: 'select',
      placeholder: '请选择角色',
      label: '角色列表',
      options: [],
      field: 'roleId'
    }
  ],
  colLayout: {
    span: 24
  },
  labelWidth: '100px',
  itemStyle: {}
}

export { modalConfig }
