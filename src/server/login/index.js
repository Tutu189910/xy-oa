import yAxios from ".."

const apiURL = {
  // 登录
  login: '/api/login',
  //获取用户信息
  getInfo: '/home/getInfo'
}

function login(data) {
  return yAxios.post({
    url: apiURL.login,
    data: data,
  })
}

function getUesrInfo(data) {
  return yAxios.get({
    url: apiURL.getInfo,
    data: data,
    isLoading: false
  })
}

export { login, getUesrInfo }
