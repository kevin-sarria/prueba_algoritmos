import { apiRoutes } from "../../../core/constans/api-routes"
import { httpClient } from "../../../core/http/httpClient"
import type { ErrorModel } from "../../../core/types/http.interface"
import { parseAxiosError } from "../../../core/http/errorHandler"
import type { LoginResponse, RegisterResponse } from "../types/auth"

interface PropsLoginService {
    email: string
    password: string
}

interface PropsRegisterService {
    name: string
    email: string
    password: string
}

interface LoginServiceResponse {
    success?: LoginResponse
    error?: ErrorModel
}

interface RegisterServiceResponse {
    success?: LoginResponse
    error?: ErrorModel
}

export const loginService = async({ email, password }: PropsLoginService): Promise<LoginServiceResponse> => {
    const dataInput = { email, password }
    try {
        const data = await httpClient.post<LoginResponse>(apiRoutes.AUTH.LOGIN, dataInput)
        return { success: data }
    } catch(err) {
        return { error: parseAxiosError(err) }
    }
}

export const registerService = async({ name, email, password }: PropsRegisterService): Promise<RegisterServiceResponse> => {
    const dataInput = { name, email, password }
    try {
        const data = await httpClient.post<RegisterResponse>(apiRoutes.AUTH.REGISTER, dataInput)
        return { success: data }
    } catch(err) {
        return { error: parseAxiosError(err) }
    }
}