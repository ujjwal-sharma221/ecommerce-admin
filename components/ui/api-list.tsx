"use client";

import { useParams } from "next/navigation";

import UseOrigin from "@/hooks/use-origin";
import APIAlert from "./api-alert";

const ApiList = ({ entityIdName, entityName }: APIListProps) => {
  const params = useParams();
  const origin = UseOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <APIAlert
        title="GET"
        variant="Public"
        description={`${baseUrl}/${entityName}`}
      ></APIAlert>

      <APIAlert
        title="GET"
        variant="Public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      ></APIAlert>

      <APIAlert
        title="POST"
        variant="Admin"
        description={`${baseUrl}/${entityName}`}
      ></APIAlert>

      <APIAlert
        title="PATCH"
        variant="Admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      ></APIAlert>

      <APIAlert
        title="DELETE"
        variant="Admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      ></APIAlert>
    </>
  );
};

export default ApiList;
