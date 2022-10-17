// @/views/main/cpns/content/index/technical.vue
let userMenus = []
// let useStore = store
// {
//   path: 'index/technical',
//   component: () => import('@/views/main/cpns/content/index/technical.vue')
// },
export function getRouterChilren(menu) {
  for (let key in menu) {
    if (menu[key].children) {
      getRouterChilren(menu[key].children)
    }
    if (menu[key].levelMenu === '1' && !menu[key].children) {
      userMenus.push({
        path: `${menu[key].path}`.replace('//mian//', ''),
        component: `@/views/main/cpns/content/${key.title}/${key.title}.vue`
      })
    }
    if (menu[key].levelMenu === '2') {
      userMenus.push({
        path: `${menu[key].path}`.replace('//mian//', ''),
        component: `@/views/main/cpns/content/index/${key.title}.vue`
      })
    }
  }
  return [...new Set(userMenus)]
}
