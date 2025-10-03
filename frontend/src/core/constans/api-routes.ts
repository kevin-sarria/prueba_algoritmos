export const apiRoutes = {
    AUTH: {
        REGISTER: '/Auth/Register',
        LOGIN: '/Auth/Login',
        REFRESH_TOKEN: '/Auth/Refresh'
    },
    USERS: {
        GET_ALL: () => `/Users`,
        GET_USER: (idUser: string | number) => `/Users/${idUser}`,
        CREATE: '/users',
        EDIT: (idUser: string | number) => `/Users/${idUser}`,
        DELETE: (idUser: string | number) => `/Users/${idUser}`,
    }
}