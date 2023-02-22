export default {
  tabelStyle: {
    fit: true,
    stripe: true
  },
  isIndex: true,
  propList: [{
    prop: 'vip_type',
    title: '会员类型',
    width: 100,
    slotName: 'type'
  },
  {
    prop: 'vip_name',
    title: '会员名',
    width: 100
  },
  {
    prop: 'vip_phone',
    title: '电话',
    width: 120
  },
  {
    prop: 'rsg_date',
    title: '注册时间',
    width: 120,
    slotName: 'rsg_date'
  },
  {
    prop: 'balance',
    title: '卡内余额',
    width: 120,
    slotName: 'balance'
  }]
}
