import yAxios from "@/server"

const apiURL = {
  getInfo: '/vip/info',
  update: '/vip/update',
  add: '/vip/add',
  query: '/vip/query',
  delete: '/vip/delete',
  getRigths: '/vip/getRigths',
  setRigths: '/vip/setRigths',
  addRigths: '/vip/addRigths'
}

function queryVipUser(data) {
  return yAxios.post({
    url: apiURL.query,
    data: data,
    isLoading: true
  })
}

function getVipUserInfo() {
  return yAxios.get({
    url: apiURL.getInfo,
    isLoading: true
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
function getRigths(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.getRigths,
    data: data,
    isLoading
  })
}
function setRigths(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.setRigths,
    data: data,
    isLoading
  })
}

export { queryVipUser, getVipUserInfo, deleteVipUser, updateVipUser, addVipUser, getRigths, setRigths }
