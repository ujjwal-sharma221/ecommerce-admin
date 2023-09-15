"use client";

import { PlusSquare } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "../../settings/components/heading";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import ApiList from "@/components/ui/api-list";

type CategoryClientProps = {
  data: CategoryColumn[];
};

export const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        ></Heading>
        <Button
          variant="secondary"
          onClick={() => {
            router.push(`/${params.storeId}/categories/new`);
          }}
        >
          <PlusSquare className="w-4 h-4 mr-2"></PlusSquare>
          Add New
        </Button>
      </div>
      <DataTable searchKey="name" columns={columns} data={data}></DataTable>
      {/* <Separator></Separator> */}
      <Heading title="API" description="API calls for Categories"></Heading>
      <ApiList entityName="categories" entityIdName="categoryId"></ApiList>
    </>
  );
};
