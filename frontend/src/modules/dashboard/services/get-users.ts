import apiClient from "../../../core/http/axios"
import type { ApiResponseWithMetadata, ErrorModel } from "../../../core/types/http.interface";
import type { User } from "../types/user.interface";

interface Response {
    success?: ApiResponseWithMetadata<User>;
    error?: ErrorModel;
}

export const getAllUsers = async (): Promise<Response> => {
    try {
        const { data } = await apiClient.get<ApiResponseWithMetadata<User>>('/users')
        return {
            success: data
        }
    } catch (error: unknown) {
        const errorResponse: ErrorModel = { code: 500, message: "Unknown error" };

        if (error instanceof Error) {
            errorResponse.message = error.message;
        }

        return { error: errorResponse };
    }
}