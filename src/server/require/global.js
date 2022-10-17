let BASE_URL = ''
const BASE_OUTTIME = 8000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://127.0.0.1:8080'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://127.0.0.1:8080'
}
export { BASE_URL, BASE_OUTTIME }
