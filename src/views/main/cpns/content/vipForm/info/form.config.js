export default {
  title: '会员管理',
  propList: [
    {
      field: 'vip_name',
      type: 'input',
      label: '会员名:',
      span: { sm: 24, md: 12, lg: 4, xl: 3 }
    },
    {
      field: 'vip_phone',
      type: 'input',
      label: '手机号:',
      span: { sm: 24, md: 12, lg: 5, xl: 4 }
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
    { title: '会员查询', type: 'primary', size: 'small', icon: 'el-icon-search' },
    { title: '新增会员', type: 'success', size: 'small', icon: 'el-icon-plus' }
  ],
  labelWidth: '60px',
  colLayout: { span: 2 }
}
