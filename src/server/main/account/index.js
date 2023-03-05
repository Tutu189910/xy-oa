import yAxios from "@/server"

const apiURL = {
  getInfo: '/user/getInfoAll',
  update: '/user/update',
  add: '/user/register',
  query: '/user/query',
  changeStatus: '/user/changeStatus',
}

function queryAccount(data) {
  return yAxios.post({
    url: apiURL.query,
    data: data,
    isLoading: true
  })
}

function getAccountInfo() {
  return yAxios.post({
    url: apiURL.getInfo,
    isLoading: true
  })
}
function changeAccountStatus(data) {
  return yAxios.post({
    url: apiURL.changeStatus,
    data: data,
    // isLoading: true
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

export { queryAccount, getAccountInfo, changeAccountStatus, updateAccount, addAccount }
