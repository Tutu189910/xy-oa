import yAxios from "@/server"

const apiURL = {
  getInfo: '/order/info',
  update: '/order/update',
  add: '/order/add',
  query: '/order/query',
  delete: '/order/delete',
}

function queryOrder(data) {
  return yAxios.post({
    url: apiURL.query,
    data: data,
    isLoading: true
  })
}

function getOrderInfo() {
  return yAxios.get({
    url: apiURL.getInfo,
    isLoading: true
  })
}
function deleteOrder(data) {
  return yAxios.post({
    url: apiURL.delete,
    data: data,
    isLoading: false
  })
}
function updateOrder(data) {
  return yAxios.post({
    url: apiURL.update,
    data: data,
  })
}
function addOrder(data) {
  return yAxios.post({
    url: apiURL.add,
    data: data,
  })
}

export { queryOrder, getOrderInfo, deleteOrder, updateOrder, addOrder }
