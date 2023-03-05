export default {
  propList: [
    {
      field: 'nickname',
      type: 'input',
      label: '姓名:',
      span: { span: 18 }
    },
    {
      field: 'phone',
      type: 'input',
      label: '电话:',
      span: { span: 18 }
    },
    {
      field: 'username',
      type: 'input',
      label: '账号名:',
      span: { span: 18 }
    },
    {
      field: 'password',
      type: 'password',
      label: '密码:',
      placeholder: '默认密码为:xy123456',
      span: { span: 18 }
    },
    {
      field: 'level',
      type: 'select',
      label: '权限等级:',
      span: { sm: 24, md: 12, lg: 12, xl: 12 },
      value: { '店长': 1, '员工': 2 }

    }
  ],
  colLayout: { span: 24 }
}
