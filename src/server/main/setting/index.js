import yAxios from "@/server"

const apiURL = {
  info: '/user/update/info',
  psd: '/user/update/password',
}

function updateUserInfo(data) {
  return yAxios.post({
    url: apiURL.info,
    data: data,
    isLoading: true
  })
}

function updateUserPsd(data) {
  return yAxios.post({
    url: apiURL.psd,
    data: data,
    isLoading: true
  })
}

export { updateUserInfo, updateUserPsd }
