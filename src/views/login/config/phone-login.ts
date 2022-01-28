const rules = {
  phone: [
    { required: true, message: '手机号不能为空' },
    { type: 'number', message: '手机号为数字' }
  ],
  identifyCode: [
    {
      required: true,
      message: '验证码不能为空'
    }
  ]
}

export { rules }
