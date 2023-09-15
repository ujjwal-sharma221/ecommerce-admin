"use client";

import { ColumnDef } from "@tanstack/react-table";

import CellActions from "./cell-actions";

export type CategoryColumn = {
  id: string;
  name: string;
  createdAt: string;
  billboardLabel: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardLabel,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original}></CellActions>,
  },
];
