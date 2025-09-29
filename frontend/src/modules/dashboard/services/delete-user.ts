import { apiRoutes } from "../../../core/constans/api-routes";
import { httpClient } from "../../../core/http/httpClient";
import type { ApiResponseWithMetadata, ErrorModel } from "../../../core/types/http.interface";
import type { User } from "../types/user.interface";

interface Response {
    success?: boolean;
    error?: ErrorModel;
}

interface Props {
    userId: string;
}

export const deleteUser = async ({ userId }: Props): Promise<Response> => {
    try {
        await httpClient.delete<ApiResponseWithMetadata<User>>(apiRoutes.USERS.DELETE(userId))
        return {
            success: true
        }
    } catch (error: unknown) {
        const errorResponse: ErrorModel = { code: 500, message: "Unknown error" };

        if (error instanceof Error) {
            errorResponse.message = error.message;
        }

        return { error: errorResponse };
    }
}