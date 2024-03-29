export default {
  propList: [
    {
      field: 'vip_name',
      type: 'input',
      label: '会员名:',
      span: { span: 18 }
    },
    {
      field: 'vip_phone',
      type: 'input',
      label: '电话:',
      span: { span: 18 }
    },
    {
      field: 'vip_type',
      type: 'select',
      label: '会员类型:',
      span: { sm: 24, md: 16, lg: 16, xl: 16 },
      value: { '黄金会员': '3', '白金会员': '2', "钻石会员": '1' }

    },
    {
      field: 'vip_gender',
      type: 'select',
      label: '性别:',
      span: { sm: 24, md: 12, lg: 12, xl: 10 },
      value: { '女': 0, '男': 1 }
    },
    {
      field: 'balance',
      type: 'input',
      label: '余额:',
      isNum: true,
      min: 0,
      max: 99999,
      endText: '元',
      span: { span: 14 }
    },
  ],
  colLayout: { span: 24 }
}
