export default {
  propList: [
    {
      field: 'user_name',
      type: 'input',
      label: '客户姓名:',
      span: { span: 18 }
    },
    {
      field: 'user_phone',
      type: 'input',
      label: '手机号:',
      span: { span: 18 }
    },
    {
      field: 'clothes_name',
      type: 'input',
      label: '衣服名:',
      span: { span: 18 }
    },
    {
      field: 'clothes_type',
      type: 'select',
      label: '洗衣类型:',
      value: {
        '标准洗': '1',
        '干洗': '2',
        '熨烫': '3',
        '皮草保养': '4',
        '奢侈品保养': '5',
        '鞋类服务': '6',
      },
      span: { span: 12 }
    }, {
      field: 'clothes_color',
      type: 'input',
      label: '颜色:',
      span: { span: 12 }
    },
    {
      field: 'ordercol_price',
      type: 'input',
      label: '金额:',
      isNum: true,
      min: 0,
      max: 99999,
      endText: '元',
      span: { sm: 24, md: 14, lg: 14, xl: 14 }
    },
    {
      field: 'clothes_status',
      type: 'swicth',
      label: '订单状态:',
      value: { '未完成': 0, '已取衣': 1, },
      span: { sm: 24, md: 12, lg: 4, xl: 4 }
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
  colLayout: { span: 24 }
}
