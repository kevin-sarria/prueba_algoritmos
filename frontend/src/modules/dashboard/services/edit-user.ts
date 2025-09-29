import { apiRoutes } from "../../../core/constans/api-routes";
import { httpClient } from "../../../core/http/httpClient";
import type { ApiResponseWithMetadata, ErrorModel } from "../../../core/types/http.interface";
import type { User } from "../types/user.interface";

interface Response {
    success?: ApiResponseWithMetadata<User>;
    error?: ErrorModel;
}

interface Props {
    dataInput: Partial<User>;
    userId: string;
}

export const editUser = async ({ userId, dataInput }: Props): Promise<Response> => {
    try {
        const resp = await httpClient.put<ApiResponseWithMetadata<User>>(apiRoutes.USERS.EDIT(userId), dataInput)
        return {
            success: resp
        }
    } catch (error: unknown) {
        const errorResponse: ErrorModel = { code: 500, message: "Unknown error" };

        if (error instanceof Error) {
            errorResponse.message = error.message;
        }

        return { error: errorResponse };
    }
}