import yAxios from ".."

const apiURL = {
  // 登录
  login: '/api/login',
  //获取用户信息
  getInfo: '/user/getInfo'
}

function login(data) {
  return yAxios.post({
    url: apiURL.login,
    data: data,
  })
}

function getUserInfo(data) {
  return yAxios.get({
    url: apiURL.getInfo,
    data: data,
    isLoading: false
  })
}

export { login, getUserInfo }
