let itemId = ''
let itemTitle = ''
export function isPath(useMenu, path) {
  for (let key in useMenu) {
    if (useMenu[key].children) {
      itemTitle = useMenu[key].title
      isPath(useMenu[key].children, path)
    }
    if (useMenu[key].path === path) {
      itemId = useMenu[key].id
      itemTitle = useMenu[key].levelMenu === '2' ? `${itemTitle}/${useMenu[key].title}` : useMenu[key].title
    }
  }
  return { itemId, itemTitle }
}
