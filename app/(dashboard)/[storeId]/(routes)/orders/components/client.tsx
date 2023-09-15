"use client";

import Heading from "../../settings/components/heading";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

type OrderProps = {
  data: OrderColumn[];
};

export const OrderClient = ({ data }: OrderProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage Orders for your store"
        ></Heading>
      </div>
      <DataTable searchKey="products" columns={columns} data={data}></DataTable>
    </>
  );
};
