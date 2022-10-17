export default {
  title: '订单列表',
  propList: [
    {
      field: 'name',
      type: 'input',
      label: '客户姓名:',
      span: { sm: 24, md: 12, lg: 4, xl: 4 }
    },
    {
      field: 'phone',
      type: 'input',
      label: '手机号:',
      span: { sm: 24, md: 12, lg: 4, xl: 4 }
    },
    {
      field: 'getDate',
      type: 'date',
      label: '收衣日期:',
      span: { sm: 24, md: 12, lg: 8, xl: 6 }
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
  ]
}
