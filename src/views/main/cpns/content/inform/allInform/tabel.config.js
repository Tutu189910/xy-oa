export default {
  tabelStyle: {
    fit: true,
    stripe: true
  },
  isIndex: true,
  propList: [
    {
      prop: 'title',
      title: '标题',
      width: 100
    },
    {
      prop: 'author',
      title: '创建人',
      width: 90
    },
    {
      prop: 'status',
      title: '状态',
      width: 90,
      slotName: 'status'
    },
    {
      prop: 'date_created',
      title: '发布日期',
      width: 120,
      slotName: 'date_created'
    },
    {
      prop: 'info',
      title: '内容',
      width: 200,
      slotName: 'info'
    }]
}
