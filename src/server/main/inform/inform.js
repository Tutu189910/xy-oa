import yAxios from "@/server"

const apiURL = {
  getInform: '/inform/getInform',
  addInform: '/inform/addInform',
  getBeforeInform: '/inform/getBeforeInform',
  queryInform: '/inform/queryInform',
  deleteInform: '/inform/deleteInform',
  updateInform: '/inform/updateInform',
}

function addInform(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.addInform,
    data: data,
    isLoading
  })
}
function getInform(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.getInform,
    data: data,
    isLoading
  })
}
function getBeforeInform(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.getBeforeInform,
    data: data,
    isLoading
  })
}
function queryInform(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.queryInform,
    data: data,
    isLoading
  })
}
function updateInform(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.updateInform,
    data: data,
    isLoading
  })
}
function deleteInform(data, isLoading = true) {
  return yAxios.post({
    url: apiURL.deleteInform,
    data: data,
    isLoading
  })
}


export { addInform, getInform, getBeforeInform, queryInform, deleteInform, updateInform }
