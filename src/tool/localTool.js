function getLocal(key) {
  if (!key) return ''
  return JSON.parse(window.localStorage.getItem(key))
}
function setLocal(key, value) {
  if (!key) return
  window.localStorage.setItem(key, JSON.stringify(value))
}
function removeLocal(key) {
  if (!key) return
  window.localStorage.removeItem(key)
}
function clearLocal() {
  window.localStorage.clear()
}

export { getLocal, setLocal, removeLocal, clearLocal }
