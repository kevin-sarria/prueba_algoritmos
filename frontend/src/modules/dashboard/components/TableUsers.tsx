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
import { useUsersContext } from "../context/useUsersContext";
import { EditUserModal } from "./EditUserModal";
import { AddUserModal } from "./AddUserModal";

export const TableUsers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const {
    users,
    modalAddUserOpen,
    openAddUserModal,
    closeAddUserModal,
    modalDeleteUserOpen,
    openDeleteUserModal,
    closeDeleteUserModal,
    modalEditUserOpen,
    openEditUserModal,
    closeEditUserModal,
    userSelected,
    isMyAccount
  } = useUsersContext();

  // Filtrar Usuarios
  const filteredData = useMemo(() => {
  if (users) {
    return users.data.filter((item) =>
      (item.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (item.email?.toLowerCase() || "").includes(search.toLowerCase())
    );
  }
  return [];
}, [search, users]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
          <Button onClick={openAddUserModal}>+ Add User</Button>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>#</TableHeadCell>
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
            {paginatedData.map((user, index) => (
              <TableRow
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.rol}</TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
                <TableCell>{formatDate(user.updatedAt)}</TableCell>
                <TableCell>
                  <button
                    onClick={() => openEditUserModal(user)}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => openDeleteUserModal()}
                    className={`font-medium  ${ isMyAccount(user) ? 'text-gray-300 cursor-not-allowed' : 'text-red-600 dark:text-red-500 hover:underline' }`}
                    disabled={isMyAccount(user)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AddUserModal isOpen={modalAddUserOpen} setClose={closeAddUserModal} />

      <DeleteUserModal
        isOpen={modalDeleteUserOpen}
        setClose={closeDeleteUserModal}
        // userSelectedId={userSelected?.id}
      />
      <EditUserModal userSelected={userSelected} isOpen={modalEditUserOpen} setClose={closeEditUserModal} />

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
};
