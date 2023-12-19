import axios from 'axios'
export const API_URL = 'http://192.168.1.16:3000/v1'
export const IMAGE_URL = process.env.REACT_APP_IMAGE_URL

let store

export const injectStore = (_store) => {
  store = _store
}

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  let auth = null
  if (store.getState()?.AuthReducer?.data) {
    auth = store.getState()?.AuthReducer?.data?.token
  } else if (localStorage.getItem('token')) {
    auth = localStorage.getItem('token')
  }
  if (auth) {
    config.headers['authorization'] = auth
  }
  if (config?.urlParams && typeof config?.url?.replace === 'function') {
    Object.entries(config.urlParams || {}).forEach(([key, value]) => {
      config.url = config.url.replace(`:${key}`, value) // encodeURIComponent()
    })
  }
  return config
})

export default api
