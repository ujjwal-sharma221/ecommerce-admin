"use client";

import { PlusSquare } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "../../settings/components/heading";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import ApiList from "@/components/ui/api-list";

type SizesClientProps = {
  data: SizeColumn[];
};

export const SizesClient = ({ data }: SizesClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        ></Heading>
        <Button
          variant="secondary"
          onClick={() => {
            router.push(`/${params.storeId}/sizes/new`);
          }}
        >
          <PlusSquare className="w-4 h-4 mr-2"></PlusSquare>
          Add New
        </Button>
      </div>
      <DataTable searchKey="name" columns={columns} data={data}></DataTable>
      <Heading title="API" description="API calls for Sizes"></Heading>
      <ApiList entityName="sizes" entityIdName="sizeId"></ApiList>
    </>
  );
};
