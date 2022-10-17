import yRequire from "./require/require";
import { BASE_OUTTIME, BASE_URL } from './require/global'
import { getLocal } from "@/tool/localTool";

const yAxios = new yRequire(
  {
    baseURL: BASE_URL,
    timeout: BASE_OUTTIME,
    interceptors: {
      requestInterceptors(config) {
        console.log('实例拦截');
        const token = getLocal('token')
        config.headers.Authorization = token
        return config
      },
    }
  }
)

export default yAxios
