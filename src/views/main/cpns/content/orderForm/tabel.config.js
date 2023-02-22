export default {
  tabelStyle: {
    fit: true,
    stripe: true
  },
  propList: [{
    prop: 'clothes_id',
    title: '挂点',
    width: 50,
    isTab: true,
    slotName: 'id'
  },
  {
    prop: 'user_name',
    title: '客户姓名',
    width: 70
  },
  {
    prop: 'user_phone',
    title: '电话',
    width: 80
  },
  {
    prop: 'clothes_status',
    title: '衣服状态',
    width: 80,
    slotName: 'status'
  },
  {
    prop: 'clothes_name',
    title: '衣服名',
    width: 120
  },
  {
    prop: 'clothes_type',
    title: '洗衣类型',
    width: 80,
    slotName: 'type'
  },
  {
    prop: ' clothes_color',
    title: '颜色',
    width: 80,
    slotName: 'colour'
  },
  {
    prop: 'clothes_getTime',
    title: '收衣时间',
    width: 140,
    iClass: 'el-icon-time',
    slotName: 'getTime'
  }
    ,
  {
    prop: 'ordercol_price',
    title: '金额',
    width: 80,
    slotName: 'price'
  },]
}
