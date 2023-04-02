let BASE_URL = ''
const BASE_OUTTIME = 8000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://140.210.193.35:3001'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = '/api'
}
export { BASE_URL, BASE_OUTTIME }
