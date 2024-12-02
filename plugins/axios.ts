import axios from 'axios'

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:2001/',
  })
  return {
    provide: { axios: axiosInstance },
  }
})
