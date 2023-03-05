import yAxios from "@/server"

const apiURL = {
  weekData: '/echart/weekData',
  yearData: '/echart/yearData',
  add: '/echart/',
  query: '/echart/',
  delete: '/echart/',
}

function getWeekData(data) {
  return yAxios.post({
    url: apiURL.weekData,
    data: data,
    isLoading: true
  })
}
function getYearData(data) {
  return yAxios.post({
    url: apiURL.yearData,
    data: data,
    isLoading: true
  })
}


export { getWeekData, getYearData }
