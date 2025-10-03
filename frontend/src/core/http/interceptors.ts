// src/core/http/interceptors.ts
import apiClient from "./axios";

/**
 * Interceptor para agregar token dinámicamente a cada request
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      // Usamos el método set en lugar de reemplazar headers
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Interceptor para manejar respuestas con error 401
 */
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Aquí podrías implementar refresh token si lo tuvieras
      // const newToken = await refreshToken();
      // localStorage.setItem("token", newToken);
      // originalRequest.headers.set("Authorization", `Bearer ${newToken}`);
      // return apiClient(originalRequest);

      console.warn("Unauthorized, redirecting to login...");
      window.location.href = "/login"; // opcional: redirige al login
    }

    return Promise.reject(error);
  }
);
