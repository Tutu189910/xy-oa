const root = {
  index: {
    title: '首页',
    id: '1',
    icon: 'el-icon-s-home',
    levelMenu: '1',
    children: {
      technical: {
        title: '消息通知',
        path: '/main/index/technical',
        id: '1.1',
        levelMenu: '2',
      },
      data: {
        title: '数据分析',
        path: '/main/index/data',
        id: '1.2',
        levelMenu: '2',
      }
    }
  },
  orderForm: {
    title: '订单列表',
    path: '/main/orderForm',
    id: '2',
    icon: 'el-icon-s-order',
    levelMenu: '1',
  },
  vipForm: {
    title: '会员管理',
    id: '3',
    icon: 'el-icon-s-ticket',
    levelMenu: '1',
    children: {
      info: {
        title: '会员信息',
        path: '/main/vipForm/info',
        id: '3.1',
        levelMenu: '2',
      },
      rights: {
        title: '会员权益',
        path: '/main/vipForm/rights',
        id: '3.2',
        levelMenu: '2',
      }
    }
  },
  account: {
    title: '账号管理',
    path: '/main/account',
    id: '4',
    icon: 'el-icon-s-custom',
    levelMenu: '1',
  },
  inform: {
    title: '发布通知',
    id: '5',
    icon: 'el-icon-message-solid',
    levelMenu: '1',
    children: {
      info: {
        title: '通知管理',
        path: '/main/inform/allinform',
        id: '5.1',
        levelMenu: '2',
      },
      rights: {
        title: '发布通知',
        path: '/main/inform/publish',
        id: '5.2',
        levelMenu: '2',
      }
    },
  },
  setting: {
    title: '账号设置',
    path: '/main/setting',
    id: '6',
    icon: 'el-icon-s-tools',
    levelMenu: '1',
  }
}
const storeManager = {
  index: {
    title: '首页',
    id: '1',
    icon: 'el-icon-s-home',
    levelMenu: '1',
    children: {
      technical: {
        title: '技术总结',
        path: '/main/index/technical',
        id: '1.1',
        levelMenu: '2',
      },
      data: {
        title: '数据分析',
        path: '/main/index/data',
        id: '1.2',
        levelMenu: '2',
      }
    }
  },
  orderForm: {
    title: '订单列表',
    path: '/main/orderForm',
    id: '2',
    icon: 'el-icon-s-order',
    levelMenu: '1',
  },
  vipForm: {
    title: '会员管理',
    path: '/main/vipForm',
    id: '3',
    icon: 'el-icon-s-ticket',
    levelMenu: '1',
  },
  account: {
    title: '账号管理',
    path: '/main/account',
    id: '4',
    icon: 'el-icon-s-custom',
    levelMenu: '1',
  },
  setting: {
    title: '账号设置',
    path: '/main/setting',
    id: '5',
    icon: 'el-icon-s-tools',
    levelMenu: '1',
  }
}
const employee = {
  index: {
    title: '首页',
    id: '1',
    icon: 'el-icon-s-home',
    levelMenu: '1',
    children: {
      technical: {
        title: '技术总结',
        path: '/main/index/technical',
        id: '1.1',
        levelMenu: '2',
      },
      data: {
        title: '数据分析',
        path: '/main/index/data',
        id: '1.2',
        levelMenu: '2',
      }
    }
  },
  orderForm: {
    title: '订单列表',
    path: '/main/orderForm',
    id: '2',
    icon: 'el-icon-s-order',
    levelMenu: '1',
  },
  vipForm: {
    title: '会员管理',
    path: '/main/vipForm',
    id: '3',
    icon: 'el-icon-s-ticket',
    levelMenu: '1',
  },
  setting: {
    title: '账号设置',
    path: '/main/setting',
    id: '5',
    icon: 'el-icon-s-tools',
    levelMenu: '1',
  }
}

export function getMenu(level) {
  switch (level) {
    case '0':
      return root;
    case '1':
      return storeManager;
    case '2':
      return employee;
  }
}
