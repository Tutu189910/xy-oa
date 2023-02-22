import yAxios from "@/server"

const apiURL = {
  getInfo: '/vip/info',
  update: '/vip/update',
  add: '/vip/add',
  query: '/vip/query',
  delete: '/vip/delete',
}

function queryVipUser(data) {
  return yAxios.post({
    url: apiURL.query,
    data: data,
  })
}

function getVipUserInfo() {
  return yAxios.get({
    url: apiURL.getInfo,
    isLoading: false
  })
}
function deleteVipUser(data) {
  return yAxios.post({
    url: apiURL.delete,
    data: data,
    isLoading: false
  })
}
function updateVipUser(data) {
  return yAxios.post({
    url: apiURL.update,
    data: data,
  })
}
function addVipUser(data) {
  return yAxios.post({
    url: apiURL.add,
    data: data,
  })
}

export { queryVipUser, getVipUserInfo, deleteVipUser, updateVipUser, addVipUser }
