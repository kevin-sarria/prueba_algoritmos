import axios, { type AxiosInstance } from "axios"

const token = localStorage.getItem("token")

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Authorization": `Bearer ${token}`
  },
})

export default apiClient