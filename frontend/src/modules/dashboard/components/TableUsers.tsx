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
} from "flowbite-react";

interface Product {
  name: string;
  color: string;
  category: string;
  price: string;
}

const data: Product[] = [
  { name: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
  { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
  { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
  { name: "Apple Watch", color: "Gray", category: "Accessories", price: "$399" },
  { name: "iPad Pro", color: "Silver", category: "Tablet", price: "$899" },
  { name: "Dell XPS 13", color: "Black", category: "Laptop", price: "$1499" },
  { name: "Logitech MX Keys", color: "Black", category: "Accessories", price: "$129" },
  { name: "Samsung Galaxy Tab", color: "White", category: "Tablet", price: "$799" },
];

export const TableUsers = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filtrar productos
  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-4">
      <div>
        <TextInput
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell>Color</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
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
                  {item.name}
                </TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
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
          />
        </div>
      )}
    </div>
  );
}