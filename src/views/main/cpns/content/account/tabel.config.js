export default {
  tabelStyle: {
    fit: true,
    stripe: true
  },
  propList: [
    {
      prop: 'nickname',
      title: '姓名',
      width: 100
    },
    {
      prop: 'level',
      title: '权限等级',
      width: 100,
      slotName: 'level'
    },
    {
      prop: 'phone',
      title: '电话',
      width: 120,
    },
    {
      prop: 'username',
      title: '账号名',
      width: 120
    },
    {
      prop: 'status',
      title: '状态',
      width: 120,
      slotName: 'status'
    },
    {
      prop: 'lastLogin',
      title: '最近一次登录',
      width: 120,
      slotName: 'lastLogin'
    }]
}
