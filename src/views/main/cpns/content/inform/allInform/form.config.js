export default {
  title: '通知管理',
  propList: [
    {
      field: 'title',
      type: 'input',
      label: '标题:',
      span: { sm: 24, md: 12, lg: 4, xl: 3 }
    },
    {
      field: 'author',
      type: 'input',
      label: '创建人:',
      span: { sm: 24, md: 12, lg: 5, xl: 4 }
    },
    {
      field: 'date_created',
      type: 'daterange',
      label: '发布日期:',
      span: { sm: 24, md: 12, lg: 9, xl: 9 }
    },
  ],
  btns: [
    { title: '查询', type: 'primary', size: 'small', icon: 'el-icon-search' },
  ],
  btnLayout: { sm: 24, md: 24, lg: 2, xl: 2 },
  labelWidth: '80px',
  colLayout: { span: 2 }
}
