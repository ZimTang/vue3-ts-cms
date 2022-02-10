type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  placeholder?: any
  rule?: any[]
  // 针对与select
  options?: any
  // 其他特殊属性
  otherOptions?: any
  field: string
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}
