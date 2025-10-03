import type { AxiosError } from "axios"
import type { ErrorModel } from "../types/http.interface"

export function parseAxiosError(error: unknown): ErrorModel {
  const err = error as AxiosError<{ message?: string }>

  return {
    code: err.response?.status ?? 500,
    message: err.response?.data?.message ?? "An unexpected error occurred",
  }
}