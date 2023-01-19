export default {
  title: '订单列表',
  propList: [
    {
      field: 'query_name',
      type: 'input',
      label: '客户姓名:',
      span: { sm: 24, md: 12, lg: 4, xl: 4 }
    },
    {
      field: 'query_phone',
      type: 'input',
      label: '手机号:',
      span: { sm: 24, md: 12, lg: 5, xl: 5 }
    },

    {
      field: 'state',
      type: 'select',
      label: '订单状态:',
      value: { 0: '已取衣', 1: '未完成' },
      span: { sm: 24, md: 12, lg: 4, xl: 4 }
    }, {
      field: 'getDate',
      type: 'daterange',
      label: '收衣日期:',
      span: { sm: 24, md: 12, lg: 9, xl: 9 }
    },
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
  colLayout: { span: 8 }
}
