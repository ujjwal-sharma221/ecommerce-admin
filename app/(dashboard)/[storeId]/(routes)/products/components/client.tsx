"use client";

import { PlusSquare } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "../../settings/components/heading";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

type ProductProps = {
  data: ProductColumn[];
};

export const ProductClient = ({ data }: ProductProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage Products for your store"
        ></Heading>
        <Button
          variant="secondary"
          onClick={() => {
            router.push(`/${params.storeId}/products/new`);
          }}
        >
          <PlusSquare className="w-4 h-4 mr-2"></PlusSquare>
          Add New
        </Button>
      </div>
      <DataTable searchKey="name" columns={columns} data={data}></DataTable>
      <Heading title="API" description="API calls for Products"></Heading>
      <ApiList entityName="products" entityIdName="productId"></ApiList>
    </>
  );
};
