"use client";

import { PlusSquare } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "../../settings/components/heading";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import ApiList from "@/components/ui/api-list";

type BillboardProps = {
  data: BillboardColumn[];
};

export const BillboardClient = ({ data }: BillboardProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        ></Heading>
        <Button
          variant="secondary"
          onClick={() => {
            router.push(`/${params.storeId}/billboard/new`);
          }}
        >
          <PlusSquare className="w-4 h-4 mr-2"></PlusSquare>
          Add New
        </Button>
      </div>
      <DataTable searchKey="label" columns={columns} data={data}></DataTable>
      {/* <Separator></Separator> */}
      <Heading title="API" description="API calls for billboards"></Heading>
      <ApiList entityName="billboard" entityIdName="billboardId"></ApiList>
    </>
  );
};
