"use client";

import { PlusSquare } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "../../settings/components/heading";
import { ColorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import ApiList from "@/components/ui/api-list";

type ColorClientProps = {
  data: ColorColumn[];
};

export const ColorClient = ({ data }: ColorClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        ></Heading>
        <Button
          variant="secondary"
          onClick={() => {
            router.push(`/${params.storeId}/colors/new`);
          }}
        >
          <PlusSquare className="w-4 h-4 mr-2"></PlusSquare>
          Add New
        </Button>
      </div>
      <DataTable searchKey="name" columns={columns} data={data}></DataTable>
      <Heading title="API" description="API calls for Colors"></Heading>
      <ApiList entityName="colors" entityIdName="colorId"></ApiList>
    </>
  );
};
