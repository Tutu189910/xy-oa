import axios from "axios"
import { Loading } from 'element-ui';

class yRequire {
  instance
  interceptors
  loading
  isLoading
  constructor(config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isLoading = true

    this.instance.interceptors.request.use(
      (config) => {
        if (this.isLoading) {
          this.loading = Loading.service({
            lock: true,
            text: '加载中',
            spinner: 'el-loading',
            background: 'rgba(255, 255, 255, 0.7)'
          });
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        if (this.isLoading) {
          setTimeout(() => {
            this.loading.close()
          }, 6000);
        }
        return res
      },
      (err) => {
        if (this.isLoading) {
          this.loading.close()
        }
        return err
      }
    )
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
  }
  request(config) {
    return new Promise((result, reject) => {
      if (config.interceptors?.request) {
        config = config.interceptors?.request(config)
      }
      if (config?.isLoading === false) {
        this.isLoading = false
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.response) {
            res = config.interceptors?.response(res)
          }
          this.isLoading = true
          result(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
  delete(config) {
    return this.request({ ...config, method: 'delete' })
  }
  patch(config) {
    return this.request({ ...config, method: 'patch' })
  }
}

export default yRequire
