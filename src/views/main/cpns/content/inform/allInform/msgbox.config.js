export default {
  propList: [
    {
      field: 'title',
      type: 'input',
      label: '标题:',
      span: { span: 14 }
    },
    {
      field: 'status',
      type: 'swicth',
      label: '通知状态:',
      value: { '未完成': 0, '已取衣': 1, },
      // span: { sm: 24, md: 12, lg: 4, xl: 4 }
      span: { span: 8 }
    },
    {
      field: 'info',
      type: 'textarea',
      label: '内容:',
      span: { span: 24 },
      rows: 8
    }
  ],
  colLayout: { span: 24 }
}
