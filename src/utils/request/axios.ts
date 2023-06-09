import axios, { type AxiosResponse } from 'axios'
import { useAuthStore } from '@/store'

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
})

service.interceptors.request.use(
  (config) => {
    const token = useAuthStore().token
    const sid = window.localStorage.getItem('AuthorizationSID')
    if (sid)
      config.headers.AuthorizationSID = sid
    if (token)
      config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200) {
      // session超时，返回100错误码，清除sid
      if (response.data.errorCode && response.data.errorCode === '100') {
        window.localStorage.removeItem('AuthorizationSID')
        window.location.href = '/in.html'
      }
      return response
    }
    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
