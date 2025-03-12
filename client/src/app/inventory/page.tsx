"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppSelector } from "../redux";

const columns: GridColDef[] = [
  {
    field: "productId",
    headerName: "ID",
    width: 300,
    headerClassName: "bg-yellow text-blue",
  },
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <CircularProgress color="success" />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        // checkboxSelection
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#005ab4 !important", // Color de fondo forzado
            color: "yellow !important", // Color del texto
            fontWeight: "bold",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", // Para resaltar la cabecera
            position: "sticky",
            top: 0,
            zIndex: 1,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "black", // Color del texto de los títulos
            // fontWeight: "bold", // Negrita
            fontSize: "12px", // Tamaño de la fuente
          },
        }}
        className={`bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700`}
      />
    </div>
  );
};

export default Inventory;
