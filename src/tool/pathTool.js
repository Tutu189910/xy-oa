let itemId = ''
let itemTitle = ''
export function isPath(useMenu, path) {
  for (let key in useMenu) {
    if (useMenu[key].children) {
      isPath(useMenu[key].children, path)
    }
    if (path.includes(useMenu[key].path)) {
      itemId = useMenu[key].id
      itemTitle = useMenu[key].title
    }
  }
  return { itemId, itemTitle }
}
