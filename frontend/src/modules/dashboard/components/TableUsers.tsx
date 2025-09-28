"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
  Pagination,
  Button,
} from "flowbite-react";
import { formatDate } from "../../../core/utils/format-date";

interface Data {
  data: User[],
  metadata: Metadata
}

interface Metadata {
  page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  created_at: string;
  updated_at: string;
}

const data: Data = {
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

export const TableUsers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filtrar productos
  const filteredData = useMemo(() => {
    return data.data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-4 w-full mx-auto">
      <div className="flex gap-5 w-full justify-between">
        <div>
          <h2 className="font-bold text-2xl">Usuarios</h2>
        </div>
        <div className="flex gap-5">
          <TextInput
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Button>+ Add User</Button>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Created At</TableHeadCell>
              <TableHeadCell>Updated At</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {paginatedData.map((item, index) => (
              <TableRow
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.id}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{formatDate(item.created_at)}</TableCell>
                <TableCell>{formatDate(item.updated_at)}</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            showIcons
            previousLabel=""
            nextLabel=""
            color="primary"
          />
        </div>
      )}
    </div>
  );
}