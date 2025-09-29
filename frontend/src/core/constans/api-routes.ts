export const apiRoutes = {
    AUTH: {
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
        REFRESH_TOKEN: '/auth/refresh'
    },
    USERS: {
        GET_ALL: (search?: string, page?: number | string, limit?: number) => `/users?search='${search}'&page=${page}&size=${limit}`,
        GET_USER: (idUser: string | number) => `/users/${idUser}`,
        CREATE: '/users',
        EDIT: (idUser: string | number) => `/users/${idUser}`,
        DELETE: (idUser: string | number) => `/users/${idUser}`,
    }
}