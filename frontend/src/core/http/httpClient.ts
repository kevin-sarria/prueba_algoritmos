// src/core/http/httpClient.ts
import apiClient from "./axios"
import { type AxiosRequestConfig } from "axios"

/**
 * Wrapper around Axios to standardize HTTP requests.
 * This layer avoids using axios directly in the modules.
 */
export const httpClient = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.get<T>(url, config)
    return data
  },

  post: async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.post<T>(url, body, config)
    return data
  },

  put: async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.put<T>(url, body, config)
    return data
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.delete<T>(url, config)
    return data
  },
}
