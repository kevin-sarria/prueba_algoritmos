import type { ApiResponseWithMetadata } from "../../../core/types/http.interface";
import type { User } from "../types/user.interface";

export const users: ApiResponseWithMetadata<User> = {
  data: [
    {
      id: "1",
      email: "juan.perez@example.com",
      name: "Juan Pérez",
      role: "admin",
      created_at: "2025-08-10T14:32:00Z",
      updated_at: "2025-09-15T09:20:00Z"
    },
    {
      id: "2",
      email: "maria.garcia@example.com",
      name: "María García",
      role: "user",
      created_at: "2025-08-12T10:45:00Z",
      updated_at: "2025-09-18T16:05:00Z"
    },
    {
      id: "3",
      email: "carlos.mendoza@example.com",
      name: "Carlos Mendoza",
      role: "moderator",
      created_at: "2025-08-14T18:15:00Z",
      updated_at: "2025-09-20T12:10:00Z"
    },
    {
      id: "4",
      email: "laura.rojas@example.com",
      name: "Laura Rojas",
      role: "user",
      created_at: "2025-08-16T08:30:00Z",
      updated_at: "2025-09-22T11:45:00Z"
    },
    {
      id: "5",
      email: "andres.torres@example.com",
      name: "Andrés Torres",
      role: "user",
      created_at: "2025-08-18T20:50:00Z",
      updated_at: "2025-09-24T07:25:00Z"
    }
  ],
  metadata: {
    page: 1,
    per_page: 5,
    total_pages: 10,
    total_items: 50
  }
}