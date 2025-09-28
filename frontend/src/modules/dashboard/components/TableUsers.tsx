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
import { DeleteUserModal } from "./DeleteUserModal";
import { users } from "../mocks/usersMock";
import { useUsersContext } from "../context/useUsersContext";
import { EditUserModal } from "./EditUserModal";

export const TableUsers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const data = users;

  const { modalDeleteUserOpen, openDeleteUserModal, closeDeleteUserModal, modalEditUserOpen, openEditUserModal, closeEditUserModal } = useUsersContext()

  // Filtrar productos
  const filteredData = useMemo(() => {
    return data.data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
              <TableHeadCell>
                <span className="sr-only">Delete</span>
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
                  <button
                    onClick={openEditUserModal}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    onClick={openDeleteUserModal}
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DeleteUserModal isOpen={modalDeleteUserOpen} setClose={closeDeleteUserModal} />
      <EditUserModal isOpen={modalEditUserOpen} setClose={closeEditUserModal} />

      {totalPages > 1 && (
        <div className="flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            showIcons
            previousLabel=""
            nextLabel=""
          />
        </div>
      )}
    </div>
  );
}