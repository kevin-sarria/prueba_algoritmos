// src/core/http/httpClient.ts
import apiClient from "./axios";
import "./interceptors"; // importante: importa los interceptores para activarlos
import { type AxiosRequestConfig } from "axios";

export const httpClient = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.get<T>(url, config);
    return data;
  },

  post: async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.post<T>(url, body, config);
    return data;
  },

  put: async <T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.put<T>(url, body, config);
    return data;
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await apiClient.delete<T>(url, config);
    return data;
  },
};
