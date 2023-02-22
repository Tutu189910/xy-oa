import yAxios from "@/server"

const apiURL = {
  getInfo: '/user/infoAll',
  update: '/user/update',
  add: '/user/register',
  query: '/user/query',
  delete: '/user/delete',
}

function queryAccount(data) {
  return yAxios.post({
    url: apiURL.query,
    data: data,
  })
}

function getAccountInfo() {
  return yAxios.post({
    url: apiURL.getInfo,
    isLoading: false
  })
}
function deleteAccount(data) {
  return yAxios.post({
    url: apiURL.delete,
    data: data,
    isLoading: false
  })
}
function updateAccount(data) {
  return yAxios.post({
    url: apiURL.update,
    data: data,
  })
}
function addAccount(data) {
  return yAxios.post({
    url: apiURL.add,
    data: data,
  })
}

export { queryAccount, getAccountInfo, deleteAccount, updateAccount, addAccount }
