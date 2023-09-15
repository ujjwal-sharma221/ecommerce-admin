import prismaDb from "@/lib/prismadb";
import React from "react";
import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismaDb.category.findUnique({
    where: { id: params.categoryId },
  });

  const billboards = await prismaDb.billboard.findMany({
    where: { storeId: params.storeId },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoryForm
          initialData={category}
          billboards={billboards}
        ></CategoryForm>
      </div>
    </div>
  );
};

export default CategoryPage;
