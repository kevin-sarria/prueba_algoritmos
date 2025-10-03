import { apiRoutes } from "../../../core/constans/api-routes";
import { parseAxiosError } from "../../../core/http/errorHandler";
import { httpClient } from "../../../core/http/httpClient";
import type { ErrorModel } from "../../../core/types/http.interface";
import type { User } from "../types/user.interface";

interface Response {
    success?: {
        data: User[]
    };
    error?: ErrorModel;
}

export const getAllUsers = async (): Promise<Response> => {
    try {
        const data = await httpClient.get<{data: User[]}>(apiRoutes.USERS.GET_ALL())
        return {
            success: data
        }
    } catch (error) {
        return {
            error: parseAxiosError(error)
        }
    }
}