export default {
  title: '账号管理',
  propList: [
    {
      field: 'nickname',
      type: 'input',
      label: '姓名:',
      span: { sm: 24, md: 12, lg: 4, xl: 3 }
    },
    {
      field: 'username',
      type: 'input',
      label: '账号名:',
      span: { sm: 24, md: 12, lg: 4, xl: 5 }
    },
    {
      field: 'phone',
      type: 'input',
      label: '电话:',
      span: { sm: 24, md: 14, lg: 5, xl: 6 }
    }
    // {
    //   field: 'gender',
    //   type: 'select',
    //   label: '性别:',
    //   span: { sm: 24, md: 12, lg: 8, xl: 6 },
    //   value: {
    //     woman: {
    //       label: '女',
    //       value: 0
    //     },
    //     man: {
    //       label: '男',
    //       value: 1
    //     }
    //   }
    // }
  ],
  btns: [
    { title: '查询', type: 'primary', size: 'small', icon: 'el-icon-search' },
    { title: '新增', type: 'success', size: 'small', icon: 'el-icon-plus' }
  ],
  labelWidth: '60px',
  colLayout: { span: 4 }
}
