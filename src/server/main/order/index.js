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
  })
}

function getOrderInfo() {
  return yAxios.get({
    url: apiURL.getInfo,
    isLoading: false
  })
}
function deleteOrder(data) {
  console.log(data);
  return yAxios.post({
    url: apiURL.delete,
    data: data,
    isLoading: false
  })
}

export { queryOrder, getOrderInfo, deleteOrder }
