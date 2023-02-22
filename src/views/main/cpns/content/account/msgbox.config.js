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
      field: 'level',
      type: 'select',
      label: '权限等级:',
      span: { sm: 24, md: 12, lg: 12, xl: 12 },
      value: {
        admin: {
          label: '店长',
          value: 1
        },
        user: {
          label: '员工',
          value: 2
        }
      }
    }, {
      field: 'status',
      type: 'swicth',
      label: '账号状态:',
      value: { 0: '使用中', 1: '已禁用' },
      span: { sm: 24, md: 12, lg: 4, xl: 4 }
    }
  ],
  colLayout: { span: 24 }
}
